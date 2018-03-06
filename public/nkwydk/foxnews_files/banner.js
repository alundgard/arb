'use strict';
var APP = window.APP = window.APP || {};

APP.unit = (function(){
	var myEaseOut = Expo.easeOut;
	var tl = new TimelineMax();

	var init = function() {
		tl.set(banner, {autoAlpha:1})
		.set([price_lgl, flow, glow], {autoAlpha:0})
		.set([txt1, txt11, txt2, tv, phone, txt3, txt4, ef_subh], {x:"+=728px"})
		.set (x1_content, {scale:3, autoAlpha:0})
		.set(price, {x:"-=300px", autoAlpha: 0})
		.set(cta_legal, {opacity:0})
		.set(cta_txt2, {opacity:0})
		.set(banner, {css: {perspective: 600}})

		animate();
	};

	var animate = function() {
		//frame1
		tl.to(txt1, .5, {x:"-=728px", ease:myEaseOut}, "+=0.2")
		.to(txt11, .5, {x:"-=728px", ease:myEaseOut}, "+=1.3")//
		.to([txt1,txt11], .5, {x:"-=728px", ease:myEaseOut}, "+=1.8")
		//frame2
		.to(x1_content, .25,  {scale:1,autoAlpha:1})
		.to(flow, .5, {autoAlpha:1, ease:myEaseOut})
		.to([x1_content,flow], .5, {x:"-=728px", ease:myEaseOut}, "+=1.2")//
		//frame3
		.to(txt2, .5, {x:"-=728px", ease:myEaseOut}, "-=0.5")
		.to(tv, .5, {x:"-=728px", ease:myEaseOut}, "-=0.2")
		.to(phone, .5, {x:"-=728px", ease:myEaseOut}, "-=0.3")
		.to([txt2,tv, phone], .5, {x:"-=728px", ease:myEaseOut}, "+=2.3")//
		//frame4
		.to(txt3, .5, {x:"-=728px", ease:myEaseOut}, "-=.5")
		//frame5
		.to(txt4, .5, {x:"-=728px", ease:myEaseOut}, "+=.5")
		.to([txt3, txt4], .5, {x:"-=728px", ease: myEaseOut}, "+=1")
		//frame6
		.from(ef_hl, .25, {scale:1.20,y:"+=100px",autoAlpha:0}, "+=.1")
        .to(glow, .5, {autoAlpha: 1})
		.from(price_line1, .25, {height:0, ease:myEaseOut}, "+=0.1")

		.to(price, .25, {x:"+=300px", autoAlpha:1, ease:myEaseOut})
		.to(ef_subh, .25, {x:"-=728px", ease:myEaseOut}, "-=0.25")
		.to(price_lgl, .25,  {autoAlpha:1}, "-=0.25")

		.to(cta_txt, .5, {scale: .93,left: 8, top: 22, ease:myEaseOut}, "+=0.1")
		.to(cta_txt, .3, {opacity:0}, "-=0.2")
		.to(cta_txt2, .3, {opacity:1}, "-=0.4")
		.to(cta_legal, .25, {autoAlpha:1, ease:myEaseOut}, "-=0.1")
		.to(cta_arrow, .25, {top:39,left:93, ease:myEaseOut, onComplete: hoverEffect}, "-=0.72");

		TweenMax.delayedCall(14, bindEvents);		
	};

	var bindEvents = function() {
		var banner = document.getElementById('banner');
		banner.addEventListener('mouseenter', hoverEffect);
	};

	var hoverEffect = function(event) {
		var mouseEffect = TweenMax.fromTo(cta, 1, {backgroundPosition:"-350px 0"},{backgroundPosition:"450px 0",paused:true});
		mouseEffect.restart();
	};

	var exitHandler = function (event) {
		window.open(window.clickTag,'_blank');
	};

	return {
		init: init,
		exitHandler: exitHandler
	};
})();

window.addEventListener('load', function(event) {
	APP.unit.init();
});