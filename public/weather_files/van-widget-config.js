//VAN global config
var VANWidgetConfig = function () {

    //constants
    var vanFeedRoot = 'http://feed.theplatform.com/f/van/van-',
        vanAffiliateId = "",
        cvpNetwork = "cnn",
        adPolicy = "van",
        cnnCvpApi = "http://www.cnn.com/.element/widget/video/videoapi/api/js/cnn_video_api.js?version=1.3.7&client=van",
        cnnCdnUrl = "http://z.cdn.turner.com/cnn/van/resources/",
        localCnnCdnUrl = "../../cdn-files/resources/",
        logglyTag = 'VAN-widgets',
        endslateCategory = "Editors' Choice",
        
        gridDefaultSize = 640,
        gridDefaultHoverBoxWidth = 200,
        gridDefaultNumPages = 4,
        gridDefaultNumRows = 3,
        gridDefaultNumCols = 4,
        gridDefaultPlaylistRows = 1,
        gridTitleH = 30,
        gridPagerH = 55,
        gridPadding = 2,

        //getters
        getVanFeedRoot = function(affiliate) {
            return vanFeedRoot + affiliate;
        },
        getVanAffiliateId = function() {
            return vanAffiliateId;
        },
        getVanCvpNetwork = function() {
            return cvpNetwork;
        },
        getCnnCvpApi = function() {
            return cnnCvpApi;
        },
        getAdPolicy = function(videoProvider) {
            return adPolicy;
        },
        getLocalAdSetting = function(affiliate, source) {
            if ($.trim(affiliate.toLowerCase()) == $.trim(source.toLowerCase())) {
                return true;
            }
            return false;
        },
        getCnnCdnUrl = function() {
            return cnnCdnUrl;
        },
        getLocalCnnCdnUrl = function() {
            return localCnnCdnUrl;
        },

        //player getters
        getGridDefaultSize = function() {
            return gridDefaultSize;
        },
        getPlayerHeight = function(playerW) {
            return ((playerW / 16) * 9);
        },

        //grid getters
        getDefaultNumPages = function() {
            return gridDefaultNumPages;
        },
        getEndslateVideoItemCount = function(){
            return 16;
        },
        getEndslateCategory = function(){
            return endslateCategory;
        },
        getGridTotalVideoItems = function(playerW, rows) {
            rows = rows || gridDefaultNumRows;
            return getGridPageSize(playerW, rows) * getDefaultNumPages();
        },
        getThumbWidth = function(playerW) {
            var portion = playerW <= 560 ? 97 : 104;
            return ((playerW - portion) / getGridNumCols(playerW));
        },
        getThumbHeight = function(playerW) {
            return ((getThumbWidth(playerW) / 16) * 9);
        },
        getHoverBoxWidth = function(playerW) {
            if (playerW <= 300)
                return 105;
            if (playerW > 300 && playerW <= 560)
                return 135;
            return gridDefaultHoverBoxWidth;
        },
        getGridNumCols = function(playerW) {
            if (playerW <= 300)
                return 2;
            if (playerW > 300 && playerW <= 560)
                return 3;
            return gridDefaultNumCols;
        },
        getGridNumOfRows = function(rows) {
            if (rows != 1 && rows != 3) rows = gridDefaultNumRows;
            return rows;
        },
        getGridPageSize = function(playerW, rows) {
            return getGridNumCols(playerW) * getGridNumOfRows(rows);
        },
        getGridHeight = function(playerW, rows, videoCount) {
            rows = getGridNumOfRows(rows);
            var playerHeight = getPlayerHeight(playerW);
            var thumbHeight = getThumbHeight(playerW);
            if (videoCount != null) {
                if (!includePager(rows, playerW, videoCount))
                    gridPagerH = 30;
            }
            return playerHeight + gridTitleH + (thumbHeight * rows) + (gridPadding * rows) + gridPagerH;
        },
        getVideoCount = function(playlist) {
            if (playlist != "") {
                return playlist.split('|').length;
            }
            return 0;
        },
        includePager = function(rows, playerW, videoCount) {
            var columns = getGridNumCols(playerW);
            if (videoCount <= columns * rows)
                return false;
            return true;
        },
        getLogglyTag = function(){
              return logglyTag;
        },
        /* playlist methods */
        getPlaylistHeight = function(playerW, rows, videoCount) {
            return getGridHeight(playerW, rows, videoCount) - gridTitleH;
        },
        getPlaylistDefaultRows = function() {
            return gridDefaultPlaylistRows;
        },
        /* helper methods */
        isiPhone = function() {
            var ret = false;
            if ((/iPhone|iPod|iPad/).test(navigator.userAgent)) {
                ret = true;
            }
            return ret;
        },
        isMobile = function() {
            var ret = false;
            if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
                ret = true;
            }

            return ret;
        },
        getWidth = function() {
            return (window.innerWidth || document.documentElement.clientWidth ||
                                                document.body.clientWidth);
        },
        getHeight = function() {
            return (window.innerHeight || document.documentElement.clientHeight ||
                                                document.body.clientHeight);
        },
        isAutosize = function(size) {
            if (size == "auto" || size == "0")
                return true;
            return false;
        };

    return {
        getVanCvpNetwork: getVanCvpNetwork,
        getVanAffiliateId: getVanAffiliateId,
        getCnnCvpApi: getCnnCvpApi,
        getCnnCdnUrl: getCnnCdnUrl,
        getLocalCnnCdnUrl: getLocalCnnCdnUrl,
        getVanFeedRoot: getVanFeedRoot,
        getGridHeight: getGridHeight,
        getPlayerHeight: getPlayerHeight,
        getThumbWidth: getThumbWidth,
        getThumbHeight: getThumbHeight,
        getGridNumCols: getGridNumCols,
        getGridNumOfRows: getGridNumOfRows,
        getGridPageSize: getGridPageSize,
        getDefaultNumPages: getDefaultNumPages,
        getHoverBoxWidth: getHoverBoxWidth,
        getGridTotalVideoItems: getGridTotalVideoItems,
        getAdPolicy: getAdPolicy,
        getLocalAdSetting: getLocalAdSetting,
        getGridDefaultSize: getGridDefaultSize,
        getPlaylistHeight: getPlaylistHeight,
        getPlaylistDefaultRows: getPlaylistDefaultRows,
        isiPhone: isiPhone,
        isAutosize: isAutosize,
        isMobile: isMobile,
        getWidth: getWidth,
        getHeight: getHeight,
        getVideoCount: getVideoCount,
        getLogglyTag: getLogglyTag,
        getEndslateVideoItemCount:getEndslateVideoItemCount,
        getEndslateCategory:getEndslateCategory
    };
}();

