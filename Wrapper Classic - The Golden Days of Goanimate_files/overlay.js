var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function grayOut(C,I,A){if(I==undefined){if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ajax/overlay/demo/"+C)}}else{if(I!="showPleaseWait"&&I!="showAlertBox"&&I!="showConfirmBox"&&I!="showInputBox"&&I!="showProgressBox"){if(typeof pageTracker!="undefined"&&pageTracker){if(I=="showEmailContact"&&view_name=="go"){pageTracker._trackPageview("/pageTracker/ajax/iframe/"+I+"/"+C)}else{pageTracker._trackPageview("/pageTracker/ajax/overlay/"+I+"/"+C)}}}}var J=document.getElementById("darkenScreenObject");var H=$("overlayObject");if(C){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var L=document.body.scrollWidth+30+"px";var G=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var L=document.body.offsetWidth+"px";var G=document.body.offsetHeight+"px"}else{var L="100%";var G="100%"}}J.style.width=L;J.style.height=G;J.style.display="block";H.style.display="block";if(Prototype.Browser.IE){var D=document.body.offsetWidth}else{var D=window.innerWidth}var E=650;var K=(D-H.clientWidth)/2;if(A==undefined){H.style.left=K>0?(K+"px"):"0px"}else{K+=A;H.style.left=K>0?(K+"px"):"0px"}var F=(E-H.clientHeight)/2;H.style.top=F>0?(F+"px"):"0px"}else{J.style.display="none";H.style.display="none";var B=H.innerHTML;H.innerHTML="";H.innerHTML=B;window.onResize=""}}function grayOut2(B,H){var I=document.getElementById("darkenScreenObject");var G=$("overlayObject2");if(B){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var K=document.body.scrollWidth+30+"px";var F=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var K=document.body.offsetWidth+"px";var F=document.body.offsetHeight+"px"}else{var K="100%";var F="100%"}}I.style.width=K;I.style.height=F;I.style.display="block";G.style.display="block";if(Prototype.Browser.IE){var C=document.body.offsetWidth}else{var C=window.innerWidth}var D=650;var J=(C-G.clientWidth)/2;G.style.left=J>0?(J+"px"):"0px";var E=(D-G.clientHeight)/2;G.style.top=E>0?(E+"px"):"0px"}else{I.style.display="none";G.style.display="none";var A=G.innerHTML;G.innerHTML="";G.innerHTML=A;window.onResize=""}}function grayOutPreview(C,I,A){if(I==undefined){if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ajax/overlay/demo/"+C)}}else{if(I!="showPleaseWait"&&I!="showAlertBox"&&I!="showConfirmBox"&&I!="showInputBox"&&I!="showProgressBox"){if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ajax/overlay/"+I+"/"+C)}}}var J=document.getElementById("darkenScreenObject");var H=$("overlayObjectPreview");if(C){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var L=document.body.scrollWidth+30+"px";var G=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var L=document.body.offsetWidth+"px";var G=document.body.offsetHeight+"px"}else{var L="100%";var G="100%"}}J.style.width=L;J.style.height=G;J.style.display="block";H.style.display="block";if(Prototype.Browser.IE){var D=document.body.offsetWidth}else{var D=window.innerWidth}var E=650;var K=(D-H.clientWidth)/2;if(A==undefined){H.style.left=K>0?(K+"px"):"0px"}else{K+=A;H.style.left=K>0?(K+"px"):"0px"}var F=(E-H.clientHeight)/2;H.style.top=F>0?(F+"px"):"0px"}else{J.style.display="none";H.style.display="none";var B=H.innerHTML;H.innerHTML="";H.innerHTML=B;window.onResize=""}}function grayOutGlobal(C,I,A){if(I==undefined){if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ajax/overlay/demo/"+C)}}else{if(I!="showPleaseWait"&&I!="showAlertBox"&&I!="showConfirmBox"&&I!="showProgressBox"&&I!="DoNotLog"){if(typeof pageTracker!="undefined"&&pageTracker){pageTracker._trackPageview("/pageTracker/ajax/overlay/"+I+"/"+C)}}}var J=document.getElementById("darkenScreenObject");var H=$("overlayObjectGlobal");if(C){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var L=document.body.scrollWidth+30+"px";var G=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var L=document.body.offsetWidth+"px";var G=document.body.offsetHeight+"px"}else{var L="100%";var G="100%"}}J.style.width=L;J.style.height=G;J.style.display="block";H.style.display="block";if(Prototype.Browser.IE){var D=document.body.offsetWidth}else{var D=window.innerWidth}var E=650;var K=(D-H.clientWidth)/2;if(A==undefined){H.style.left=K>0?(K+"px"):"0px"}else{K+=A;H.style.left=K>0?(K+"px"):"0px"}var F=(E-H.clientHeight)/2;H.style.top=F>0?(F+"px"):"0px"}else{J.style.display="none";H.style.display="none";var B=H.innerHTML;H.innerHTML="";H.innerHTML=B;window.onResize=""}}function reloadNow(A){var G=document.getElementById("darkenScreenObject");if(G&&G.style.display!="none"){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var I=document.body.scrollWidth+30+"px";var E=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var I=document.body.offsetWidth+"px";var E=document.body.offsetHeight+"px"}else{var I="100%";var E="100%"}}G.style.width=I;G.style.height=E}var F=$("overlayObject");if(F&&F.style.display!="none"){if(Prototype.Browser.IE){var B=document.body.offsetWidth}else{var B=window.innerWidth}var C=650;var H=(B-F.clientWidth)/2;if(A==undefined){F.style.left=H>0?(H+"px"):"0px"}else{H+=A;F.style.left=H>0?(H+"px"):"0px"}var D=(C-F.clientHeight)/2;F.style.top=D>0?(D+"px"):"0px"}}function reloadNow2(){var E=document.getElementById("darkenScreenObject");if(E&&E.style.display!="none"){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var C=document.body.scrollWidth+30+"px";var F=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var C=document.body.offsetWidth+"px";var F=document.body.offsetHeight+"px"}else{var C="100%";var F="100%"}}E.style.width=C;E.style.height=F}var D=$("overlayObject2");if(D.style.display!="none"){if(Prototype.Browser.IE){var H=document.body.offsetWidth}else{var H=window.innerWidth}var G=650;var B=(H-D.clientWidth)/2;D.style.left=B>0?(B+"px"):"0px";var A=(G-D.clientHeight)/2;D.style.top=A>0?(A+"px"):"0px"}}function reloadNowGlobal(A){var G=document.getElementById("darkenScreenObject");if(G&&G.style.display!="none"){if(document.body&&(document.body.scrollWidth||document.body.scrollHeight)){var I=document.body.scrollWidth+30+"px";var E=document.body.scrollHeight+30+"px"}else{if(document.body.offsetWidth){var I=document.body.offsetWidth+"px";var E=document.body.offsetHeight+"px"}else{var I="100%";var E="100%"}}G.style.width=I;G.style.height=E}var F=$("overlayObjectGlobal");if(F&&F.style.display!="none"){if(Prototype.Browser.IE){var B=document.body.offsetWidth}else{var B=window.innerWidth}var C=650;var H=(B-F.clientWidth)/2;if(A==undefined){F.style.left=H>0?(H+"px"):"0px"}else{H+=A;F.style.left=H>0?(H+"px"):"0px"}var D=(C-F.clientHeight)/2;F.style.top=D>0?(D+"px"):"0px"}}var t;function countDown(B,A){$("transferLink").href="javascript:cancelTransfer();$('"+B+"').submit();";$("transfer_sec").innerHTML=A;A=A-1;if(A>=0){t=setTimeout("countDown('"+B+"',"+A+")",1000)}else{$(B).submit()}}function cancelTransfer(){clearTimeout(t)}function hideObject(B){var A=$("overlayObject"+B);A.style.display="none"}function ssShowPreviewOverlay(C,D,B){var A=currPos();B=A[1];$("overlaySSPreviewBoxTitle").innerHTML=(D===""?"&nbsp;":D);$("overlaySSPreviewBox").style.display="block";$("overlayObject").style.margin=B+"px 0px 0px 0px";jQuery("#ss-home-usethisbtn_button").click(function(){ssChooseTemplate(C,true)});jQuery("#ss-home-preview-demo").attr("src","/static/"+view_name+"/tutorial/slideshow/demo_"+C+".html");grayOut(true,"slideshow/previewdemo/"+C+"/true")}function showPreviewOverlay(B,C,A){A-=100;$("overlaySSPreviewBoxTitle").innerHTML=(C===""?"&nbsp;":C);$("overlaySSPreviewBox").style.display="block";$("overlayObject").style.margin=A+"px 0px 0px 0px";$("ss-home-usethisbtn-a").href="javascript:ssChooseTemplate('"+B+"', true)";$("ss-home-preview-demo").src="/static/"+view_name+"/tutorial/slideshow/demo_"+B+".html";grayOut(true,"slideshow/previewdemo/"+B+"/true")}function showSoundTutorial(){grayOut(true,"studio/soundtutorial/true")}function ssHidePreviewOverlay(){grayOut(false,"slideshow/previewdemo/false");$("overlaySSPreviewBox").style.display="none"}var emsg_overlay_url="";function previewMovieOverlay(C,D,A){previewMovie(C);if(A=="emessage"){$("emsg_link").show();emsg_overlay_url="/go/studio/copyemessage/"+C}else{if(A=="cn"){$("msg_link").href="javascript:hidePreviewMovieOverlay();showUpdatePhone(250,true);";$("phone_ch").value=C}else{$("emsg_link").hide()}}var B=currPos();$("overlayPreviewBoxTitle").innerHTML=(D===""?"&nbsp;":D);$("overlayPreviewBox").style.display="block";$("overlayObjectPreview").style.margin=B[1]+"px 0px 0px 0px";grayOutPreview(true,"movie/preview/"+C+"/true")}function gotoPreviewURL(){location.href=emsg_overlay_url}function hidePreviewMovieOverlay(){grayOutPreview(false,"movie/preview/false");$("overlayPreviewBox").style.display="none"}function previewYouTubeOverlay(F,B,C,E){var D=currPos();$("overlayObjectGlobal").style.width="700px";$("overlayObjectGlobal").style.height="530px";$("OG_title").innerHTML=(F===""?"&nbsp;":F);$("overlayGeneral").style.margin=D[1]+"px 0px 0px 0px";$("overlayGeneral").style.display="block";if(typeof C=="undefined"){$("tracker_id").innerHTML="Cartoon_Software/youtube_demo"}else{$("tracker_id").innerHTML=C}grayOutGlobal(true,$("tracker_id").innerHTML);var A='<div id="OG_content_child" style="padding:10px 10px 0;height:409px"></div>';if(typeof E=="undefined"||!E){$("OG_content").innerHTML=A+'<div style="padding:10px 10px 0;width:680px;"><div class="centeredentity"><ul class="centeredentity_ul"><li class="centeredentity_ul_li"><div onclick="javascript:hideOG();showBizSignup(250);" onmouseout="javascript:buttonOut(this.id);" onmouseover="javascript:buttonOver(this.id, -40);" style="overflow: hidden; height: 40px; cursor: pointer; float: left;" id="youtube_signup_btn"><ol style="margin: 0px;"><li style="margin: 0pt; float: left; display: block; height: 80px;" id="youtube_signup_btnleft"><img width="10" height="80" onload="javascript:iePngFix(this, 10, 80);" src="/static/go/img/buttons/green/btn_green_80_left.png"/></li><li style="padding: 5px 5px 0px; background: transparent url(/static/go/img/buttons/green/btn_green_80_mid.gif) repeat-x scroll 0pt 0pt; float: left; display: block; height: 80px;" id="youtube_signup_btncenterinactive"><span style="color:white;font-size:20px;line-height:30px;vertical-align:top;font-weight:normal;">'+GT.gettext("Sign up now")+'</span></li><li style="padding: 5px 5px 0px; background: transparent url(/static/go/img/buttons/green/btn_green_80_mid.gif) repeat-x scroll 0pt -40px; float: left; display: none; height: 80px;" id="youtube_signup_btncenteractive"><span style="color:white;font-size:20px;line-height:30px;vertical-align:top;font-weight:normal;">'+GT.gettext("Sign up now")+'</span></li><li style="margin: 0pt; float: left; display: block; height: 80px;" id="youtube_signup_btnright"><img width="10" height="80" onload="javascript:iePngFix(this, 10, 80);" src="/static/go/img/buttons/green/btn_green_80_right.png"/></li></ol></div></li></ul></div></div>'}else{$("OG_content").innerHTML=A}jQuery("#OG_content_child").flash({id:"ga_demo_video",swf:B,height:409,width:680,allowFullScreen:"true",allowScriptAccess:"always",wmode:"transparent"})}function hideOG(){var A=$("tracker_id").innerHTML;grayOutGlobal(false,A);$("overlayObjectGlobal").style.width="550px";$("OG_content").style.padding="0px"}function showProcessing(C,B){var A=currPos();A[1]+=150;$("overlayObjectGlobal").style.width="700px";$("overlayObjectGlobal").style.height="530px";$("OG_title").innerHTML=(C===""?"&nbsp;":C);$("overlayGeneral").style.margin=A[1]+"px 0px 0px 0px";$("overlayGeneral").style.display="block";$("OG_close_btn").style.display="none";grayOutGlobal(true,"DoNotLog");$("OG_content").innerHTML=B}function hideProcessing(){grayOutGlobal(false,"DoNotLog");$("OG_content").innerHTML=""}var overlayManager=(function(){var A=[];var B=false;function C(){if(A.length){var D=A.shift();if(typeof D=="function"){D.apply()}else{jQuery.blockUI(D);blockUICenterX()}}}return{append:function(D){A.push(D)},prepend:function(D){A.unshift(D)},start:function(){if(B){return }B=true;C()},next:function(){jQuery.unblockUI();if(A.length){setTimeout(C,500)}}}})();if(typeof jQuery=="function"&&jQuery){jQuery(document).ready(function(){overlayManager.start()})};

}
/*
     FILE ARCHIVED ON 19:31:24 Jun 10, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:48:24 Mar 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 193.268
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.053
  cdx.remote: 0.051
  esindex: 0.009
  LoadShardBlock: 154.109 (3)
  PetaboxLoader3.datanode: 104.15 (4)
  load_resource: 103.06
  PetaboxLoader3.resolve: 80.355
*/