(function () {
    var tag = document.createElement('script');
    tag.src = VANWidgetConfig.getCnnCvpApi();
    tag.id = "cnnAPIJS";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag.nextSibling);
})();

function CNNVideoAPILoadComplete() {
    CnnVanFeedWidget.init();
    CnnVanFeedWidget.setGridSettings($(this.frameElement).parent());
    CnnVanFeedWidget.getVideos();
}

$(document).ready(function () {
    $(window).resize(function () {
        CnnVanFeedWidget.resize($(this.frameElement).parent());
    });
});

var CnnVanFeedWidget = function () {
    
    var vanFeedRoot, cvpNetwork,  numItems, pageSize, 
        currentIndex, currentVideo, adPlaying, videoList, playerH,
        overlayH, numCols, numRows, thumbW, thumbH, $overlay, $vidcontainer,
        $cvpPlayer, $gridContainer, $vidSlider, $overlayheader, feedTitle,
        hoverBoxWidth, vanFeedRawParam, $is300, $playerSettings, $isViewPortLessThan700,
        $containerWidth, $gridRows, numVideos,

        init = function() {
            vanFeedRawParam = '&byCustomValue={isRawOrFile}{false}';
            cvpNetwork = VANWidgetConfig.getVanCvpNetwork();

            currentIndex = 0;
            adPlaying = false;
            videoList = {};
            overlayH = 38;
            $overlay = $('.cnnvan-overlay');
            $vidcontainer = $('.cnnvan-vidcontainer');
            $cvpPlayer = $('#cvpPlayer');
            $gridContainer = $('#gridContainer');
            $vidSlider = $('#vidSlider');
            $overlayheader = $('.cnnvan-overlayheader');
            $is300 = false;
            $isViewPortLessThan700 = $vidcontainer.data("viewportwidth");

            $playerSettings = {
                affiliate: "",
                size: "640",
                autostart: false,
                localads: false,
                videoid: "",
                includeraw: false,
                category: "",
                rows: 3
            };

			if (_LTracker != undefined) {
            	_LTracker.push({'logglyKey': logglyKey, 'tag': 'VAN-widgets'});
			}
        },
        setGridSettings = function(container) {

            if (container != null) {
                //pull includeraw
                if (container.data("includeraw") != null) {
                    $playerSettings.includeraw = container.data("includeraw");
                }

                //pull category
                if (container.data("category") != null) {
                    $playerSettings.category = container.data("category");
                }

                //pull size
                if (container.data("size") != null) {
                    if (VANWidgetConfig.isAutosize(container.data("size"))) {
                        $playerSettings.size = $(container).parent().width();
                    } else {
                        $playerSettings.size = container.data("size");
                    }
                }

                //pull autostart
                if (container.data("autostart") != null) {
                    $playerSettings.autostart = container.data("autostart");
                }

                //pull affiliate (MUST BE VALID)
                $playerSettings.affiliate = container.data("affiliate").toLowerCase();

                //pull localads
                if (container.data("localads") != null) {
                    $playerSettings.localads = container.data("localads");
                }

                //pull rows
                if (container.data("rows") != null) {
                    $playerSettings.rows = container.data("rows");
                }

            }

            vanFeedRoot = VANWidgetConfig.getVanFeedRoot($playerSettings.affiliate);

            feedTitle = $playerSettings.category == "" ? "All Videos" : $playerSettings.category;  //if blank, all videos was chosen

            playerH = VANWidgetConfig.getPlayerHeight($playerSettings.size);
            thumbW = VANWidgetConfig.getThumbWidth($playerSettings.size);
            thumbH = VANWidgetConfig.getThumbHeight($playerSettings.size);
            numCols = VANWidgetConfig.getGridNumCols($playerSettings.size);
            pageSize = VANWidgetConfig.getGridPageSize($playerSettings.size, $playerSettings.rows);
            numItems = VANWidgetConfig.getGridTotalVideoItems($playerSettings.size, $playerSettings.rows);
            hoverBoxWidth = VANWidgetConfig.getHoverBoxWidth($playerSettings.size);
            numRows = VANWidgetConfig.getGridNumOfRows($playerSettings.rows);

            if ($playerSettings.size <= 300) {
                customSettingsFor300();
            }
        },
        customSettingsFor300 = function() {
            $(".cnnvan-overlaydesc").hide();
            $is300 = true;
        },
        loadConfigurations = function() {
            var videoObjIFrame =
            {
                "markupId": "cvpPlayer",
                "network": cvpNetwork,
                "profile": "van",
                "section": "affiliates",
                "context": $playerSettings.affiliate,
                "width": "100%",
                "height": "100%",
                "frameWidth": "100%",
                "frameHeight": "100%",
                "autostart": $playerSettings.autostart,
                "adKeyValues": [{ "key": "playlocalads", "value": false }]
            };
            var callbackObj = {
                onVideoContainerReady: function (parentId, containerId, container, playerImpl) {
                },
                onAdPlay: function(containerId, cvpId, token, mode, id, duration, blockId, adType) {
                    hideOverlay(0);
                    adPlaying = true;
                    try               
                    {
                        //log to loggly
                        _LTracker.push({
                                    'application': 'cnnvan',
                                    'level': 'info',
                                    'category': 'onAdPlay',
                                    'player': (pType || 'grid'),
                                    'host': location.host,
                                    'url': location.href,
                                    'containerId': containerId, 
                                    'cvpId': cvpId, 
                                    'token': token, 
                                    'mode': mode, 
                                    'id': id, 
                                    'duration': duration, 
                                    'blockId': blockId, 
                                    'adType': adType,
                                    'playerSettings': $playerSettings,
                                    'isMobile': VANWidgetConfig.isMobile(),
                                    'userAgent': navigator.userAgent,
                                    'width': VANWidgetConfig.getWidth(),
                                    'height': VANWidgetConfig.getHeight(),
                                    'currentIndex': currentIndex,
                                    'numVideos': numVideos,
                                    'gridCategory': $playerSettings.category,
                                    'video': currentVideo
                            }); 
                    }catch(e){      
                    }
                },
                onAdEnd: function(containerId, cvpId, token, mode, id, blockId, adType) {
                    showOverlay(3000);
                    adPlaying = false;
                },
                onContentPlay: function(containerId, cvpId, event) {
                    hideOverlay(3000);
                    try               
                    {
                        //log to loggly
                        _LTracker.push({
                                    'application': 'cnnvan',
                                    'level': 'info',
                                    'category': 'onContentPlay',
                                    'player': (pType || 'grid'),                                    
                                    'host': location.host,
                                    'url': location.href,
                                    'containerId': containerId, 
                                    'cvpId': cvpId, 
                                    'playerSettings': $playerSettings,
                                    'isMobile': VANWidgetConfig.isMobile(),
                                    'userAgent': navigator.userAgent,
                                    'width': VANWidgetConfig.getWidth(),
                                    'height': VANWidgetConfig.getHeight(),
                                    'videoId': event,
                                    'currentIndex': currentIndex,
                                    'numVideos': numVideos,
                                    'gridCategory': $playerSettings.category,
                                    'video': currentVideo
 
                        }); 
                    }catch(e){      
                    }
                },
                onContentEnd: function(containerId, cvpId, contentId) {
                },
                onContentComplete: function(){
                    onVideoEnd();
                },                
                onContentPause: function(containerId, cvpId, contentId, paused) {
                    if (!adPlaying) {
                        if ($overlay.is(':visible')) {
                            hideOverlay(3000);
                        } else {
                            showOverlay(3000);
                        }
                    }
                }
            };
            var configObj =
            {
                videoConfig: videoObjIFrame,
                eventsCallback: callbackObj,
                overridesConfig: {}
            };
            return configObj;
        },
        onVideoEnd = function() {
            toggleHighlight(parseInt(currentIndex) + 1);
            currentIndex++;
            var video = videoList[currentIndex];
            if (video) {
                if (currentIndex % pageSize == 0) {
                    // advance slider
                    $('.gs-next').click();
                }
                playVideo(video);
                updateOverlay(video);
            }
        },
        playVideo = function (v) {
            var adpolicy = VANWidgetConfig.getAdPolicy(v.provider);
            var localads = $playerSettings.localads ? VANWidgetConfig.getLocalAdSetting($playerSettings.affiliate, v.source) : false;
            window.cnnVideoManager.playVideo("cvpPlayer", v.vidId, { "thumb": v.thumbUrl, "adPolicyContext": adpolicy, "adKeyValues": [{ "key": "playlocalads", "value": localads }] });
        },
        loadVideoPlayer = function(v) {
            var c = loadConfigurations();
            c.videoConfig.video = v.vidId;
            c.videoConfig.thumb = v.thumbUrl;
            c.videoConfig.cvpAdPolicyContext = VANWidgetConfig.getAdPolicy(v.provider);
            var localads = $playerSettings.localads ? VANWidgetConfig.getLocalAdSetting($playerSettings.affiliate, v.source) : false;
            c.videoConfig.adKeyValues[0].value = localads;

            //showOverlay(0);
            setUpMouseEvents();
            window.cnnVideoManager.renderVideoContainer(c);
        },
        getVideos = function() {
            var url = vanFeedRoot;
            if (url.length > 0) {
                var feedUrl = url + "?range=" + 1 + "-" + numItems;
                feedUrl += "&fields=title,description,link,plmedia$defaultThumbnailUrl,cnn-video$videoDuration,plmedia$approved,cnn-video$id,cnn-video$source,cnn-video$displaySource,plmedia$provider,pubDate&form=json";
                feedUrl += "&byCategories=" + $playerSettings.category;
                feedUrl += "&sort=pubDate|desc";
                feedUrl += $playerSettings.includeraw ? "" : vanFeedRawParam;

                $.ajaxSetup({ cache: true });
                $.ajax({
                    type: 'GET',
                    url: feedUrl,
                    dataType: 'jsonp',
                    crossDomain: true,
                    error: function () {
                        showMessage('No videos returned. Please try again.');
                    },
                    success: function(data, status) {
                        loadVideoSelector(data);
                    }
                });
            }
        },
        showMessage = function(msg){
            $cvpPlayer.html('<div class="well"><p class="lead text-center" style="color:black" >' + msg + '</p></div>');
        },
        loadVideoSelector = function(d) {
            if (d.entryCount == 0) {
                showMessage('No videos returned for ' + feedTitle + ' category');
                return;
            }
            numVideos = d.entryCount;
            var source = $("#video-tile-template").html();
            var template = Handlebars.compile(source);
            $gridContainer.empty();

            for (var i = 0; i < d.entries.length; i++) {
                var video = new vanVideo(d.entries[i]);
                video.index = i;
                if (0 == i) {
                    currentVideo = video;
                    loadVideoPlayer(video);
                    updateOverlay(video);
                }
                video.onclick = "CnnVanFeedWidget.setVideoAndPlay(this, \"" + i + "\");";
                videoList[i] = video;
                if (video.approved == true) {
                    $gridContainer.append(template(video));
                }
            }
            $gridContainer.data('title', feedTitle);
            //initialize grid slider
            $vidSlider.gridSlider({
                responsive: true,
                numCols: numCols,
                numRows: numRows,
                slideWidth: thumbW,
                slideHeight: thumbH,
                slideBorder: 3,
                slideMargin: 3,
                padding: 2,
                panelEffect: 'coverDown',
                captionEffect: 'fade',
                captionWidth: 100,
                captionHeight: 'auto',
                hoverEffect: 'none',
                keyboard: true,
                mousewheel: true,
                pageInfo: false,
                playButton: false,
                hoverBox: {
                    width: hoverBoxWidth
                }
            });
            //adjust sizes
            $cvpPlayer.width($playerSettings.size);
            $cvpPlayer.height(playerH);
            $vidcontainer.width($playerSettings.size);
            $overlay.width($playerSettings.size);
            $overlayheader.height(overlayH);
            $vidSlider.width($playerSettings.size);

            $vidSlider.resize();

            toggleHighlight(0);
            if ($is300) {
                $(".gs-caption").remove();
            }

        },
        selectVideo = function(item, index) {
            toggleHighlight(index);
            currentIndex = index;
            var video = videoList[currentIndex];
            if (video) {
                currentVideo = video;
                updateOverlay(video);
                loadVideoPlayer(video);
                playVideo(video);
            }
        },
        setVideoAndPlay = function(item, index) {
            toggleHighlight(index);
            currentIndex = index;
            var v = videoList[currentIndex];
            if (v) {
                currentVideo = v;
                updateOverlay(v);
                playVideo(v);
            }
        },
        toggleHighlight = function(index) {
            var prev = currentIndex || 0;
            $("li#cnnvan-viditem" + prev).find("div:first").removeClass("highlight");
            $("li#cnnvan-viditem" + index).find("div:first").addClass("highlight");
        },
        showOverlay = function(delay) {
            $overlay.fadeIn(delay, function() {
                return false;
            });
        },
        hideOverlay = function(delay) {
            $overlay.fadeOut(delay, function() {
                return false;
            });
        },
        setUpMouseEvents = function() {
            $cvpPlayer.on('mouseover', function () {
                if (!adPlaying) {
                    showOverlay(0);
                }
            }).on('mouseout', function() {
                if (!adPlaying) {
                    hideOverlay(0);
                }
            });

            //fix for flickering
            $overlay.on('mouseover', function () {
                showOverlay(0);
            }).on('mouseout', function () {
                hideOverlay(0);
            });
        },
        updateOverlay = function(video) {
            $('#vidtitle').html(shortenString(video.title));
            $('#vidsource').html(shortenString(video.displaySource));
            if (!$is300) {
                $('#viddesc').html(video.desc);
            }
            $('#vidpubdate').html('Published at ' + video.pubDate);
            checkViewPort();
        },
        adjustOverlay = function () {
            if (videoList) {
                var video = videoList[currentIndex];
                if (video != undefined) {
                    $('#vidtitle').html(shortenString(video.title));
                    $('#vidsource').html(shortenString(video.displaySource));
                    checkViewPort();
                }
            }
        },
        checkViewPort = function () {
            if ($isViewPortLessThan700) {
                $('#viddesc').hide();
            } else {
                $('#viddesc').show();
            }
        },
        vanVideo = function (e) {
            this.vidId = e['cnn-video$id'];
            this.duration = e['cnn-video$videoDuration'] ? convertMsToTime(e['cnn-video$videoDuration']) : "";
            this.title = e.title.replace(/'/g, '');
            this.desc = e.description.replace(/'/g, '');
            this.thumbUrl = e['plmedia$defaultThumbnailUrl'];;
            this.source = e['cnn-video$source'];
            this.displaySource = e['cnn-video$displaySource'];
            this.approved = e['plmedia$approved'];
            var m = new moment(e['pubDate']);
            this.pubDate = m.format("h:mm a") + " ET, " + m.format("ddd MMM D YYYY");
            this.index = 0;
            this.provider = e['plmedia$provider'];
            this.colspan = 1;
            this.rowspan = 1;
        },
        shortenString = function(str) {
            var strLen = Math.round($playerSettings.size / 9);
            if (str.length > strLen) {
                if (currentVideo.provider == "Bitcentral") {
                    strLen = Math.round($playerSettings.size / 10);
                    strLen = strLen - 2;
                }
                return str.substr(0, strLen) + '...';
            }
            return str;
        },
        convertMsToTime = function(s) {
            var ms = s % 1000;
            s = (s - ms) / 1000;
            var secs = s % 60;
            s = (s - secs) / 60;
            secs = secs < 10 ? "0" + secs : secs;
            var mins = s % 60;
            var hrs = (s - mins) / 60;
            hrs = hrs > 0 ? hrs : "";
            hrs = hrs.length > 0 ? hrs + ':' : "";
            return hrs + mins + ':' + secs;
        },
        resize = function (container) {
            adjustOverlay();
            if (VANWidgetConfig.isAutosize(container.data("size"))) {
                $containerWidth = $(container).parent().width() || $(container).width();
                $gridRows = $playerSettings.rows || container.data("rows");

                $cvpPlayer.width($containerWidth);
                $cvpPlayer.height(VANWidgetConfig.getPlayerHeight($containerWidth));
                $vidcontainer.width($containerWidth);
                $vidSlider.width($containerWidth);
                $overlay.width($containerWidth);

                if ($isViewPortLessThan700) {
                    $(".gs-caption").hide();
                } else {
                    $(".gs-caption").show();
                    $(".gs-caption").css("font-size", "10px");
                }
                container.children().height(VANWidgetConfig.getGridHeight($containerWidth,
                                                                          $gridRows,
                                                                          VANWidgetConfig.getGridTotalVideoItems($containerWidth, $gridRows))); //html
            }
        };

    return {
        init: init,
        getVideos: getVideos,
        selectVideo: selectVideo,
        setVideoAndPlay: setVideoAndPlay,
        setGridSettings: setGridSettings,
        resize: resize,
        adjustOverlay: adjustOverlay
    };
}();
