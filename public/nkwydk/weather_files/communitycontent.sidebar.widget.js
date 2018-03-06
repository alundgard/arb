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
    console.log('not needed');
}


(function ($) {
    $.fn.sidebarWidget = function (options) {

        var el = this;
        var storedOpts = el.data('cj-opts') || {};

        var opts = $.extend({}, $.fn.sidebarWidget.defaults, storedOpts, options);

        if (opts.debug) {
            window.console && console.log(opts);
        }

        el.data('cj-opts', options);

        //Get the data
        var queryString = decodeURIComponent($.param(opts));

        var getData = function() {
            $.ajax({
                url: '//' + opts.url + '/SidebarWidget/Index',
                data: queryString,
                dataType: 'jsonp',
                jsonpCallback: 'myCallback', // prevents adding callback=<random string> to the request url to make it work with cloudfront caching
                cache: true, // prevents the request url to append _=<timestamp> to the end so we can use cloudfront to handle the cache
                crossDomain: true,
                type: 'GET',
                success: function (result) {

                    if (opts.debug) {
                        window.console && console.log('received template');
                    }

                    buildWidget(result.html);
                },
                error: function (xhr, stat, error) {
                    window.console && console.log(error);
                    window.console && console.log(stat);
                },
                async: true
            });
        };


        var buildWidget = function(html) {
            $("#cc-swipe-container", el).remove();
            el.append(html);

            if (opts.debug) {
                window.console && console.log('template appended');
                window.console && console.log(html);
                window.console && console.log('enable swipe');
            }

            window.mySwipe = Swipe(document.getElementById('cc-swipe-container'), {
                continuous: false
            });

            $(".cc-navigation-selector").click(function (e) {
                var page = $(this).data('page');
                $(".cc-navigation-selector i").removeClass('cc-current-page');
                $(".cc-p" + page + " i").addClass('cc-current-page');

                var pos = page - 1;
                window.mySwipe.slide(pos);
            });


        };

        var loadCss = function (href) {
            var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
            $("head").append(cssLink);
        }

        loadCss('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');
        loadCss('//' + opts.url + '/content/css/sidebarwidget.css');

        $.getScript('//' + opts.url + '/content/js/swipe.js', function(data, status, xhr) {
            getData();
        });

    };

    //defaults
    $.fn.sidebarWidget.defaults = {
        url: 'api.celljournalist.com',
        partitionId: 'FBD5B812-FBC8-46AD-A332-5788E580EA83',
        debug: false
    };

}(jQuery));
