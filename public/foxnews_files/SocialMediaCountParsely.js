/*! updated; 07-19-2016 12:49 PM */

Modulr.define("FOX_PLUGINS:SocialMediaCountParsely",["jquery"],function($){function getFeed(conf,callback){var urls=conf.urls,siteId=(conf.exists,conf.siteId),urlStr=function(){for(var arr=[],i=0;i<urls.length;i++)arr.push("urlString="+urls[i]);return arr.join("&")}(),url=CONST.url+"?"+["siteId="+siteId,urlStr].join("&");FEED_COUNTER++;var callbackName="FOX_GetMediaCount"+FEED_COUNTER;log("[SocialMediaCountParsely] Parsely URL",url),$.ajax({url:url,dataType:"jsonp",jsonpCallback:callbackName,cache:!0}).done(function(data){var norm=normalize(data,conf);callback(norm)})}function getData(arr,siteId){for(var obj={},i=0;i<arr.length;i++){var url=arr[i],uid=setUid(url,siteId);DATASET[uid]&&(obj[url]=DATASET[uid])}return obj}function setUid(url,siteId){return[siteId,url].join(":")}function normalize(data,conf){var obj=getData(conf.exists);if(data&&data.data){var items=data.data;for(var i in items){var item=items[i],url=item.url,uid=setUid(url,conf.siteId),itemObj={total:0};for(var a in item)if(!isNaN(item[a])){var val=parseInt(item[a],10);itemObj[a]=val,itemObj.total+=val}DATASET[uid]=itemObj,obj[url]=itemObj}}return obj}function log(){var loggerON=!0;if(loggerON&&window.console)try{return console.log.apply(console,arguments)}catch(err){console.log(arguments)}}var loc=window.location,host="www.foxnews.com",CONST={url:loc.protocol+"//"+host+"/feeds/services/social/counter",siteId:{fn:"310256",fb:"310717"}};FEED_COUNTER=0;var DATASET={},App=function(){var Proto=this;Proto.get=function(urlArr,config,callback){2===arguments.length&&(callback=config,config={}),urlArr=$.isArray(urlArr)?urlArr:[urlArr];for(var siteId=CONST.siteId[config.type||"fn"],urls=[],exists=[];urlArr.length>0;){var url=urlArr.shift(),uid=setUid(url,siteId);DATASET[uid]?exists.push(url):urls.push(url)}0===urls.length?exists.length>0&&callback(getData(exists,siteId)):getFeed({exists:exists,urls:urls,siteId:siteId},function(data){callback(data)})}},APP=new App;return APP});