$wn(document).ready(function(){
	if(MostPopularNumberOfItems == "" || !MostPopularNumberOfItems){
		MostPopularNumberOfItems = 10;
	}
	MostPopularNumberOfItems = parseInt(MostPopularNumberOfItems);
	var mpStoriesURL = "http://api.worldnow.com/feed/v2.0/categories/"+ MostPopularStoriesCategoryNumber +"/stories?alt=xml";
	var mpVideosURL = "http://api.worldnow.com/feed/v2.0/categories/"+ MostPopularVideosCategoryNumber +"/clips?alt=xml";
	
	var itemsArray = new Array();
	var totalItems;
	
	function monthToDigit(m){
		var month = new Array();
		month["January"] = "01";
		month["February"] = "02";
		month["March"] = "03";
		month["April"] = "04";
		month["May"] = "05";
		month["June"] = "06";
		month["July"] = "07";
		month["August"] = "08";
		month["September"] = "09";
		month["October"] = "10";
		month["November"] = "11";
		month["December"] = "12";
		
		return month[m];
	}

	var $mpTab = $wn("#wnMostPopularTabbed");
	function WNGetMostPopular(numItems, rssUrl){
		function mpInitContent(){
			mpParseXML(this);
		}
			
		function mpErrorFunction(e){
			//alert(e.message);
		}
		
		function requestMP(url){
			WNHttpRequestManager.makeRequest(url, { onSuccess: mpInitContent, onError: mpErrorFunction});
		};
		
		requestMP(rssUrl);
	
		function itemSort(data_A,data_B){
			data_A = parseInt(data_A);
			data_B = parseInt(data_B);
			if ( data_A < data_B )
				return -1;
			if ( data_A > data_B )
				return 1;
			return 0;
		}
		
		function doSort(ds, fullFeed, type){
			totalItems = $wn(fullFeed).find(type + "[displaysize='"+ ds +"']").length;
			itemsArray = new Array();
			for(var ii = 0; ii < totalItems; ii++){
				itemsArray[ii] = new Array(parseInt($wn(fullFeed).find(type + "[displaysize='"+ ds +"']:eq("+ ii +")").attr("displayorder")), $wn(fullFeed).find(type + "[displaysize='"+ ds +"']:eq("+ ii +")"));
			}
			itemsArray.sort(itemSort);
		}

		function mpParseXML(xml){
			var fullFeed = xml.response.responseXML;
			var $container = $wn("#wnMostPopularTabbed .wnDVSummary");

			if(!$wn(fullFeed).find("story").length && !$wn(fullFeed).find("clip").length){
				$mpTab.find(".mpLoading").html("Please check again later.");
				return false;
			}
			
			var nDate = new Date();
			if(totalItems < MostPopularNumberOfItems){
				MostPopularNumberOfItems = totalItems;
			}
			
			if(rssUrl.indexOf("stories") != -1){
				var sds = "-10";
				if($wn(fullFeed).find("story[displaysize='"+ sds +"']").length == 0){
					sds = "-7";
				}
				doSort(sds, fullFeed, "story");
			}
			else if(rssUrl.indexOf("clips") != -1) {
				if (FeaturedVideoFormat == false){
					var vds = "-1";
				} else {
					var vds = "20";
				}
				if($wn(fullFeed).find("clip[displaysize='"+ vds +"']").length == 0){
					vds = $wn(fullFeed).find("clip:first").attr("displaysize");
				}
				doSort(vds, fullFeed, "clip");
			}
			
			for(var ii = 0; ii < MostPopularNumberOfItems; ii++){
				if(rssUrl.indexOf("stories") != -1){
					//STORIES
					var relType = "s";
					var $element = itemsArray[ii][1];
					var iTitle = $element.find("headline:first").text();
					var iSummary = $element.find("abstract:first").text() + " ";
					if($element.find("includedate").text() == "True"){
						var y = $element.find("creationdate").find("year").text();
						var m = monthToDigit($element.find("creationdate").find("month").text());
						var d = $element.find("creationdate").find("date").text();
						var pageURL = y + "/" + m + "/" + d + "/" + $element.find("pageurl:first").text();
					}
					else {
						var pageURL = $element.find("pageurl:first").text();
					}
					var iHREF = "/story/" + $element.find("id:first").text() + "/" + pageURL;
					var iImg = $element.find("abstractimage:first filename").text();
					var vinc = ($element.find("surfaceable:last feature id").text() != "") ? "<img src='"+ "http:/"+"/" + wng_pageInfo.affiliateName + ".images.worldnow.com/images/static/video/gfx/icon_video.gif" +"' border='0'>" : "";
					
					var iDate = new Date($element.find("month:last").text() + " " + $element.find("date:last").text() + ", " + $element.find("year:last").text() + " " +$element.find("time:last").text() + " " + $element.find("timezone:last").text());
					if($element.find("timezone:last").text() == "EDT"){
						iDate = iDate.setHours(iDate.getHours() + 1);
					}
				} else if(rssUrl.indexOf("clips") != -1){
					//CLIPS
					var relType = "v";
					var $element = itemsArray[ii][1];
					var iTitle = $element.find("headline:first").text();
					var vTitle = iTitle;
					/*
					while(vTitle.indexOf("'") != -1){
						vTitle = vTitle.replace("'", "");
					}
					*/
					vTitle = vTitle.replace(/'/g, '').replace(/ /g, '-').toLowerCase();

					var iSummary = $element.find("abstract:first").text() + " ";
					if(VideoLandingPage == ""){
						
						var iHREF = "/clip/" + $element.find("id:first").text() + "/" + vTitle;
					} else {
						var iHREF = VideoLandingPage + $element.find("id:first").text();
					}
					var iImg = $element.find("abstractimage:first filename").text();
					var iDate = new Date($element.find("rfc822lastediteddate").text());
					var vinc = "<img src='"+ "http:/"+"/" + wng_pageInfo.affiliateName + ".images.worldnow.com/images/static/video/gfx/icon_video.gif" +"' border='0'>";
					if($element.find("rfc822lastediteddate").text().indexOf("EDT") != -1){
						iDate = iDate.setHours(iDate.getHours() + 1);
					}
				}
				
				try{
					iDate = wnRenderDate(iDate, '', true, true);
				}
				catch (e){
					iDate = getLEDate(iDate);
				}
	
				var nextItem = "<div class='mpItem' rel='"+ relType +"'><h4 class='wnRole-STORY'><a href='"+ iHREF +"'>"+ iTitle +"</a>"+ vinc +"</h4>";
				if(iImg != ""){
					nextItem += "<div class='wnImage wnImageLeft wnImageWidth-50'><a href='"+ iHREF +"'><img src='"+ iImg +"' border='0' width='50'></a></div>";
				}
				if(iSummary != " "){
					nextItem += "<p>"+ iSummary +"<div class='mpDate'>Posted: "+ iDate +"</div></p></div>";
					//nextItem += "<p>"+ iSummary +"<a class='wnSummaryLink' href='"+ iHREF +"'>More&gt;&gt;</a><div class='mpDate'>Posted: "+ iDate +"</div></p></div>";
				} else {
					nextItem += "<p></p><div class='mpDate'>Posted: "+ iDate +"</div></div>";
				}
				nextItem += "<div class='mpClear' rel='"+ relType +"'></div>";
				$container.append(nextItem);
				if (relType == "v"){
					$wn(".mpItem[rel='v']:last a").attr("href", iHREF);
				}
			}
			$wn(".mpClear:last").remove();
			$mpTab.find(".mpLoading").hide();
			if(mpImageHover == true){
				mpImg();
			}
		}
	}
	
	function mpImg(){
		$mpTab.find(".wnDVSummary .mpItem .wnImage").each(function(){
			$wn(this).mouseover(function(){
				$wn(this).width(100).css({"overflow": "visible"});
				$wn(this).find("img:last").animate({ width: "100px" }, 500);
			});
			$wn(this).mouseout(function(){
				$wn(this).width(50);
				$wn(this).find("img:last").animate({ width: "50px" }, 100);
			});
		});
	}
	
	var linkColor = $mpTab.find(".wnDSItems-standard h4 a").css("color");
	if($wn("#WNCol4 .wnDVHeadlineBox").css("background-color") != null){
		var backColor = $wn("#WNCol4 .wnDVHeadlineBox").css("background-color")
	} else {
		var backColor = "#ffffff";
	}
	$mpTab.find(".wnMPTabs").css({"border-color": linkColor, "background-color": backColor});
	
	function mpSwap(t){
		$mpTab.find(".wnTabOn").removeClass("wnTabOn");
		$mpTab.find(".wnTab[rel='"+ t +"']").addClass("wnTabOn");
		$mpTab.find(".wnDVSummary .mpItem").hide();
		$mpTab.find(".wnDVSummary .mpClear").hide();
		$mpTab.find(".mpLoading").show();
		if($mpTab.find(".wnDVSummary div[rel='"+ t +"']").length > 0){
			$mpTab.find(".wnDVSummary div[rel='"+ t +"']").show();
			$mpTab.find(".mpLoading").hide();
		} else {
			if(t == "s"){
				WNGetMostPopular(MostPopularNumberOfItems, mpStoriesURL);
			} else if (t == "v") {
				WNGetMostPopular(MostPopularNumberOfItems, mpVideosURL);
			}
		}
		$mpTab.find(".wnDVSummary").fadeIn();
	
		$mpTab.find(".wnTab").css({"background-color": backColor, "color": linkColor});
		$mpTab.find(".wnTabOn").css({"background-color": linkColor, "color": backColor});
	}
	
	for(var ii = 0; ii < $mpTab.find(".wnTab").length; ii++){
		$mpTab.find(".wnTab:eq("+ ii +")").click(function(){
			mpSwap($wn(this).attr("rel"));
		});
	}

mpSwap("s");

});