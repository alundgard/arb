var cnnCdnUrl = "http://z.cdn.turner.com/cnn/van/resources/";
var logglyKey = 'babb6a0c-0aa6-42be-b12e-aff3b1eeb37e';
var logglyTag = 'VAN-widgets';
var enableLogging = true;

//loggly setup
if (enableLogging){
    var _LTracker = _LTracker || [];
    (function () {
        var sid = "cnnvanLoggerJS";
        var s = document.getElementById(sid);
        if (s == null)
        {
            var tag = document.createElement('script');
            tag.src = cnnCdnUrl + "/scripts/vendor/loggly.tracker.js";
            tag.id = sid;
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag.nextSibling);    
            _LTracker.push({'logglyKey': logglyKey, 'tag': logglyTag});
        }
    })();
}

var cnnvan_widgetsloaded = false;
window.addEventListener('DOMContentLoaded', function () {
    if (!cnnvan_widgetsloaded) {
        CnnVanDiscoverWidgets.init();
    }
    cnnvan_widgetsloaded = true;
});

var CnnVanRenderHelpers = function () {
    //constants
    var isLocal = false;
    var localCnnCdnUrl = "../../cdn-files/resources/";

    if (isLocal) {
        cnnCdnUrl = localCnnCdnUrl;
    }
    
    var WIDGETTYPE = {
        SINGLE: 'single',
        FEED: 'grid',
        PLAYLIST: 'playlist',
        DYNAMIC: 'dynamic'
    };
    var singlewidgetAttribute = 'data-cnnvan' + WIDGETTYPE.SINGLE +'widget';
    var feedwidgetAttribute = 'data-cnnvan' + WIDGETTYPE.FEED +'widget';
    var playlistwidgetAttribute = 'data-cnnvan' + WIDGETTYPE.PLAYLIST +'widget';
    var dynamicwidgetAttribute = 'data-cnnvan' + WIDGETTYPE.DYNAMIC +'widget';
    var feedDefaultNumRows = 3;
    var feedDefaultNumCols = 4;
    var feedTitleH = 30;
    var feedPadding = 2;
    var feedPagerH = 55;

    var getCnnCdnUrl = function() {
        return cnnCdnUrl;
    };
    
    //player getters
    var getPlayerHeight = function(playerW) {
        return ((playerW / 16) * 9);
    };
    var getThumbWidth = function(playerW) {
        var portion = playerW <= 560 ? 95 : 100;
        return ((playerW - portion) / getFeedNumCols(playerW));
    };
    var getThumbHeight = function(playerW) {
        return ((getThumbWidth(playerW) / 16) * 9);
    };
    var getFeedNumCols = function(playerW) {
        if (playerW <= 300)
            return 2;
        if (playerW > 300 && playerW <= 560)
            return 3;

        return feedDefaultNumCols;
    };
    var getFeedNumOfRows = function(rows) {
        if (rows != 1 && rows != 3) rows = feedDefaultNumRows;
        return rows;
    };
    var getFeedHeight = function (playerW, rows, videoCount) {
        rows = getFeedNumOfRows(rows);

        var playerHeight = getPlayerHeight(playerW);
        var thumbHeight = getThumbHeight(playerW);

        if (videoCount != null) {
            if (!includePager(rows, playerW, videoCount))
                feedPagerH = 30;
        }
        
        return playerHeight + feedTitleH + (thumbHeight * rows) + (feedPadding * rows) + feedPagerH;
    };
    var getGridHeight = function(playerW, rows) {

        rows = getFeedNumOfRows(rows);

        var thumbHeight = getThumbHeight(playerW);
        var gridPadding = 2;
        var gridPagerH = 55;
        var gridTitleH = 30;

        return gridTitleH + (thumbHeight * rows) + (gridPadding * rows) + gridPagerH;  
    };
    var includePager = function(rows, playerW, videoCount) {
        var columns = getFeedNumCols(playerW);
        if (videoCount <= columns * rows)
            return false;
        return true;
    };
    var isViewPortLessThan700 = function () {
        if (window.screen.availWidth > 700) {
            return false;
        }
        return true;
    };
    var isAutosize = function(size) {
        if (size == "auto" || size == "0")
            return true;
        return false;
    };

    var isMobile = function() {
        var ret = false;
        if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
            ret = true;
        }

        return ret;
    };

    //public methods
    return {
        getFeedHeight: getFeedHeight,
        getPlayerHeight: getPlayerHeight,
        getCnnCdnUrl: getCnnCdnUrl,
        WIDGETTYPE: WIDGETTYPE,
        singlewidgetAttribute: singlewidgetAttribute,
        feedwidgetAttribute: feedwidgetAttribute,
        playlistwidgetAttribute: playlistwidgetAttribute,
        dynamicwidgetAttribute: dynamicwidgetAttribute,
        isViewPortLessThan700: isViewPortLessThan700,
        getGridHeight: getGridHeight,
        isAutosize: isAutosize,
        isMobile: isMobile
    };

}();

var CnnVanDiscoverWidgets = function () {

    var $type,
        $singleWidgets,
        $feedWidgets,
        $playlistWidgets,
        $dynamicWidgets,

        init = function() {
            // widget types
            $type = CnnVanRenderHelpers.WIDGETTYPE;
            
            //all div elements
            var allDivElements = document.getElementsByTagName('div');

            //widgets
            $singleWidgets = getWidgets(allDivElements, CnnVanRenderHelpers.singlewidgetAttribute);
            $feedWidgets = getWidgets(allDivElements, CnnVanRenderHelpers.feedwidgetAttribute);
            $playlistWidgets = getWidgets(allDivElements, CnnVanRenderHelpers.playlistwidgetAttribute);
            $dynamicWidgets = getWidgets(allDivElements, CnnVanRenderHelpers.dynamicwidgetAttribute);

            createWidgets();
        },
        getWidgets = function(allDivElements, selector) {
            var matchingElements = [];

            try {
                for (var i = 0, n = allDivElements.length; i < n; i++) {
                    if (allDivElements[i].getAttribute(selector) != null) {
                        // Element exists with attribute. Add to array.
                        matchingElements.push(allDivElements[i]);
                    }
                }

            } catch (e) {
            }
            return matchingElements;
        },
        createWidgets = function() {
            if ($singleWidgets.length > 0)
                CnnVanCreateWidgets.init($singleWidgets, $type.SINGLE);
            if ($feedWidgets.length > 0)
                CnnVanCreateWidgets.init($feedWidgets, $type.FEED);
            if ($playlistWidgets.length > 0)
                CnnVanCreateWidgets.init($playlistWidgets, $type.PLAYLIST);
            if ($dynamicWidgets.length > 0)
                CnnVanCreateWidgets.init($dynamicWidgets, $type.DYNAMIC);
        };

    return {
        init: init
    };
}();

var CnnVanCreateWidgets = function () {
    var $playerSettings,
        $iframeContainer,
        $cnnCdnUrl,
        $type,

        init = function(containers, type) {
            var widgetContainers = containers;
            $cnnCdnUrl = CnnVanRenderHelpers.getCnnCdnUrl();
            $type = type;
            $playerSettings = {
                size: "640",
                rows: "0",
                playlist: ""
            };
                       
            for (var i = 0; i < widgetContainers.length; i++) {
                generateWidget(widgetContainers[i], i);
            }
        },
        generateWidget = function(container, idx) {
            $iframeContainer = container;

            if (container != null) {
                //pull size
                if (container.attributes["data-size"] != null) {
                    if (CnnVanRenderHelpers.isAutosize(container.attributes["data-size"].value)) {
                        $playerSettings.size = container.clientWidth;
                    } else {
                        $playerSettings.size = container.attributes["data-size"].value;
                    }
                }
                //pull rows
                if (container.attributes["data-rows"] != null) {
                    $playerSettings.rows = container.attributes["data-rows"].value;
                }

                //pull playlist
                if ($iframeContainer.attributes["data-playlist"] != null) {
                    $playerSettings.playlist = $iframeContainer.attributes["data-playlist"].value;
                }
            }
            var playerWidth = parseInt($playerSettings.size);
            var playerHeight = calculateIframeHeight(playerWidth);

            createIframe(idx, playerWidth, playerHeight);

            if (CnnVanRenderHelpers.isAutosize(container.attributes["data-size"].value)) {
                makeIframeResponsive($type + 'iframe' + idx);
            } else {
                forceSize(playerWidth, $type + 'iframe' + idx);
            }
        },
        calculateIframeHeight = function(playerWidth) {
            if ($type != CnnVanRenderHelpers.WIDGETTYPE.SINGLE) {
                var rows = parseInt($playerSettings.rows);
                var videoCount = null;
                if ($playerSettings.playlist != "") {
                    videoCount = $playerSettings.playlist.split('|').length;
                }
                return CnnVanRenderHelpers.getFeedHeight(playerWidth, rows, videoCount);
            }
            else {
                return CnnVanRenderHelpers.getPlayerHeight(playerWidth);
            }
        },
        createIframe = function(containerid, playerWidth, playerHeight) {
            var iframeId = $type + 'iframe' + containerid;
            var iframeWidth = playerWidth;
            var iframeHeight = playerHeight;
            var $iframe = document.createElement('iframe');
            $iframe.id = iframeId;
            $iframeContainer.appendChild($iframe);

            var i = document.getElementById(iframeId);

            i.frameBorder = "0";
            i.width = iframeWidth;
            i.height = iframeHeight;
            i.scrolling = "no";
            i.src = "<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"" + document.domain + "\\\";<\\\\/script>\\');document.close();};<\/script>";

            var iframe = $iframeContainer.lastChild;
            var doc = iframe.document;

            if (iframe.contentDocument) {
                doc = iframe.contentDocument;
            } else if (iframe.contentWindow) {
                doc = iframe.contentWindow.document;
            }

            var content = '<!DOCTYPE html>'
                + '<head><title></title>'
                + "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"

                //add scripts
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/vendor/jquery-1.10.2.min.js'></script>"
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/vendor/moment.min.js'></script>"
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/vendor/jquery.easing.1.3.min.js'></script>"
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/vendor/jquery.grid-slider.min.js'></script>"
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/vendor/handlebars.min.js'></script>"
                + "<script type='text/javascript' src='" + $cnnCdnUrl + "scripts/van-widget-config.js'></script>"
                + '<script type="text/javascript" src="' + $cnnCdnUrl + 'scripts/van-widget-' + $type + '-embed.js"></script>'

                //add styles
                + "<link rel='stylesheet' type='text/css' href='" + $cnnCdnUrl + "css/vendor/bootstrap-2.3.2.min.css'/>"
                + "<link rel='stylesheet' type='text/css' href='" + $cnnCdnUrl + "css/vendor/grid-slider.css'/>"
                + "<link href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' rel='stylesheet'>"
                + "<link href='" + $cnnCdnUrl + "css/van-widget-embed.css' rel='stylesheet'>";

            content += buildIframeStyle();
            content += '</head>'
                + '<body style="overflow:hidden;">';
            
                //if single add endslate
                if ($type == CnnVanRenderHelpers.WIDGETTYPE.SINGLE) {
                    content += addEndslate();
                    content += addPreslate();
                } else {
                    //add playlist and feed video template
                    content += addTemplate();
                }

                if (enableLogging){
                    content += addLogging();    
                }
                
                //mark up
                content += "<div class='cnnvan-vidcontainer' data-viewportwidth='" + CnnVanRenderHelpers.isViewPortLessThan700() + "'>"
                    + "<div id='cvpPlayer' class='cnnvan-cnnCVP'><img class='cvpProgressSpinner' src='" + $cnnCdnUrl + "images/loading.gif'/></div>"

                //overlay
                + "<div class='cnnvan-overlay'>" +
                "<div class='cnnvan-overlayheader'>" +
                "<div class='cnnvan-overlaytitle'><span id='vidtitle'></span></div>" +
                "<div class='cnnvan-overlayprivacy'>" +
                "<a href='http://www.cnn.com/privacy.html' target='_blank'>" +
                "<span class='fa fa-lock fa-2x' title='Privacy policy'></span>" +
                "</a> </div><br />" +
                "<div class='cnnvan-overlaysource'><span id='vidsource'></span></div>" +
                "</div>"
                + "<div class='cnnvan-overlaybody'>" +
                "<p id='viddesc'></p>" + " <p id='vidpubdate' class='cnnvan-overlaypubdate'></p>"
                + "</div>"
                + "</div>";

                //end slate
                if ($type == CnnVanRenderHelpers.WIDGETTYPE.SINGLE) {
                    content += "<div class='cnnvan-endslate'>"
                    + "<div class='cnnvan-endslateheader'>"
                    + "<div class='cnnvan-label'>Just Watched</div>"
                    + "<div class='cnnvan-endslateprivacy'><a href='http://www.cnn.com/privacy.html' target='_blank'><span class='fa fa-lock fa-2x' title='Privacy policy'></span></a></div>"
                    + "<div class='cnnvan-endslatebody'>"
                    + "<div class='cnnvan-viddetails'>"
                    + "<div class='cnnvan-endslatetitlecontainer'><span class='cnnvan-endslatetitle'></span><br /></div>"
                    + "<div class='cnnvan-endslatesourcecontainer'><span class='cnnvan-endslatesource'></span><br /></div>"
                    + "<span class='cnnvan-endslatedesc'></span>"
                    + "</div>"
                    + "<div class='cnnvan-vidreplay'><a href='javascript:void(0);' class='cnnvan-replaybutton' onclick='' title='Replay'><span class='fa fa-repeat'></span><span class='cnnvan-replaytext'>&nbsp;&nbsp;replay</span></a></div>"
                    + "</div>"
                    + "</div>"
                    + "<div id='vidSlider' class='grid-slider'>"
                    + "<ul id='gridContainer' class='gs-list' data-effect='horizontalSlide'></ul>"
                    + "</div>"
                    + "</div>";

                    // add preslate markup
                    var preslateStyle = "top:0;background-color:black;display:none;";
                    content += "<div class='cnnvan-preslate' style='" + preslateStyle + "'>"
                    + "<div class='cnnvan-preslateheader'>"
                    + "<div class='cnnvan-label'></div>"
                    + "<div class='cnnvan-preslateprivacy'><a href='http://www.cnn.com/privacy.html' target='_blank'><span class='fa fa-lock fa-2x' title='Privacy policy'></span></a></div>"
                    + "<div class='cnnvan-preslatebody'>"
                    + "<div class='cnnvan-preslateviddetails' style='line-height: 20px'>"
                    + "<div class='cnnvan-preslatetitlecontainer'>"
                    + "<span class='cnnvan-preslatetitle'></span><br />"
                    + "</div></div></div></div>"
                    + "<div id='preslateVidSlider' class='grid-slider'>"
                    + "<ul id='preslateGridContainer' class='gs-list' data-effect='horizontalSlide'></ul>"
                    + "</div></div>"
                    + "</div>";
            } else {
                content += "<div id='vidSlider' class='grid-slider'>"
                    + "<ul id='gridContainer' class='gs-list' data-effect='horizontalSlide'></ul>"
                    + "</div>";
            }

            //player
               content += 
                 "</div>"
                + '</body></html>';

            doc.open();
            doc.writeln(content);
            doc.close();
        },
        buildIframeStyle = function() {
            var style = '<style>'; 
            if ($playerSettings.size != "300") {
                style += ".gs-container{margin-left:-4px;}";
            }
            style += "</style>";
            return style;
        },
        addEndslate = function() {
            var endslateMarkup = "<link href='" + $cnnCdnUrl + "css/van-widget-cvp-endslate.css' rel='stylesheet'>"
                + '<script type="text/javascript" src="' + $cnnCdnUrl + 'scripts/van-widget-cvp-endslate.js"></script>'
            //video template item
            + "<script id='endslate-video-tile-template' type='text/x-handlebars-template'>"
            + "<li id='cnnvan-viditem{{index}}' data-src='{{thumbUrl}}' onclick='{{onclick}}' data-colspan='{{colspan}}' data-rowspan='{{rowspan}}' data-image-position='fit'>"
            + "<div style='overflow:hidden;'>"
            + "{{endslatetitle}}"
            + "</div>"
            + "</li>"
            + "</script>";
            return endslateMarkup;
        },
        addPreslate = function() {
            //video template item
            var preslateMarkup = "<script id='preslate-video-tile-template' type='text/x-handlebars-template'>"
                + "<li id='cnnvan-viditem{{index}}' data-src='{{thumbUrl}}' onclick='{{onclick}}' data-colspan='{{colspan}}' "
                + "data-rowspan='{{rowspan}}' data-image-position='fit'>"
                + "<div style='overflow:hidden;'>"
                + "{{preslatetitle}}"
                + "</div>"
                + "</li>"
                + "</script>";
            return preslateMarkup;
        },
        addTemplate = function() {
            var templateMarkup =            //video template item
                     "<script id='video-tile-template' type='text/x-handlebars-template'>"
                        + "<li id='cnnvan-viditem{{index}}' data-src='{{thumbUrl}}' onclick='{{onclick}}' data-colspan='{{colspan}}' "
                        + "data-rowspan='{{rowspan}}' data-image-position='fit'>"
                        + "<div>"
                        + "{{title}} ({{displaySource}})"
                        + "</div>"
                        + "<div class='gs-hover'>"
                        + "<h6 style='margin-top:0; margin-bottom:2px;'>{{title}}</h6>"
                        + "<p class='text-info' style='font-size:10.5px;margin-bottom:3px;'>{{displaySource}}</p>"
                        + "<p style='font-size:10.5px'>{{desc}}</p>"
                        + "<div class='cnnvan-separator'></div>"
                        + "<p style='font-size:9.5px;margin:0;'>Published at {{pubDate}}</p>"
                        + "</div>"
                        + "</li>"
                        + "</script>";
            return templateMarkup;
        },
        makeIframeResponsive = function (iframeid) {
            var css = "", cssStr;
            var csswidth = screen.width;
            var minwidth = CnnVanRenderHelpers.isMobile() ? $iframeContainer.clientWidth : 300;

            while (csswidth >= minwidth) {
                cssStr = "@media only screen and (max-width: " + csswidth + "px), only screen and (max-device-width: " + csswidth + "px) {"
                    + "#" + iframeid + " { width: " + csswidth + "px;  }}"; 
                csswidth = csswidth - 1;
                css += cssStr;
            }
            addStyleTag(css);
        },
        forceSize = function(playerwidth, iframeid) {
            var cssStr = "@media only screen and (max-width: " + playerwidth + "px), " +
                         "only screen and (min-width: " + playerwidth + "px) {"
                + "#" + iframeid + " { max-width: " + playerwidth + "px !important;  }}"; 
            addStyleTag(cssStr);
        },
        addLogging = function() {
            var markup = '<script type="text/javascript" src="' + $cnnCdnUrl + 'scripts/vendor/loggly.tracker.js"></script>'
            + "<script type='text/javascript'>"
                + "var _LTracker = _LTracker || [];"
                + "var logglyKey = '" + logglyKey + "';"
                + "var enableLogging = " + enableLogging + ";"
                + "var pType = '';"
                + "</script>";
            return markup;
        },
        addStyleTag = function(css) {
            var head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
        };

    return {
        init: init
    };
}();