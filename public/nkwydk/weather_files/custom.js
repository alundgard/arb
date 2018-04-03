Worldnow.AdMan.attachAd({
	selector : '#DisplaySizeId80',
	attachStyle : 'prepend'
}, {
	id : '523',
	width : '100',
	height : '34',
	application : 'banner',
	type : 'dom',
	ownerinfo : {
		loc : {
			share : 1
		}
	}
});

document.write('<script type="text/javascript" src="http://ftpcontent.worldnow.com/wncustom/js/helpers.js"></script>');
document.write('<script type="text/javascript" src="http://content.worldnow.com/global/interface/httprequest/httprequest.js"></script>');
document.write('<script type="text/javascript" src="http://ftpcontent.worldnow.com/wncustom/js/wxmanager.js"></script>');
document.write('<script type="text/javascript" src="http://www.trumba.com/scripts/spuds.js"></script>');
document.write('<script type="text/javascript" src="http://kitv.celljournalist.com/widgets/scripts/jquery-1.9.1.js"></script>');
document.write('<script type="text/javascript" src="http://kitv.celljournalist.com/widgets/scripts/celljournalist.standard.uploadwidget.js"></script>');
document.write('<script type="text/javascript" src="http://kitv.celljournalist.com/widgets/scripts/jquery.lightbox_me.js"></script>');
document.write('<script type="text/javascript" src="http://kitv.celljournalist.com/widgets/scripts/communitycontent.sidebar.widget.js"></script>');
$wn(function() {
	if (window.simpleMenuALoaded)
		return;
	var $body = $wn('body');
	var $columns = $wn('#WNCols234-5')
	var wipe = function() {
		$body.removeClass(function(index, css) {
			return (css.match(/(^|\s)nav-\S+/g) || []).join(' ');
		});
	}
	$wn('nav.simple-a.main a').each(function() {
		var $nav = $(this)
		$(this).hover(function() {
			wipe()
			$body.addClass('nav-feature-' + $(this).attr('data-id'))
		})
	});
	$columns.on('mouseenter', wipe);
	window.simpleMenuALoaded = true;
});
/*Namespace*/
var csKITV = {};
csDefaultImg = 'http://kitv.images.worldnow.com/images/9077455_G.png';
defaultSummaryImage = '<div class="wnContent summaryImage abridged left width115 iceSummaryImage iceFeatureID-30134233 iceFeatureType-S"><a href="' + $wn(this).find('.feature').first().find('h4 a').attr('href') + '"><img border="0" width="115" class="" src="' + csDefaultImg + '" style="display: block;"></a></div>';
csKITV.newMemberCenter = function() {
	$wn("#WNSearchBox-headertop").insertBefore("#WNHeader");
	$wn("#WNSearchBox-headertop").append('<div class="branding-top"></div>');
	$wn("#WNSearchBox-headertop form").appendTo($wn('#WNSearchBox-headertop .branding-top'));
	$wn('#WNMemberCenter-headertop').appendTo($wn('#WNSearchBox-headertop .branding-top'));
	$wn('#WNSearchBox-headertop').show();
	$wn('#WNMemberCenter-headertop').show();
	$wn('.wnSearchBox label:eq(0)').hide();
	$wn('.wnSearchBox label:eq(1)').hide();
	$wn('.wnSearchBox input:eq(0)').hide();
	$wn('.wnSearchBox input:eq(1)').hide();
	$wn('.wnSearchBox input:eq(2)').attr("placeholder", "Search");
	CSWxManager.setOption('defaultHandler', 'wsi');
	CSWxManager.setOption('iconSize', 30);
	CSWxManager.loadConfig({
		station : '96822',
		name : 'Honolulu'
	});

	var $headertopul = '<ul class="items-container"><li class="item alert"><a href="/category/305669/connect">Alerts</a></li><li class="item mob"><a href="/category/305669/connect">Mobile</a></li><li class="item tip"><a href="/category/306043/contact-us">Submit a Tip</a></li><li class="item temp"><span></span></li><li class="item soc"><span></span></li></ul>';

	$wn('#WNSearchBox-headertop .branding-top').append($headertopul);
	CSWxManager.ready(function(wx) {
		$wn('.items-container .temp').html(wx.fetch('temperature') + '&deg;');
		$wn('.items-container .temp').css('background-image', wx.fetch('iconcss'));
	});

	//fbcode

	( function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id))
				return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	$wn('.items-container .soc').append('<div class="fb-like" data-href="https://www.facebook.com/KITV4" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>')

	//twittercode

	! function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + '://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js, fjs);
		}
	}(document, 'script', 'twitter-wjs');
	$wn('.items-container .soc').append('<a href="https://twitter.com/kitv4" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @kitv4</a>');

};
csKITV.hbCol2Restyle = function() {
	$wn('.displaySize.headlineBox .feature.priority-1').each(function() {
		$wn(this).find('.summaryImage').prependTo(this);
	});
	$wn('.displaySize.promoBox .feature.priority-1').each(function() {
		$wn(this).find('.summaryImage').prependTo(this);
	});
	$wn('#WNCol2').append($wn('.displaySize.promoBox'));
}
csKITV.hbCol4Restyle = function() {
	/**Col4 - Nested category
	 * **/
	$wn('#DisplaySizeId68 .wnGroup .feature').each(function() {
		$wn(this).find('.summaryImage').prependTo(this);
		$wn(this).find('.summary.abridged').show();
	});
	$wn('#DisplaySizeId68 .feature .summary.abridged .text').dotdotdot({
		// configuration goes here
		ellipsis : ' ...',
		wrap : 'word',
		height : 40
	});
}
csKITV.storyPage = function() {
	//$wn('#WNContainerStory #WNStoryUtils').insertAfter($wn('#WNContainerStory #WNStoryHeader h3'));

	$wn('#WNContainerStory').append('<div id="disqus_thread"></div>');
	var disqus_shortname = 'kitv-disqus';
	(function() {
		var dsq = document.createElement('script');
		dsq.type = 'text/javascript';
		dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	}
	)();
}
csKITV.breakingNews = function() {
	$wn('#DisplaySizeId-30').insertBefore('#WNCols23-4');
	var breakingHeader = "<div class='header-breaking'>Breaking News:</div>";
	var breakingTrailor = "<div class='trailor-breaking'><a class='fb-breaking'></a><a class='tw-breaking'></a><a class='full-covg'>Full coverage &gt; &gt;</a></a><a class='alrt'>Get Alerts &gt; &gt;</a></div>"
	$wn('#DisplaySizeId-30').prepend(breakingHeader);
	$wn('#DisplaySizeId-30 > .wnClear').before(breakingTrailor);
}
function nestedCategoriesToTabs() {
	$container = $wn("#DisplaySizeId82");
	//$wn("#WNCol2 #WNDS-20").after($container);
	$tabHeadersCon = $wn("<div id='tab-headers-con'></div>");
	$tabHeaders = $wn('<ul id="tab-headers" class="tab-header-con"></ul>');
	$tabHeadersCon.append($tabHeaders);
	$container.after($tabHeadersCon);
	$container.append($wn('<div class="sub-header"></div>'));
	$container.find(".contentGroup").each(function() {
		tab = $wn(this);
		var isLast = (tab.hasClass("last")) ? true : false;
		tab.find(".wnItem.header").each(function() {
			$wn(this).show();
			$header = $wn(this).clone();
			if (isLast) {
				$header.addClass("last");
			}
			if (tab.index() == 0) {
				$header.addClass("first active").hide();
			}
			$header.click(function() {
				$wn(this).addClass("active").siblings().removeClass("active");
				$wn(this).hide().siblings().show();
				position = $wn(this).index();
				$container.find(".contentGroup").each(function() {
					var tabChild = $wn(this);
					if (tabChild.index() == position) {
						tabChild.show();
					} else {
						tabChild.hide();
					}
				});
			});
			$tabHeaders.append($header);
		});

		if (tab.index() == 0) {
			tab.show();
		} else {
			tab.hide();
		}
		//tab.find(".wnItem.header:not('active')").appendTo(".sub-header")

	});
	$tabHeaders.append($wn('<div class="wnClear"></div>'));
	/*debugger;
	 $Trumba.addSpud({
	 webName : "kitv",
	 spudType : "upcomingtable",
	 teaserBase : "http://www.trumba.com/calendars/kitv"
	 });*/
}

function pollCol4() {
	$wn('.poll').first().addClass('header');
	$wn('.poll.header').prepend('<h3><span>Survey</span></h3>');
}

function calendar() {
	// updated code from KITV
	// var calendar = '<div id="spuds" style="display: none;"><table width="300" border="0" cellspacing="2" cellpadding="2"><tr><a href="http://www.kitv.com/category/306563/kitv-calendar-of-community-events-submit-yours-today#submit">Submit an event FREE</a></tr><br><tR><script type="text/javascript" src="http://www.trumba.com/scripts/spuds.js"></script><script type="text/javascript">$Trumba.addSpud({ webName: "kitv", spudType : "datefinder" , teaserBase : "http://www.kitv.com/category/306563/kitv-calendar-of-community-events-submit-yours-today"});</script></tr><BR><tr><td><script type="text/javascript" src="http://www.trumba.com/scripts/spuds.js"></script><script type="text/javascript">$Trumba.addSpud({ webName: "kitv", spudType : "upcomingtable" , teaserBase : "http://www.kitv.com/category/306563/kitv-calendar-of-community-events-submit-yours-today"});</script></td></tr></table></div>';
	if (wng_pageInfo.containerId == '306563') {
		return;
	}

	$Trumba.addSpud({
		webName : "kitv",
		spudType : "datefinder",
		teaserBase : "http://www.kitv.com/category/306563/kitv-calendar-of-community-events-submit-yours-today"
	});
	$("div[id='trumba.spud.0']").hide();

	$Trumba.addSpud({
		webName : "kitv",
		spudType : "upcomingtable",
		teaserBase : "http://www.kitv.com/category/306563/kitv-calendar-of-community-events-submit-yours-today"
	});
	$("div[id='trumba.spud.1']").hide();

	setTimeout(function() {
		if ($(document).find("iframe[name='trumba.spud.0.iframe']").length > 0) {

			var iframe = $("iframe[name='trumba.spud.0.iframe']");

			if (iframe.contents().find('html').length > 0) {
				cloneIframe(iframe, "#WNCol4");
			} else {
				console.log("iframe yet to loaded");
				iframe.load(function() {
					cloneIframe(iframe, "#WNCol4");
				})
			}

		}

		if ($(document).find("iframe[name='trumba.spud.1.iframe']").length > 0) {

			var iframe2 = $("iframe[name='trumba.spud.1.iframe']");

			if (iframe2.contents().find('html').length > 0) {
				cloneIframe(iframe2, "#WNCol4");
			} else {
				console.log("iframe yet to loaded");
				iframe2.load(function() {
					cloneIframe(iframe2, "#WNCol4");
				})
			}

		}
	}, 8000)
}

function cloneIframe(iframe, container) {
	var originalHtmlContent = $(iframe).contents().find('html');
	var newFrame = document.createElement("iframe");
	newFrame.name = $(iframe).attr('name');

	$(container).append(newFrame);
	// We need the iframe document object, different browsers different ways
	var frameDocument = newFrame.document;
	if (newFrame.contentDocument)
		frameDocument = newFrame.contentDocument;
	else if (newFrame.contentWindow)
		frameDocument = newFrame.contentWindow.document;

	// We open the document of the empty frame and we write desired content.
	// originalHtmlContent is a string where you have the source iframe HTML content.
	frameDocument.open();
	frameDocument.writeln('<html>' + $(originalHtmlContent[0]).html() + '</html>');
	frameDocument.close();
}

Worldnow.EventMan.event('WNCol23done', function() {
	csKITV.hbCol2Restyle();
	csKITV.storyPage();
	csKITV.breakingNews();
	nestedCategoriesToTabs();
});
Worldnow.EventMan.event('WNCol4done', function() {
	csKITV.hbCol4Restyle();
	pollCol4();
	if ( typeof $Trumba !== 'undefined') {
		calendar();
	} else {
		console.log("trumba js did not load");
	}
});

$wn(document).ready(function() {
	csKITV.newMemberCenter();
	//UGC Calendar

});

csKITV.socialArea = function() {
	var social = '<div id="bottomSocial" class="wnDSItems-contentgroup">' + '<div class="wnDVNestedCategory wnDSContainer-standard displaySize">' + '<div class="wnDSHeader header">' + '<h3><span>Social</span><div style="clear:both"></div></h3>' + '</div>' + '<ul>' + '<li class="socialBlock">' + '<div class="frame">' + '<a href="https://www.facebook.com/KITV4" target="_blank"><img class="logo" src="http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/facebook.png"></a>' + '<a href="https://www.facebook.com/KITV4" target="_blank"><div class="header">Like us on Facebook</div></a>' + '<div class="text">Visit the KITV Facebook page for news, weather and traffic.</div>' + '</div>' + '</li>' + '<li class="socialBlock">' + '<div class="frame">' + '<a href="https://twitter.com/kitv4" target="_blank"><img class="logo" src="http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/twitter-1.png"></a>' + '<a href="https://twitter.com/kitv4" target="_blank"><div class="header">Follow us on Twitter</div></a>' + '<div class="text">Visit the KITV Twitter page – retweet the latest Hawaii news, weather and traffic alerts.</div>' + '</div>' + '</li>' + '<li class="socialBlock">' + '<div class="frame">' + '<a href="https://instagram.com/kitv4" target="_blank"><img class="logo" src="http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/instagram.png"></a>' + '<a href="https://instagram.com/kitv4" target="_blank"><div class="header">Follow us on Instagram</div></a>' + '<div class="text">We post all kinds pictures and videos on Instagram from the KITV newsroom.</div>' + '</div>' + '</li>' + '</ul>' + '</div>' + '</div>';

	$('#WNCols23-4').append(social);

}
csKITV.addBottom = function() {
	var $ad = '<div id="WNAd130" class="wnad wnad130"></div>';
	$wn('#bottomSocial').before($ad);
	var ad = new Worldnow.Ad({
		id : '130',
		ownerinfo : {
			aff : wng_pageInfo.affiliateName,
			oldformat : 1,
			owner : "loc",
			split : "100"
		},
		width : '300',
		height : '250',
		wncc : wng_pageInfo.contentClassification,
		type : 'dom',
		application : 'banner',
		parent : 'WNAd130',
	});
	ad.load();

	var $ad = '<div id="WNAd131" class="wnad wnad131"></div>';
	$wn('#bottomSocial').after($ad);
	var ad = new Worldnow.Ad({
		id : '131',
		ownerinfo : {
			aff : wng_pageInfo.affiliateName,
			oldformat : 1,
			owner : "loc",
			split : "100"
		},
		width : '300',
		height : '250',
		wncc : wng_pageInfo.contentClassification,
		type : 'dom',
		application : 'banner',
		parent : 'WNAd131',
	});
	ad.load();

}

csKITV.nowcast = function() {
	var nowcast = '<div id="nowcastContainer">' + '<div id="nowcast">' + '<div id="nc1">' + '<a href=" http://www.kitv.com/category/305776/live-stream"> NOWCAST </a>' + '</div>' + '<div id="nc2">' + '<a href=" http://www.kitv.com/category/305776/live-stream"> Watch KITV4 News On Demand </a>' + '</div>' + '</div>' + '</div>';

	$('#WNCols234-5').prepend(nowcast);

	var nowcast_red = '<div id="nowcastContainer">' + '<div id="nowcast-red">' + '<div id="nc1-red">' + '<a href=" http://www.kitv.com/category/305776/live-stream"> NOWCAST </a>' + '</div>' + '<div id="nc2">' + '<a href=" http://www.kitv.com/category/305776/live-stream"> Watch KITV4 News On Demand </a>' + '</div>' + '</div>' + '</div>';

	$('#WNCols234-5').prepend(nowcast_red);
}

csKITV.buttonBars = function() {
	if (wng_pageInfo.contentClassification == 'Homepage') {
		$('#startWithLocal').appendTo('#WNCol2 .slider-container.displaySize');
		$('.buttonBar').css('display', 'block');
		$('#underSlideshow').appendTo('#DisplaySizeId7 ul.wnGroup.contentGroup.last');
		$('.buttonBar').css('display', 'block');
		$('#underLocal').appendTo('#DisplaySizeId80');
		$('.buttonBar').css('display', 'block');
		$('#underEditorsPicks').appendTo('#DisplaySizeId85');
		$('.buttonBar').css('display', 'block');
		$('#underLocal2').appendTo('#DisplaySizeId82');
		$('.buttonBar').css('display', 'block');
	} else if (wng_pageInfo.containerType == "C" && wng_pageInfo.contentClassification != 'Homepage') {
		$('#startWithLocal').appendTo('#DisplaySizeId7 ul:first');
		$('.buttonBar').css('display', 'block');
		$('#underSlideshow').appendTo('#DisplaySizeId7 ul.wnGroup.contentGroup.last');
		$('.buttonBar').css('display', 'block');
	} else {
	}
	;
}
function uLocal() {
	$wn('#WNCol4').append("<div id='widget'></div>");
	$("#widget").sidebarWidget({
		partitionId : "1b3e2628-2b7d-4de0-a42e-d557444d1f4a"
	});
}

csKITV.sponsorBar = function() {
	var sponsor = '<div id="sponsorBar">Sponsor</div>';
	$('#DisplaySizeId80').prepend(sponsor);
}

csKITV.homeButton = function() {
	var homeButton = '<div id="homeButton"><a href="/"></a></div>';
	$('#WNHeader').prepend(homeButton);
	$('#WNHeader').append($('#WNPrintBrandingImage'));
}
// --- For the Nowcast Bar --- //
csKITV.timeCheck = function() {
	var newsTimes = {
		sundays : [{
			start : {
				hour : 6,
				minute : 0,
			},
			end : {
				hour : 8,
				minute : 0,
			},
		}, {
			start : {
				hour : 17,
				minute : 0,
			},
			end : {
				hour : 17,
				minute : 30,
			},
		}, {
			start : {
				hour : 22,
				minute : 0,
			},
			end : {
				hour : 22,
				minute : 35,
			},
		}],
		saturdays : [{
			start : {
				hour : 6,
				minute : 0,
			},
			end : {
				hour : 8,
				minute : 0,
			},
		}, {
			start : {
				hour : 17,
				minute : 0,
			},
			end : {
				hour : 17,
				minute : 30,
			},
		}, {
			start : {
				hour : 18,
				minute : 0,
			},
			end : {
				hour : 18,
				minute : 30,
			},
		}, {
			start : {
				hour : 22,
				minute : 0,
			},
			end : {
				hour : 22,
				minute : 35,
			},
		}],
		weekdays : [{
			start : {
				hour : 5,
				minute : 0,
			},
			end : {
				hour : 7,
				minute : 0,
			},
		}, {
			start : {
				hour : 17,
				minute : 0,
			},
			end : {
				hour : 17,
				minute : 30,
			},
		}, {
			start : {
				hour : 18,
				minute : 0,
			},
			end : {
				hour : 18,
				minute : 30,
			},
		}, {
			start : {
				hour : 22,
				minute : 0,
			},
			end : {
				hour : 23,
				minute : 05,
			},
		}]
	};

	// switch to red - on

	// setup red - on

	var start, end, now;
	var d = moment().utc();

	now = (((d.subtract(10, 'hours')).hours()) * 60) + d.minutes();
	$('#nowcast').show();
	$('#nowcast-red').hide();

	// sundays --------------------------------------- //

	var sun = newsTimes.sundays;
	if (d.days() === 0) {
		for (var i = 0; i < sun.length; i++) {
			start = (sun[i].start.hour * 60) + sun[i].start.minute;
			end = (sun[i].end.hour * 60) + sun[i].end.minute;
			if (now > start && now < end) {
				$('#nowcast').hide();
				$('#nowcast-red').show();
				break;
			}
		}
	}

	// saturdays --------------------------------------- //

	var sat = newsTimes.saturdays;
	if (d.days() === 6) {
		for (var i = 0; i < sat.length; i++) {
			start = (sat[i].start.hour * 60) + sat[i].start.minute;
			end = (sat[i].end.hour * 60) + sat[i].end.minute;
			if (now > start && now < end) {
				$('#nowcast').hide();
				$('#nowcast-red').show();
				break;
			}
		}
	}

	// weekdays ------------------------------------------------------ //

	var week = newsTimes.weekdays;
	if (d.days() === 1 || d.days() === 2 || d.days() === 3 || d.days() === 4 || d.days() === 5) {
		for (var i = 0; i < week.length; i++) {
			start = (week[i].start.hour * 60) + week[i].start.minute;
			end = (week[i].end.hour * 60) + week[i].end.minute;
			if (now > start && now < end) {
				$('#nowcast').hide();
				$('#nowcast-red').show();
				break;
			}
		}
	}

}
// -- end timeCheck ---------------------------------------------------- //

csKITV.addAltHeader = function() {
	// add an alternative header div so that we can control header ad //
	$('<div id=altHeader></div>').insertBefore('#WNHeader');
	if ((wng_pageInfo.containerId == "306625") || (wng_pageInfo.containerId == "307531") || (wng_pageInfo.containerId == "307532") || (wng_pageInfo.containerId == "30643769")) {
		$wn('#altHeader').css({
			'background' : 'url(http://ftpcontent.worldnow.com/professionalservices/clients/kitv/images/newheader980x114.jpg) no-repeat',
			'background-position' : 'center 9px'
		});
/* --- WEATHER PAGE ART HEADER CHANGE Chris Removed----		
	}else if(wng_pageInfo.containerId== "306053"){
		$wn('#altHeader').css({
			'background' : 'url(http://ftpcontent.worldnow.com/professionalservices/clients/kitv/images/hdr_branding_take_2.png) no-repeat',
			'background-position' : '46% -4px'
		});
--- WEATHER PAGE ART HEADER CHANGE  Chris Removed -- */		
	}
}

csKITV.rightNow = function() {
	//change breaking news to Right Now if right now in section title
	if ($('#WNCols234-5 .displaysize-30 h5').length == 0) {

	} else if ($('#WNCols234-5 .displaysize-30 h5').html().toLowerCase() === "right now") {
		$('#WNCols234-5 .breaking-news-a h4').addClass("rightnow");
		$('#WNCols234-5 .displaysize-30 h5').hide();
	}
}

csKITV.removeExtra = function() {
	if ($('#WNStoryUtils .addthis_toolbox.addthis_default_style.addthis_20x20_style').length > 1) {
		for (var i = 0; i < $('#WNStoryUtils .addthis_toolbox.addthis_default_style.addthis_20x20_style').length; i++ ) {
			if (i > 0) {
			  $($('#WNStoryUtils .addthis_toolbox.addthis_default_style.addthis_20x20_style')[i]).hide();
			} else {
			
			}
		}
	}
}

csKITV.breakNews = function() {
	//sharing tools if breaking news exists
	if ($('#WNCols234-5 section.block.breaking-news-a h4').length > 0) {
		$('#WNCols234-5 section.block.breaking-news-a h4').css("position", "relative")
		$('#WNCols234-5 section.block.breaking-news-a h4').append("<div id='twitter'><a href='https://twitter.com/kitv4'><img src='http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/twitter.png'></a></div>");
		$('#WNCols234-5 section.block.breaking-news-a h4').append("<div id='facebook'><a href='https://www.facebook.com/KITV4'><img src='http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/fb.png'></a></div>");
		$('div#twitter').css("position", "absolute");
		$('div#facebook').css("position", "absolute");
	

	(function varySize() {
  	var len_fit = 40; // what can fit.
  	$('#WNCols234-5 section.block.breaking-news-a h4').each(function() {
  		var headline = $(this);

      // Get the length of headline.
      var len_headline = headline.text().length;
      console.log(len_headline + ' is the length of the headline');
      if(len_headline > len_fit){

          // Calculate the new font size.
          var size_now = parseInt(headline.css("font-size"));
          var size_new = size_now * len_fit/len_headline;

          console.log(size_now);
          console.log(size_new);

          // Set the new font size to the headline.
          headline.css("font-size",size_new); 
      }
  		console.log($(this).html());
  	});
  })();

    // changing style if in Microsoft IE 
    // var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./); 
    // if (isIE11) {
    //     $('#WNCols234-5 section.block.breaking-news-a h4::before').css('display','-ms !important');
    //     $('#WNCols234-5 section.block.breaking-news-a h4::after').css('display','-ms !important');

    //     $('#WNCols234-5 #facebook').addClass('ieFB');
    //     $('#WNCols234-5 #twitter').addClass('ieTwitter');
    // }       
};
}

Worldnow.EventMan.event('bodydone', function () {
    moveAd();
});

$wn(document).ready(function() {

	csKITV.rightNow(); 
	csKITV.addAltHeader();
	csKITV.homeButton();
	csKITV.socialArea();
	csKITV.addBottom();
	csKITV.nowcast();
	csKITV.buttonBars();
	csKITV.sponsorBar();
	uLocal();
	csKITV.timeCheck();
	csKITV.breakNews();

	// news page
	if (wng_pageInfo.containerId == "304202") {
		$wn("#DisplaySizeId-7 .wnGroup .header").insertAfter($wn("#DisplaySizeId-7 .feature.priority-1"));
		$wn("#DisplaySizeId-7 .wnGroup .feature").each(function() {
			$wn(this).find('.summaryImage').prependTo(this);
			if ($wn(this).find('.summaryImage ').length == 0) {
				$wn(defaultSummaryImage).show().prependTo(this);
			}
		});

		$wn('#DisplaySizeId-7 div.wnContent.summary span.text').dotdotdot({
			// configuration goes here
			ellipsis : ' ...',
			wrap : 'word',
			height : 25
		});

		$wn('#DisplaySizeId-7 .priority-1 div.wnContent.summary span.text').dotdotdot({
			// configuration goes here
			ellipsis : ' ...',
			wrap : 'word',
			height : 30
		});

	}

	// all pages
	$wn('section.block.displaysize-30.wnclear.breaking-news-a').insertBefore('#WNCols23-4');

	//video icon
	$('#WNDS-20 h4.wnRole-STORY a img.wnVideoIncluded').attr('src', 'http://ftpcontent.worldnow.com/wncustom/kitv/custom/images/video-Icon-small.png');

})

function moveAd() {
	// moving ad 52 to the right rail if it exists, client wanted producer control of turning the ad on and off.
	if ($(wng_pageInfo.ads[52]).length > 0) {
		var myad = wng_pageInfo.ads[52];
		var ad = wng_pageInfo.ads[52];
		ad = null;
		myad.id = "252";
		Worldnow.AdMan.attachAd({selector:'#WNCol4',attachStyle:'append'},myad);
		$('#WNAd52').remove();
	}
}

function trumbaStyle() {
	var head = $("iframe[name='trumba.spud.0.iframe").contents().find("head");
	var css = '<style> .twMiniCalDiv { margin-top: 20px; };</style>';
	$(head).append(css);
};

$wn(window).load(function() {
    $wn('body#WNAffKITV').css('background-position', 'center 47px');

    trumbaStyle();
});

