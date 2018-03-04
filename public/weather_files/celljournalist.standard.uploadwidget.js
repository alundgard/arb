//jQuery.support.cors = true;

if (!jQuery.support.cors && jQuery.ajaxTransport && window.XDomainRequest) {
    console.log('adding ie support for cors');
    var httpRegEx = /^https?:\/\//i;
    var getOrPostRegEx = /^get|post$/i;
    var sameSchemeRegEx = new RegExp('^' + location.protocol, 'i');
    var htmlRegEx = /text\/html/i;
    var jsonRegEx = /\/json/i;
    var xmlRegEx = /\/xml/i;

    // ajaxTransport exists in jQuery 1.5+
    jQuery.ajaxTransport('text html xml json', function (options, userOptions, jqXHR) {
        // XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
        if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(options.url) && sameSchemeRegEx.test(options.url)) {
            var xdr = null;
            var userType = (userOptions.dataType || '').toLowerCase();
            return {
                send: function (headers, complete) {
                    xdr = new XDomainRequest();
                    if (/^\d+$/.test(userOptions.timeout)) {
                        xdr.timeout = userOptions.timeout;
                    }
                    xdr.ontimeout = function () {
                        complete(500, 'timeout');
                    };
                    xdr.onload = function () {
                        var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
                        var status = {
                            code: 200,
                            message: 'success'
                        };
                        var responses = {
                            text: xdr.responseText
                        };
                        try {
                            if (userType === 'html' || htmlRegEx.test(xdr.contentType)) {
                                responses.html = xdr.responseText;
                            } else if (userType === 'json' || (userType !== 'text' && jsonRegEx.test(xdr.contentType))) {
                                try {
                                    responses.json = jQuery.parseJSON(xdr.responseText);
                                } catch (e) {
                                    status.code = 500;
                                    status.message = 'parseerror';
                                    //throw 'Invalid JSON: ' + xdr.responseText;
                                }
                            } else if (userType === 'xml' || (userType !== 'text' && xmlRegEx.test(xdr.contentType))) {
                                var doc = new ActiveXObject('Microsoft.XMLDOM');
                                doc.async = false;
                                try {
                                    doc.loadXML(xdr.responseText);
                                } catch (e) {
                                    doc = undefined;
                                }
                                if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
                                    status.code = 500;
                                    status.message = 'parseerror';
                                    throw 'Invalid XML: ' + xdr.responseText;
                                }
                                responses.xml = doc;
                            }
                        } catch (parseMessage) {
                            throw parseMessage;
                        } finally {
                            complete(status.code, status.message, responses, allResponseHeaders);
                        }
                    };
                    // set an empty handler for 'onprogress' so requests don't get aborted
                    xdr.onprogress = function () {
                    };
                    xdr.onerror = function () {
                        complete(500, 'error', {
                            text: xdr.responseText
                        });
                    };
                    var postData = '';
                    if (userOptions.data) {
                        //postData = (jQuery.type(userOptions.data) === 'string' || userOptions.data instanceof String) ? userOptions.data : jQuery.param(userOptions.data);
                        postData = 'opts=' + new String(userOptions.data.opts);
                    }
                    xdr.open(options.type, options.url);
                    xdr.send(postData);
                },
                abort: function () {
                    if (xdr) {
                        xdr.abort();
                    }
                }
            };
        }
    });
} else {
    //console.log('not needed');
}

$(document).ready(function() {
    if ($("#cjUploadContainer").length == 0) {
        $("body").append('<div id="cjUploadLightbox" style="display:none; background-color: white; min-height: 350px;"><a id="close_x" class="close sprited" style="opacity:1 !important; float:right;" href="#"><img class="closeButton" src="" style="height:23px; width:24px;"/></a><div id="cjUploadContainer"></div></div>');
    }
});

(function ($) {
    $.fn.uploadWidget = function (options, events) {

        var el = this;
        var storedOpts = el.data('cj-opts') || {};
        var sessionId;

        var evts = {};
        var opts = $.extend({}, $.fn.uploadWidget.defaults, storedOpts, options);
        
        if (opts.error !== undefined) {
            evts.error = opts.error;
            opts.error = null;
        }

        if (opts.success !== undefined) {
            evts.success = opts.success;
            opts.success = null;
        }

        el.data('cj-opts', options);

        var host = window.location.protocol + '//' + window.location.hostname;
        opts.targetHost = host;

        if (opts.lightBox == true) {
            opts.autoResize = false;
        }

        $('#cjUploadLightbox img.closeButton').attr("src", "//sandbox.celljournalist.com/Images/close.png");

        //Register a session
        var optionData = JSON.stringify(opts);
        $.ajax({
            url: '//sandbox.celljournalist.com/uploadwidget/createsession',
            data: { opts: optionData  },
            dataType: 'json',
            crossDomain: true,
            type: 'POST',
            success: function (result) {
                sessionId = result.id;
                buildFrame();
            },
            error: function(a, b) {
                
            },
            async: true
        });


        var handleMessage = function (e) {
            var data = $.parseJSON(e.data);
            var frame = $('.cjiframe');

            switch (data.action) {
                case "complete":
                    complete(frame, data);
                    if (evts.success !== undefined) {
                        evts.success();
                    }
                    break;
                case "max":
                    if (evts.error !== undefined) {
                        evts.error({ type: "imagecount" });
                    }
                    break;
                case "invalid":
                    if (evts.error !== undefined) {
                        evts.error({ type: "invalidextension" });
                    }
                    break;
                default:
                    resize(frame, data);
                    break;
            }
        };

        var buildFrame = function() {
            var frameSrc = '//sandbox.celljournalist.com/uploadwidget/index?sessionId=' + sessionId;

            $("#cjIFrame", el).remove();

            var iframe = document.createElement("iframe");


            if (opts.hasOwnProperty('width')) {
                iframe.style.width = opts.width;
            } else {
                iframe.style.width = opts.experience.toLowerCase() == "web" ? '720px' : '460px';
            }

            if (opts.hasOwnProperty('height')) {
                iframe.style.height = opts.height;
            } else {
                iframe.style.height = opts.experience.toLowerCase() == "web" ? '200px' : '400px';
            }


            if (opts.experience.toLowerCase() == "mobile") {
                iframe.style.width = $(window).width() - 10;
                iframe.style.height = $(window).height() - 10;
            }

            if (opts.hasOwnProperty('scrolling')) {
                iframe.scrolling = opts.scrolling;
            } else {
                iframe.scrolling = "no";
            }

            iframe.frameBorder = 0;
            iframe.src = frameSrc;
            iframe.setAttribute("id", "cjIFrame");
            iframe.setAttribute("class", "cjiframe");
            el.append(iframe);
        };

        var complete = function (frame, data) {
            var completeHeight = (160 * data.visible) + 20;
            frame.height(completeHeight);
        };

        var resize = function (frame, data) {
            if (opts.hasOwnProperty('autoResize') && opts.autoResize == false) {
                return;
            }

            var height = jQuery(".cjiframe").height();
            var newHeight = height;
            if (opts.experience === "tablet") {
                if (height <= 160) {
                    frame.height(height + 110);
                }
                return;
            }

            var heightDelta = 200;
            if (data.visible == 1) {
                newHeight += 400;
                //heightDelta = 400;
            }

            if (data.visible == 2) {
                newHeight += 10;
                heightDelta = 10;
            }

            if (data.action == "add") {
                frame.height(height + heightDelta);
            }

            if (data.action == "remove") {
                frame.height(height - heightDelta);
            }
        };

        if (window.addEventListener) {
            addEventListener("message", handleMessage, false);
        } else {
            attachEvent("onmessage", handleMessage);
        }

    };

    //defaults
    $.fn.uploadWidget.defaults = {
        experience: 'web',
        memberEmail: '',
        username: '',
        partitionId: 201,
        maxImages: 5,
        baseUrl: 'beta.sandbox.celljournalist.com',
        styleSheet: '',
        uploadButtonText: 'Select photo or video',
        dropZoneText: '...or drop here to upload',
        titleCaption: 'Title this photo',
        descriptionCaption: 'Describe this photo',
        assignmentCaption: 'Submit this to an assignment?',
        locationCaption: 'Where was this taken?',
        dateCaption: 'When was this taken?',
        creditCaption: 'Credit',
        emailCaption: 'Email Address',
        submitButtonText: 'Submit',
        removeText: 'Remove',
        dateFormat: 'MM/dd/yyyy',
        imageFrameColor: '#dddddd',
        titleRequired: false,
        descriptionRequired: false,
        assignmentRequired: false,
        locationRequired: false,
        dateRequired: false,
        emailRequired: false,
        creditRequired: false,
        thumbStyle: 'crop',
        instructions: 'Limit 5 files per upload',
        autoResize: true,
        lightBox: false,
    };

}(jQuery));

