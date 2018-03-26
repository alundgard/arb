/*! updated; 02-19-2018 09:01 AM */

Modulr.define("FOX_PLUGINS:MediaIconOverlay",["jquery"],function($){var CONST={},domain=window.FOX_ENV_STATIC_DOMAIN;CONST.domain=domain,CONST.size=[118,96,64,48,32,24,16],CONST.type={video:{type:"video",image:"/static/v/all/img/vd-overlay_${dim}.png"},video2:{type:"video2",image:"/static/v/all/img/vid2_${dim}.png"},slideshow:{type:"slideshow",image:"/static/v/all/img/ss-overlay_${dim}.png"},slideshow2:{type:"slideshow2",image:"/static/v/all/img/slid2_${dim}.png"},interactive:{type:"interactive",image:"/static/v/all/img/ia-overlay_${dim}.png"},freeform:{type:"interactive",image:"/static/v/all/img/ia-overlay_${dim}.png"},magnify:{type:"magnify",image:"/static/v/all/img/mg-overlay_${dim}.png"},listpage:{type:"listpage",image:"/static/v/all/img/lp-overlay_${dim}.png"},"list-article":{type:"listpage",image:"/static/v/all/img/lp-overlay_${dim}.png"}};var App=function(){};App.prototype.embed=function(config){var target=config.target,dim=(target.parent(),config.dim||!1),type=config.type;if(!target.attr("src"))return!1;if(!CONST.type[type])return!1;var trigger=function(){dim?setEmbed(config,dim):getDimensions(config,function(info){setEmbed(config,info)})},lazyImg=isLazyLoad(target);if(lazyImg){var lazyLoopIntv=!1,lazyLoop=function(){target.attr("src")===lazyImg?(trigger(),clearTimeout(lazyLoopIntv)):lazyLoopIntv=setTimeout(function(){lazyLoop()},800)};lazyLoop()}else trigger()};var setEmbed=function(config,dim){var target=config.target,parent=target.parent(),type=config.type,position=getPos(type,target)||config.position||"bottom right",size=config.size||getSize(config,dim),edge=config.edge||getEdge(position,dim,size),responsive=config.responsive||!1,typeInfo=CONST.type[type];if(parent.hasClass("overlay-media")&&parent.attr("data-ovr"))return!1;var html=$('<div class="overlay-media" data-ovr="1"></div>');responsive?html.css({position:"relative"}):html.css({width:dim[0],height:dim[1],position:"relative"});var overlay=$('<div class="ovr ovr-'+size+'"></div>'),overlayImg=CONST.domain+typeInfo.image.replace("${dim}",size),css={background:"url('"+overlayImg+"') no-repeat center center",position:"absolute",width:size,height:size,"background-position":"0px 0px","z-index":1,opacity:0,"-webkit-transition":"opacity 0.3s","-moz-transition":"opacity 0.3s","-o-transition":"opacity 0.3s",transition:"opacity 0.3s"};switch(position){case"bottom left":css.left=edge[0]+"px",css.bottom=edge[1]+"px";break;case"top right":css.right=edge[0]+"px",css.top=edge[1]+"px";break;case"top left":css.left=edge[0]+"px",css.top=edge[1]+"px";break;case"center":css.left=edge[0]+"px",css.top=edge[1]+"px";break;default:css.right=edge[0]+"px",css.bottom=edge[1]+"px"}overlay.css(css),html.append(overlay),html.append(target.clone()),target.replaceWith(html),setTimeout(function(){parent.find(".ovr").css("opacity","1"),parent.find(".overlay-media").hover(function(){$(this).find(".ovr").css("background-position","0px -"+size+"px")},function(){$(this).find(".ovr").css("background-position","0px 0px")})},150),"function"==typeof config.onDone&&config.onDone()},isLazyLoad=function(elm){var ret=elm.attr("data-src")||elm.attr("dest_src")||!1;return ret},getDimensions=function(config,callback){var target=config.target,img=new Image,src=target.attr("src");return img.onload=function(){var dim=[target.width(),target.height()];callback(dim)},img.src=src,!1},getEdge=function(position,dim,size){var ret=[10,10],ratio=[.05,.05];return ret="center"===position?[Math.floor(.5*dim[0]-.5*size),Math.floor(.5*dim[1]-.5*size)]:[Math.floor(dim[0]*ratio[0]),Math.floor(dim[1]*ratio[1])]},getSize=function(config,dim){var x,ratio=.16,w=Math.floor(dim[0]*ratio),ret=!1;if(map=CONST.size,!isNaN(w))if(w>=map[0]&&(ret=map[0]),20>=w)ret=map[map.length-1];else for(x=0;x<map.length;x++){var val=map[x],nVal=map[x+1]?map[x+1]:0,diffH=Math.abs(val-w),diffL=Math.abs(val-nVal);if(val>=w&&w>nVal){ret=diffH>diffL?nVal:val;break}}return ret?ret:!1},getPos=function(type,target){return window._FOX_ABT&&window._FOX_ABT.videoPlayBtnPos&&"video"===type?window._FOX_ABT.videoPlayBtnPos:target.attr("data-ovr-pos")||!1};return App});