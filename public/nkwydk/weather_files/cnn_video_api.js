/*! cnn-video-loader 1.3.2 2014-09-25 */
var CNNVIDEOAPI = window.CNNVIDEOAPI || {};

CNNVIDEOAPI.apiBaseUrl = "http://z.cdn.turner.com/cnn/.element/widget/video/videoapi/api/";

CNNVIDEOAPI.apiMappingFile = "/config/apimapping.json";

CNNVIDEOAPI.bootstrapperFile = "/js/CNNVideoBootstrapper.js";

CNNVIDEOAPI.currentVersion = null;

CNNVIDEOAPI.client = "default";

(function(window, doc, undef) {
    var utils;
    function getScriptArg(argName, defaultReturnValue) {
        try {
            var script_tag = document.getElementById("cnnAPIJS");
            var query = script_tag.src.replace(/^[^\?]+\??/, "");
            var values = query.split("&");
            for (var i = 0; i < values.length; i++) {
                var vals = values[i];
                var arg = vals.split("=");
                var key = arg[0];
                var val = arg[1];
                if (key.replace(" ", "") === argName) {
                    return val;
                }
            }
        } catch (error) {}
        return defaultReturnValue;
    }
    function getVersion() {
        return getScriptArg("version", "latest");
    }
    function loadBootstrapper() {
        CNNVIDEOAPI.client = getScriptArg("client", "default").toLowerCase();
        loadScript(CNNVIDEOAPI.apiBaseUrl + getVersion() + CNNVIDEOAPI.bootstrapperFile, onBootstrapperLoadComplete);
    }
    function onBootstrapperLoadComplete() {
        utils = window.CNNVIDEOAPI.Utils;
        var ver = getVersion();
        var cb = ver === "latest" ? "?cb=" + Math.round(Math.random() * 1e9).toString(16) : "";
        this.bootstrapper = new CNNVIDEOAPI.Bootstrapper(CNNVIDEOAPI.apiBaseUrl + ver + CNNVIDEOAPI.apiMappingFile + cb);
        this.bootstrapper.initialize();
    }
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function() {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    loadBootstrapper();
})(this, document);