/** FOX NEWS ISA | 03-23-2018 12:22 PM **/
function Visitor(a,b){if(!a)throw"Visitor requires Adobe Marketing Cloud Org ID";var c=this;c.version="1.9.0";var d=window,e=d.Visitor;e.version=c.version,d.s_c_in||(d.s_c_il=[],d.s_c_in=0),c._c="Visitor",c._il=d.s_c_il,c._in=d.s_c_in,c._il[c._in]=c,d.s_c_in++,c.ha={Da:[]};var f=d.document,g=e.Bb;g||(g=null);var h=e.Cb;h||(h=void 0);var i=e.La;i||(i=!0);var j=e.Ja;j||(j=!1),c.da=function(a){var b,c,d=0;if(a)for(b=0;b<a.length;b++)c=a.charCodeAt(b),d=(d<<5)-d+c,d&=d;return d},c.r=function(a,b){var c,d,e="0123456789",f="",g="",h=8,j=10,k=10;if(b===l&&(C.isClientSideMarketingCloudVisitorID=i),1==a){for(e+="ABCDEF",c=0;16>c;c++)d=Math.floor(Math.random()*h),f+=e.substring(d,d+1),d=Math.floor(Math.random()*h),g+=e.substring(d,d+1),h=16;return f+"-"+g}for(c=0;19>c;c++)d=Math.floor(Math.random()*j),f+=e.substring(d,d+1),0==c&&9==d?j=3:(1==c||2==c)&&10!=j&&2>d?j=10:c>2&&(j=10),d=Math.floor(Math.random()*k),g+=e.substring(d,d+1),0==c&&9==d?k=3:(1==c||2==c)&&10!=k&&2>d?k=10:c>2&&(k=10);return f+g},c.Pa=function(){var a;if(!a&&d.location&&(a=d.location.hostname),a)if(/^[0-9.]+$/.test(a))a="";else{var b=a.split("."),c=b.length-1,e=c-1;if(c>1&&2>=b[c].length&&(2==b[c-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+b[c]+","))&&e--,e>0)for(a="";c>=e;)a=b[c]+(a?".":"")+a,c--}return a},c.cookieRead=function(a){var a=encodeURIComponent(a),b=(";"+f.cookie).split(" ").join(";"),c=b.indexOf(";"+a+"="),d=0>c?c:b.indexOf(";",c+1);return 0>c?"":decodeURIComponent(b.substring(c+2+a.length,0>d?b.length:d))},c.cookieWrite=function(a,b,d){var e,g=c.cookieLifetime,b=""+b,g=g?(""+g).toUpperCase():"";return d&&"SESSION"!=g&&"NONE"!=g?(e=""!=b?parseInt(g?g:0,10):-60)?(d=new Date,d.setTime(d.getTime()+1e3*e)):1==d&&(d=new Date,e=d.getYear(),d.setYear(e+2+(1900>e?1900:0))):d=0,a&&"NONE"!=g?(f.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+"; path=/;"+(d?" expires="+d.toGMTString()+";":"")+(c.cookieDomain?" domain="+c.cookieDomain+";":""),c.cookieRead(a)==b):0},c.h=g,c.J=function(a,b){try{"function"==typeof a?a.apply(d,b):a[1].apply(a[0],b)}catch(c){}},c.Va=function(a,b){b&&(c.h==g&&(c.h={}),c.h[a]==h&&(c.h[a]=[]),c.h[a].push(b))},c.q=function(a,b){if(c.h!=g){var d=c.h[a];if(d)for(;0<d.length;)c.J(d.shift(),b)}},c.v=function(a,b,c,d){if(c=encodeURIComponent(b)+"="+encodeURIComponent(c),b=y.ub(a),a=y.lb(a),-1===a.indexOf("?"))return a+"?"+c+b;var e=a.split("?"),a=e[0]+"?",d=y.Ya(e[1],c,d);return a+d+b},c.Oa=function(a,b){var c=RegExp("[\\?&#]"+b+"=([^&#]*)").exec(a);return c&&c.length?decodeURIComponent(c[1]):void 0},c.Ua=function(){var a=g,b=d.location.href;try{var e=c.Oa(b,x.Y);if(e)for(var a={},f=e.split("|"),b=0,h=f.length;h>b;b++){var i=f[b].split("=");a[i[0]]=decodeURIComponent(i[1])}return a}catch(j){}},c.Ma=function(){var a=c.Ua();if(a){var b=a[l],d=c.setMarketingCloudVisitorID;b&&b.match(x.u)&&d(b),c.j(v,-1),a=a[s],b=c.setAnalyticsVisitorID,a&&a.match(x.u)&&b(a)}},c.Ta=function(a){function b(a){y.ob(a)&&c.setCustomerIDs(a)}function d(a){a=a||{},c._supplementalDataIDCurrent=a.supplementalDataIDCurrent||"",c._supplementalDataIDCurrentConsumed=a.supplementalDataIDCurrentConsumed||{},c._supplementalDataIDLast=a.supplementalDataIDLast||"",c._supplementalDataIDLastConsumed=a.supplementalDataIDLastConsumed||{}}a&&a[c.marketingCloudOrgID]&&(a=a[c.marketingCloudOrgID],b(a.customerIDs),d(a.sdid))},c.l=g,c.Ra=function(a,b,d,e){b=c.v(b,"d_fieldgroup",a,1),e.url=c.v(e.url,"d_fieldgroup",a,1),e.m=c.v(e.m,"d_fieldgroup",a,1),C.d[a]=i,e===Object(e)&&e.m&&"XMLHttpRequest"===c.ja.C.D?c.ja.hb(e,d,a):c.useCORSOnly||c.ga(a,b,d)},c.ga=function(a,b,d){var e,h=0,j=0;if(b&&f){for(e=0;!h&&2>e;){try{h=(h=f.getElementsByTagName(e>0?"HEAD":"head"))&&0<h.length?h[0]:0}catch(k){h=0}e++}if(!h)try{f.body&&(h=f.body)}catch(l){h=0}if(h)for(e=0;!j&&2>e;){try{j=f.createElement(e>0?"SCRIPT":"script")}catch(m){j=0}e++}}b&&h&&j?(j.type="text/javascript",j.src=b,h.firstChild?h.insertBefore(j,h.firstChild):h.appendChild(j),h=c.loadTimeout,B.d[a]={requestStart:B.o(),url:b,sa:h,qa:B.wa(),ra:0},d&&(c.l==g&&(c.l={}),c.l[a]=setTimeout(function(){d(i)},h)),c.ha.Da.push(b)):d&&d()},c.Na=function(a){c.l!=g&&c.l[a]&&(clearTimeout(c.l[a]),c.l[a]=0)},c.ea=j,c.fa=j,c.isAllowed=function(){return!c.ea&&(c.ea=i,c.cookieRead(c.cookieName)||c.cookieWrite(c.cookieName,"T",1))&&(c.fa=i),c.fa},c.b=g,c.c=g;var k=e.Tb;k||(k="MC");var l=e.Zb;l||(l="MCMID");var m=e.Ub;m||(m="MCCIDH");var n=e.Xb;n||(n="MCSYNCS");var o=e.Yb;o||(o="MCSYNCSOP");var p=e.Vb;p||(p="MCIDTS");var q=e.Wb;q||(q="MCOPTOUT");var r=e.Rb;r||(r="A");var s=e.Ob;s||(s="MCAID");var t=e.Sb;t||(t="AAM");var u=e.Qb;u||(u="MCAAMLH");var v=e.Pb;v||(v="MCAAMB");var w=e.$b;w||(w="NONE"),c.L=0,c.ca=function(){if(!c.L){var a=c.version;c.audienceManagerServer&&(a+="|"+c.audienceManagerServer),c.audienceManagerServerSecure&&(a+="|"+c.audienceManagerServerSecure),c.L=c.da(a)}return c.L},c.ia=j,c.f=function(){if(!c.ia){c.ia=i;var a,b,d,e,f=c.ca(),h=j,k=c.cookieRead(c.cookieName),l=new Date;if(c.b==g&&(c.b={}),k&&"T"!=k)for(k=k.split("|"),k[0].match(/^[\-0-9]+$/)&&(parseInt(k[0],10)!=f&&(h=i),k.shift()),1==k.length%2&&k.pop(),f=0;f<k.length;f+=2)a=k[f].split("-"),b=a[0],d=k[f+1],1<a.length?(e=parseInt(a[1],10),a=0<a[1].indexOf("s")):(e=0,a=j),h&&(b==m&&(d=""),e>0&&(e=l.getTime()/1e3-60)),b&&d&&(c.e(b,d,1),e>0&&(c.b["expire"+b]=e+(a?"s":""),l.getTime()>=1e3*e||a&&!c.cookieRead(c.sessionCookieName)))&&(c.c||(c.c={}),c.c[b]=i);h=c.loadSSL?!!c.trackingServerSecure:!!c.trackingServer,!c.a(s)&&h&&(k=c.cookieRead("s_vi"))&&(k=k.split("|"),1<k.length&&0<=k[0].indexOf("v1")&&(d=k[1],f=d.indexOf("["),f>=0&&(d=d.substring(0,f)),d&&d.match(x.u)&&c.e(s,d)))}},c.Xa=function(){var a,b,d=c.ca();for(a in c.b)!Object.prototype[a]&&c.b[a]&&"expire"!=a.substring(0,6)&&(b=c.b[a],d+=(d?"|":"")+a+(c.b["expire"+a]?"-"+c.b["expire"+a]:"")+"|"+b);c.cookieWrite(c.cookieName,d,1)},c.a=function(a,b){return c.b==g||!b&&c.c&&c.c[a]?g:c.b[a]},c.e=function(a,b,d){c.b==g&&(c.b={}),c.b[a]=b,d||c.Xa()},c.Qa=function(a,b){var d=c.a(a,b);return d?d.split("*"):g},c.Wa=function(a,b,d){c.e(a,b?b.join("*"):"",d)},c.Ib=function(a,b){var d=c.Qa(a,b);if(d){var e,f={};for(e=0;e<d.length;e+=2)f[d[e]]=d[e+1];return f}return g},c.Kb=function(a,b,d){var e,f=g;if(b)for(e in f=[],b)Object.prototype[e]||(f.push(e),f.push(b[e]));c.Wa(a,f,d)},c.j=function(a,b,d){var e=new Date;e.setTime(e.getTime()+1e3*b),c.b==g&&(c.b={}),c.b["expire"+a]=Math.floor(e.getTime()/1e3)+(d?"s":""),0>b?(c.c||(c.c={}),c.c[a]=i):c.c&&(c.c[a]=j),d&&(c.cookieRead(c.sessionCookieName)||c.cookieWrite(c.sessionCookieName,"1"))},c.ba=function(a){return a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=w)),!a||a!=w&&!a.match(x.u))&&(a=""),a},c.k=function(a,b){if(c.Na(a),c.i!=g&&(c.i[a]=j),B.d[a]&&(B.d[a].zb=B.o(),B.I(a)),C.d[a]&&C.Fa(a,j),a==k){C.isClientSideMarketingCloudVisitorID!==i&&(C.isClientSideMarketingCloudVisitorID=j);var d=c.a(l);if(!d){if(d="object"==typeof b&&b.mid?b.mid:c.ba(b),!d){if(c.B)return void c.getAnalyticsVisitorID(g,j,i);d=c.r(0,l)}c.e(l,d)}d&&d!=w||(d=""),"object"==typeof b&&((b.d_region||b.dcs_region||b.d_blob||b.blob)&&c.k(t,b),c.B&&b.mid&&c.k(r,{id:b.id})),c.q(l,[d])}if(a==t&&"object"==typeof b){d=604800,b.id_sync_ttl!=h&&b.id_sync_ttl&&(d=parseInt(b.id_sync_ttl,10));var e=c.a(u);e||((e=b.d_region)||(e=b.dcs_region),e&&(c.j(u,d),c.e(u,e))),e||(e=""),c.q(u,[e]),e=c.a(v),(b.d_blob||b.blob)&&((e=b.d_blob)||(e=b.blob),c.j(v,d),c.e(v,e)),e||(e=""),c.q(v,[e]),!b.error_msg&&c.A&&c.e(m,c.A)}if(a==r&&(d=c.a(s),d||((d=c.ba(b))?d!==w&&c.j(v,-1):d=w,c.e(s,d)),d&&d!=w||(d=""),c.q(s,[d])),c.idSyncDisableSyncs?A.xa=i:(A.xa=j,d={},d.ibs=b.ibs,d.subdomain=b.subdomain,A.vb(d)),b===Object(b)){var f;c.isAllowed()&&(f=c.a(q)),f||(f=w,b.d_optout&&b.d_optout instanceof Array&&(f=b.d_optout.join(",")),d=parseInt(b.d_ottl,10),isNaN(d)&&(d=7200),c.j(q,d,i),c.e(q,f)),c.q(q,[f])}},c.i=g,c.s=function(a,b,d,e,f){var h,j="",m=y.nb(a);return c.isAllowed()&&(c.f(),j=c.a(a,D[a]===i),c.disableThirdPartyCalls&&!j&&(a===l?(j=c.r(0,l),c.setMarketingCloudVisitorID(j)):a===s&&!m&&(j="",c.setAnalyticsVisitorID(j))),(!j||c.c&&c.c[a])&&(!c.disableThirdPartyCalls||m))&&(a==l||a==q?h=k:a==u||a==v?h=t:a==s&&(h=r),h)?(!b||c.i!=g&&c.i[h]||(c.i==g&&(c.i={}),c.i[h]=i,c.Ra(h,b,function(b,d){if(!c.a(a))if(B.d[h]&&(B.d[h].timeout=B.o(),B.d[h].mb=!!b,B.I(h)),d!==Object(d)||c.useCORSOnly){b&&C.Fa(h,i);var e="";a==l?e=c.r(0,l):h==t&&(e={error_msg:"timeout"}),c.k(h,e)}else c.ga(h,d.url,d.G)},f)),j?j:(c.Va(a,d),b||c.k(h,{id:w}),"")):(a!=l&&a!=s||j!=w||(j="",e=i),d&&e&&c.J(d,[j]),j)},c._setMarketingCloudFields=function(a){c.f(),c.k(k,a)},c.setMarketingCloudVisitorID=function(a){c._setMarketingCloudFields(a)},c.B=j,c.getMarketingCloudVisitorID=function(a,b){if(c.isAllowed()){c.marketingCloudServer&&0>c.marketingCloudServer.indexOf(".demdex.net")&&(c.B=i);var d=c.z("_setMarketingCloudFields");return c.s(l,d.url,a,b,d)}return""},c.Sa=function(){c.getAudienceManagerBlob()},e.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},c.w={},c.aa=j,c.A="",c.setCustomerIDs=function(a){if(c.isAllowed()&&a){c.f();var b,d;for(b in a)if(!Object.prototype[b]&&(d=a[b]))if("object"==typeof d){var e={};d.id&&(e.id=d.id),d.authState!=h&&(e.authState=d.authState),c.w[b]=e}else c.w[b]={id:d};var a=c.getCustomerIDs(),e=c.a(m),f="";e||(e=0);for(b in a)Object.prototype[b]||(d=a[b],f+=(f?"|":"")+b+"|"+(d.id?d.id:"")+(d.authState?d.authState:""));c.A=c.da(f),c.A!=e&&(c.aa=i,c.Sa())}},c.getCustomerIDs=function(){c.f();var a,b,d={};for(a in c.w)Object.prototype[a]||(b=c.w[a],d[a]||(d[a]={}),b.id&&(d[a].id=b.id),d[a].authState=b.authState!=h?b.authState:e.AuthState.UNKNOWN);return d},c._setAnalyticsFields=function(a){c.f(),c.k(r,a)},c.setAnalyticsVisitorID=function(a){c._setAnalyticsFields(a)},c.getAnalyticsVisitorID=function(a,b,d){if(c.isAllowed()){var e="";if(d||(e=c.getMarketingCloudVisitorID(function(){c.getAnalyticsVisitorID(a,i)})),e||d){var f=d?c.marketingCloudServer:c.trackingServer,g="";c.loadSSL&&(d?c.marketingCloudServerSecure&&(f=c.marketingCloudServerSecure):c.trackingServerSecure&&(f=c.trackingServerSecure));var h={};if(f){var f="http"+(c.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+c.version+"&mcorgid="+encodeURIComponent(c.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(c.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),j=["s_c_il",c._in,"_set"+(d?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+c._in+"%5D._set"+(d?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e,h.na=j}return h.url=g,c.s(d?l:s,g,a,b,h)}}return""},c._setAudienceManagerFields=function(a){c.f(),c.k(t,a)},c.z=function(a){var b=c.audienceManagerServer,d="",e=c.a(l),f=c.a(v,i),g=c.a(s),g=g&&g!=w?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";if(c.loadSSL&&c.audienceManagerServerSecure&&(b=c.audienceManagerServerSecure),b){var h,j,d=c.getCustomerIDs();if(d)for(h in d)Object.prototype[h]||(j=d[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(j.id?j.id:"")+(j.authState?"%01"+j.authState:""));return a||(a="_setAudienceManagerFields"),b="http"+(c.loadSSL?"s":"")+"://"+b+"/id",e="d_visid_ver="+c.version+"&d_rtbd=json&d_ver=2"+(!e&&c.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(c.marketingCloudOrgID)+"&d_nsid="+(c.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(c.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g,f=["s_c_il",c._in,a],d=b+"?"+e+"&d_cb=s_c_il%5B"+c._in+"%5D."+a,{url:d,m:b+"?"+e,na:f}}return{url:d}},c.getAudienceManagerLocationHint=function(a,b){if(c.isAllowed()&&c.getMarketingCloudVisitorID(function(){c.getAudienceManagerLocationHint(a,i)})){var d=c.a(s);if(d||(d=c.getAnalyticsVisitorID(function(){c.getAudienceManagerLocationHint(a,i)})),d)return d=c.z(),c.s(u,d.url,a,b,d)}return""},c.getAudienceManagerBlob=function(a,b){if(c.isAllowed()&&c.getMarketingCloudVisitorID(function(){c.getAudienceManagerBlob(a,i)})){var d=c.a(s);if(d||(d=c.getAnalyticsVisitorID(function(){c.getAudienceManagerBlob(a,i)})),d){var d=c.z(),e=d.url;return c.aa&&c.j(v,-1),c.s(v,e,a,b,d)}}return""},c._supplementalDataIDCurrent="",c._supplementalDataIDCurrentConsumed={},c._supplementalDataIDLast="",c._supplementalDataIDLastConsumed={},c.getSupplementalDataID=function(a,b){!c._supplementalDataIDCurrent&&!b&&(c._supplementalDataIDCurrent=c.r(1));var d=c._supplementalDataIDCurrent;return c._supplementalDataIDLast&&!c._supplementalDataIDLastConsumed[a]?(d=c._supplementalDataIDLast,c._supplementalDataIDLastConsumed[a]=i):d&&(c._supplementalDataIDCurrentConsumed[a]&&(c._supplementalDataIDLast=c._supplementalDataIDCurrent,c._supplementalDataIDLastConsumed=c._supplementalDataIDCurrentConsumed,c._supplementalDataIDCurrent=d=b?"":c.r(1),c._supplementalDataIDCurrentConsumed={}),d&&(c._supplementalDataIDCurrentConsumed[a]=i)),d},e.OptOut={GLOBAL:"global"},c.getOptOut=function(a,b){if(c.isAllowed()){var d=c.z("_setMarketingCloudFields");return c.s(q,d.url,a,b,d)}return""},c.isOptedOut=function(a,b,d){return c.isAllowed()?(b||(b=e.OptOut.GLOBAL),(d=c.getOptOut(function(d){c.J(a,[d==e.OptOut.GLOBAL||0<=d.indexOf(b)])},d))?d==e.OptOut.GLOBAL||0<=d.indexOf(b):g):j},c.appendVisitorIDsTo=function(a){for(var b=x.Y,d=[[l,c.a(l)],[s,c.a(s)]],e="",f=0,h=d.length;h>f;f++){var i=d[f],j=i[0],i=i[1];i!=g&&i!==w&&(e=e?e+="|":e,e+=j+"="+encodeURIComponent(i))}try{return c.v(a,b,e)}catch(k){return a}};var x={p:!!d.postMessage,Ia:1,$:864e5,Y:"adobe_mc",u:/^[0-9a-fA-F\-]+$/};c.Db=x,c.la={postMessage:function(a,b,c){var d=1;b&&(x.p?c.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(c.location=b.replace(/#.*$/,"")+"#"+ +new Date+d++ +"&"+a))},T:function(a,b){var c;try{x.p&&(a&&(c=function(c){return"string"==typeof b&&c.origin!==b||"[object Function]"===Object.prototype.toString.call(b)&&!1===b(c.origin)?!1:void a(c)}),window.addEventListener?window[a?"addEventListener":"removeEventListener"]("message",c,!1):window[a?"attachEvent":"detachEvent"]("onmessage",c))}catch(d){}}};var y={M:function(){return f.addEventListener?function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)},j)}:f.attachEvent?function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)})}:void 0}(),map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||a===g)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!=typeof b)throw new TypeError;for(var e=Array(d),f=0;d>f;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},gb:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},ub:function(a){var b=a.indexOf("#");return b>0?a.substr(b):""},lb:function(a){var b=a.indexOf("#");return b>0?a.substr(0,b):a},Ya:function(a,b,c){return a=a.split("&"),c=c!=g?c:a.length,a.splice(c,0,b),a.join("&")},nb:function(a,b,d){return a!==s?j:(b||(b=c.trackingServer),d||(d=c.trackingServerSecure),a=c.loadSSL?d:b,"string"==typeof a&&a.length?0>a.indexOf("2o7.net")&&0>a.indexOf("omtrdc.net"):j)},ob:function(a){return Boolean(a&&a===Object(a))}};c.Jb=y;var z={C:function(){var a="none",b=i;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/")()?a="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=j),0<Object.prototype.toString.call(window.Ab).indexOf("Constructor")&&(b=j)),{D:a,Mb:b}}(),ib:function(){return"none"===this.C.D?g:new window[this.C.D]},hb:function(a,b,d){var e=this;b&&(a.G=b);try{var f=this.ib();f.open("get",a.m+"&ts="+(new Date).getTime(),i),"XMLHttpRequest"===this.C.D&&(f.withCredentials=i,f.timeout=c.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var b;try{if(b=JSON.parse(this.responseText),b!==Object(b)){e.n(a,g,"Response is not JSON");break a}}catch(c){e.n(a,c,"Error parsing response as JSON");break a}try{for(var d=a.na,f=window,h=0;h<d.length;h++)f=f[d[h]];f(b)}catch(i){e.n(a,i,"Error forming callback function")}}}),f.onerror=function(b){e.n(a,b,"onerror")},f.ontimeout=function(b){e.n(a,b,"ontimeout")},f.send(),B.d[d]={requestStart:B.o(),url:a.m,sa:f.timeout,qa:B.wa(),ra:1},c.ha.Da.push(a.m)}catch(h){this.n(a,h,"try-catch")}},n:function(a,b,d){c.CORSErrors.push({Nb:a,error:b,description:d}),a.G&&("ontimeout"===d?a.G(i):a.G(j,a))}};c.ja=z;var A={Ka:3e4,Z:649,Ha:j,id:g,S:[],P:g,va:function(a){return"string"==typeof a?(a=a.split("/"),a[0]+"//"+a[2]):void 0},g:g,url:g,jb:function(){var a="http://fast.",b="?d_nsid="+c.idSyncContainerID+"#"+encodeURIComponent(f.location.href);return this.g||(this.g="nosubdomainreturned"),c.loadSSL&&(a=c.idSyncSSLUseAkamai?"https://fast.":"https://"),a=a+this.g+".demdex.net/dest5.html"+b,this.P=this.va(a),this.id="destination_publishing_iframe_"+this.g+"_"+c.idSyncContainerID,a},ab:function(){var a="?d_nsid="+c.idSyncContainerID+"#"+encodeURIComponent(f.location.href);"string"==typeof c.K&&c.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+c.idSyncContainerID,this.P=this.va(c.K),this.url=c.K+a)},xa:g,ta:j,V:j,F:g,ac:g,tb:g,bc:g,U:j,H:[],rb:[],sb:[],za:x.p?15:100,Q:[],pb:[],oa:i,Ca:j,Ba:function(){return!c.idSyncDisable3rdPartySyncing&&(this.ta||c.Fb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.V},N:function(){function a(){d=document.createElement("iframe"),d.sandbox="allow-scripts allow-same-origin",d.title="Adobe ID Syncing iFrame",d.id=c.id,d.style.cssText="display: none; width: 0; height: 0;",d.src=c.url,c.tb=i,b(),document.body.appendChild(d)}function b(){y.M(d,"load",function(){d.className="aamIframeLoaded",c.F=i,c.t()})}this.V=i;var c=this,d=document.getElementById(this.id);d?"IFRAME"!==d.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==d.className?b():(this.F=i,this.ya=d,this.t()):a(),this.ya=d},t:function(a){var b=this;a===Object(a)&&(this.Q.push(a),this.wb(a)),(this.Ca||!x.p||this.F)&&this.Q.length&&(this.I(this.Q.shift()),this.t()),!c.idSyncDisableSyncs&&this.F&&this.H.length&&!this.U&&(this.Ha||(this.Ha=i,setTimeout(function(){b.za=x.p?15:150},this.Ka)),this.U=i,this.Ea())},wb:function(a){var b,c,d;if((b=a.ibs)&&b instanceof Array&&(c=b.length))for(a=0;c>a;a++)d=b[a],d.syncOnPage&&this.pa(d,"","syncOnPage")},I:function(a){var b,c,d,e,f,g=encodeURIComponent;if((b=a.ibs)&&b instanceof Array&&(c=b.length))for(d=0;c>d;d++)e=b[d],f=[g("ibs"),g(e.id||""),g(e.tag||""),y.gb(e.url||[],","),g(e.ttl||""),"","",e.fireURLSync?"true":"false"],e.syncOnPage||(this.oa?this.ma(f.join("|")):e.fireURLSync&&this.pa(e,f.join("|")));this.pb.push(a)},pa:function(a,b,d){var e=(d="syncOnPage"===d?i:j)?o:n;c.f();var f=c.a(e),g=j,h=j,k=Math.ceil((new Date).getTime()/x.$);f?(f=f.split("*"),h=this.xb(f,a.id,k),g=h.eb,h=h.fb,(!g||!h)&&this.ua(d,a,b,f,e,k)):(f=[],this.ua(d,a,b,f,e,k))},xb:function(a,b,c){var d,e,f,g=j,h=j;for(e=0;e<a.length;e++)d=a[e],f=parseInt(d.split("-")[1],10),d.match("^"+b+"-")?(g=i,f>c?h=i:(a.splice(e,1),e--)):c>=f&&(a.splice(e,1),e--);return{eb:g,fb:h}},qb:function(a){if(a.join("*").length>this.Z)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.Z;)a.shift()},ua:function(a,b,d,e,f,h){var i=this;if(a){if("img"===b.tag){var j,k,l,a=b.url,d=c.loadSSL?"https:":"http:";for(e=0,j=a.length;j>e;e++){k=a[e],l=/^\/\//.test(k);var m=new Image;y.M(m,"load",function(a,b,d,e){return function(){i.S[a]=g,c.f();var h=c.a(f),j=[];if(h){var k,l,m,h=h.split("*");for(k=0,l=h.length;l>k;k++)m=h[k],m.match("^"+b.id+"-")||j.push(m)}i.Ga(j,b,d,e)}}(this.S.length,b,f,h)),m.src=(l?d:"")+k,this.S.push(m)}}}else this.ma(d),this.Ga(e,b,f,h)},ma:function(a){var b=encodeURIComponent;this.H.push(b(c.Gb?"---destpub-debug---":"---destpub---")+a)},Ga:function(a,b,d,e){a.push(b.id+"-"+(e+Math.ceil(b.ttl/60/24))),this.qb(a),c.e(d,a.join("*"))},Ea:function(){var a,b=this;this.H.length?(a=this.H.shift(),c.la.postMessage(a,this.url,this.ya.contentWindow),this.rb.push(a),setTimeout(function(){b.Ea()},this.za)):this.U=j},T:function(a){var b=/^---destpub-to-parent---/;"string"==typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===b[0]&&(this.oa="true"===b[1]?i:j,this.Ca=i,this.t()),this.sb.push(a))},vb:function(a){(this.url===g||a.subdomain&&"nosubdomainreturned"===this.g)&&(this.g="string"==typeof c.ka&&c.ka.length?c.ka:a.subdomain||"",this.url=this.jb()),a.ibs instanceof Array&&a.ibs.length&&(this.ta=i),this.Ba()&&(c.idSyncAttachIframeOnWindowLoad?(e.X||"complete"===f.readyState||"loaded"===f.readyState)&&this.N():this.Za()),"function"==typeof c.idSyncIDCallResult?c.idSyncIDCallResult(a):this.t(a),"function"==typeof c.idSyncAfterIDCallResult&&c.idSyncAfterIDCallResult(a)},$a:function(a,b){return c.Hb||!a||b-a>x.Ia},Za:function(){function a(){b.V||(document.body?b.N():setTimeout(a,30))}var b=this;a()}};c.Eb=A,c.timeoutMetricsLog=[];var B={cb:window.performance&&window.performance.timing?1:0,Aa:window.performance&&window.performance.timing?window.performance.timing:g,W:g,O:g,d:{},R:[],send:function(a){if(c.takeTimeoutMetrics&&a===Object(a)){var b,d=[],e=encodeURIComponent;for(b in a)a.hasOwnProperty(b)&&d.push(e(b)+"="+e(a[b]));a="http"+(c.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+c.version+"&d_visid_stg_timeout="+c.loadTimeout+"&"+d.join("&")+"&d_orgid="+e(c.marketingCloudOrgID)+"&d_timingapi="+this.cb+"&d_winload="+this.kb()+"&d_ld="+this.o(),(new Image).src=a,c.timeoutMetricsLog.push(a)}},kb:function(){return this.O===g&&(this.O=this.Aa?this.W-this.Aa.navigationStart:this.W-e.bb),this.O},o:function(){return(new Date).getTime()},I:function(a){var b=this.d[a],c={};c.d_visid_stg_timeout_captured=b.sa,c.d_visid_cors=b.ra,c.d_fieldgroup=a,c.d_settimeout_overriden=b.qa,b.timeout?b.mb?(c.d_visid_timedout=1,c.d_visid_timeout=b.timeout-b.requestStart,c.d_visid_response=-1):(c.d_visid_timedout="n/a",c.d_visid_timeout="n/a",c.d_visid_response="n/a"):(c.d_visid_timedout=0,c.d_visid_timeout=-1,c.d_visid_response=b.zb-b.requestStart),c.d_visid_url=b.url,e.X?this.send(c):this.R.push(c),delete this.d[a]},yb:function(){for(var a=0,b=this.R.length;b>a;a++)this.send(this.R[a])},wa:function(){return"function"==typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};c.Lb=B;var C={isClientSideMarketingCloudVisitorID:g,MCIDCallTimedOut:g,AnalyticsIDCallTimedOut:g,AAMIDCallTimedOut:g,d:{},Fa:function(a,b){switch(a){case k:b===j?this.MCIDCallTimedOut!==i&&(this.MCIDCallTimedOut=j):this.MCIDCallTimedOut=b;break;case r:b===j?this.AnalyticsIDCallTimedOut!==i&&(this.AnalyticsIDCallTimedOut=j):this.AnalyticsIDCallTimedOut=b;break;case t:b===j?this.AAMIDCallTimedOut!==i&&(this.AAMIDCallTimedOut=j):this.AAMIDCallTimedOut=b}}};c.isClientSideMarketingCloudVisitorID=function(){return C.isClientSideMarketingCloudVisitorID},c.MCIDCallTimedOut=function(){return C.MCIDCallTimedOut},c.AnalyticsIDCallTimedOut=function(){return C.AnalyticsIDCallTimedOut},c.AAMIDCallTimedOut=function(){return C.AAMIDCallTimedOut},c.idSyncGetOnPageSyncInfo=function(){return c.f(),c.a(o)},0>a.indexOf("@")&&(a+="@AdobeOrg"),c.marketingCloudOrgID=a,c.cookieName="AMCV_"+a,c.sessionCookieName="AMCVS_"+a,c.cookieDomain=c.Pa(),c.cookieDomain==d.location.hostname&&(c.cookieDomain=""),c.loadSSL=0<=d.location.protocol.toLowerCase().indexOf("https"),c.loadTimeout=3e4,c.CORSErrors=[],c.marketingCloudServer=c.audienceManagerServer="dpm.demdex.net";var D={};if(D[u]=i,D[v]=i,c.Ma(),b&&"object"==typeof b){for(var E in b)!Object.prototype[E]&&(c[E]=b[E]);c.idSyncContainerID=c.idSyncContainerID||0,c.f(),z=c.a(p),E=Math.ceil((new Date).getTime()/x.$),!c.idSyncDisableSyncs&&A.$a(z,E)&&(c.j(v,-1),c.e(p,E)),c.getMarketingCloudVisitorID(),c.getAudienceManagerLocationHint(),c.getAudienceManagerBlob(),c.Ta(c.serverState)}if(!c.idSyncDisableSyncs){A.ab(),y.M(window,"load",function(){e.X=i,B.W=B.o(),B.yb();var a=A;a.Ba()&&a.N()});try{c.la.T(function(a){A.T(a.data)},A.P)}catch(F){}}}Visitor.getInstance=function(a,b){var c,d,e=window.s_c_il;if(0>a.indexOf("@")&&(a+="@AdobeOrg"),e)for(d=0;d<e.length;d++)if((c=e[d])&&"Visitor"==c._c&&c.marketingCloudOrgID==a)return c;return new Visitor(a,b)},function(){function a(){b.X=c}var b=window.Visitor,c=b.La,d=b.Ja;c||(c=!0),d||(d=!1),window.addEventListener?window.addEventListener("load",a):window.attachEvent&&window.attachEvent("onload",a),b.bb=(new Date).getTime()}();