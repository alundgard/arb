/*! updated; 02-19-2018 09:01 AM */

Modulr.define("FOX_PLUGINS:NewslettersForm",["jquery"],function($){var CONST={};CONST.SLID={FB_Breaking_Alerts:"5C84B893BD6D939E84FAE1A8E6E9525A",FB_CEO_Newsbrief:"3DC725E303A24F8D870B96401050B31F",FB_Morning_Headlines:"3DC725E303A24F8D518A0FB222399489",FB_Most_Popular_Content:"3DC725E303A24F8D39740C7B45D15F45",FB_Small_Business_Weekly_Report:"3DC725E303A24F8D3540B4B6FB335FC8",FB_Stock_Alerts:"",FB_The_Willis_Report_Promotional:"3DC725E303A24F8D5E4CD875B68955A6",FB_Weekly_Personal_Finance:"3DC725E303A24F8D7E5F3A553E2E6154",FB_Claman_On_Call:"3DC725E303A24F8D12785ABB73469705",FN_Autos:"3DC725E303A24F8D197DA3C8590F80E2",FN_Breaking_Alerts:"C2F278094FACCEA62391025B7A52D8EB",FN_Food_And_Drink:"3DC725E303A24F8D1C12D1E24CDEA25E",FN_FOX_411_Newsletter:"3DC725E303A24F8D9C92271F5026F381",FN_FOX_411_Partner_Pitch_Email:"3DC725E303A24F8DD2821C1AF73D49D4",FN_Health_Newsletter:"3DC725E303A24F8DA5DBC7FFD49BC2B8",FN_Leisure_Headlines:"3DC725E303A24F8D02B1F9D9AAF16982",FN_Monthly_Politics_Update:"3DC725E303A24F8D836CEAE9B885C87D",FN_Morning_Headlines:"3DC725E303A24F8DCF015F07C61BABFD",FN_Most_Popular:"3DC725E303A24F8DB05092D232355E43",FN_Opinion_Headlines:"3DC725E303A24F8D95ACD1C9C0564C20",FN_Politics:"3DC725E303A24F8DA102192D9D5143D9",FN_Promotional_Emails:"3DC725E303A24F8D41CEA8699C0FE71E",FN_Science_And_Technology:"3DC725E303A24F8DAB69E1C048904762",FN_Weekly_Travel:"3DC725E303A24F8DE5173CCC4F027046",Fox_Nation_Fired_Up:"3DC725E303A24F8D64B4C05965F09E1A",uReport_Launch_Email:"3DC725E303A24F8D41CEA8699C0FE71E",uReport_Monthly:"3DC725E303A24F8D41CEA8699C0FE71E",FN_Latino_Morning_Headlines:"3DC725E303A24F8D555BC7C7F3FD748B"},CONST.defaultStr="Enter Email Address";var App=function(config){var self=this,elm=config.elm;self._elm=elm,self._SLID=config.SLID?config.SLID:elm.find("input[type='hidden'][name='slid']").val(),self._INPUT=config.INPUT?config.INPUT:elm.find("input[type='text'][name='signup']"),self._INPUT_STR=config.INPUT_STR?config.INPUT_STR:CONST.defaultStr,self._onSuccess="function"==typeof config.onSuccess?config.onSuccess:function(){},self._onError="function"==typeof config.onError?config.onError:function(){},self._onFocus="function"==typeof config.onFocus?config.onFocus:function(){},self._onBlur="function"==typeof config.onBlur?config.onBlur:function(){},"3DC725E303A24F8D9C92271F5026F381"===self._SLID&&(self._INPUT_STR="Enter your email address"),self._INPUT.val(self._INPUT_STR),setFocus(self._INPUT,self._INPUT_STR,self._onFocus,self._onBlur),elm.submit(function(){return self.submit(),!1})};App.prototype.submit=function(){var self=this;if(self._submitting)return!1;self._submitting=!0;var elm=self._elm,email=self._INPUT.val().trim(),SLID=self._SLID,valid=isValidEmail(email);if(valid&&SLID)self._onSuccess(),sendSubscription(email,SLID,elm);else{var err=valid?"slid":"email";self._onError(err)}return setTimeout(function(){self._submitting=!1},500),!1};var setFocus=function(input,str,onFocus,onBlur){input.focus(function(){var val=$(this).val();$.trim(val.toLowerCase())===str.toLowerCase()&&$(this).val(""),onFocus()}),input.blur(function(){var val=$(this).val();""===$.trim(val.toLowerCase())&&$(this).val(str),onBlur()})},sendSubscription=function(email,SLID,elm){var list=elm.attr("data-list")||"email-sign-up-success";$.ajax({type:"POST",url:"/portal/newsalertsubscribe",data:{slids:SLID,email:email,format:"html"},dataType:"text"}).done(function(){$.ad&&$.ad.track({"email-sign-up-success":{listName:list}})})},isValidEmail=function(email){var pattern=/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/i;return pattern.test(email)?!0:!1};return App});