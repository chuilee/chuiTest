/*!
 * fullPage 2.7.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */

(function(e,t){"use strict";typeof define=="function"&&define.amd?define(["jquery"],function(n){return t(n,e,e.document,e.Math)}):typeof exports!="undefined"?module.exports=t(require("jquery"),e,e.document,e.Math):t(jQuery,e,e.document,e.Math)})(typeof window!="undefined"?window:this,function(e,t,n,r,i){"use strict";var s="fullpage-wrapper",o="."+s,u="fp-scrollable",a="."+u,f=".slimScrollBar",l=".slimScrollRail",c="fp-responsive",h="fp-notransition",p="fp-destroyed",d="fp-enabled",v="fp-viewing",m="active",g="."+m,y=".section",b="fp-section",w="."+b,E=w+g,S=w+":first",x=w+":last",T="fp-tableCell",N="."+T,C="fp-auto-height",k=".fp-auto-height",L="fp-nav",A="#"+L,O="fp-tooltip",M="fp-show-active",_=".slide",D="fp-slide",P="."+D,H=P+g,B="fp-slides",j="."+B,F="fp-slidesContainer",I="."+F,q="fp-table",R="fp-slidesNav",U="."+R,z=U+" a",W="fp-controlArrow",X="."+W,V="fp-prev",$="."+V,J=W+" "+V,K=X+$,Q="fp-next",G="."+Q,Y=W+" "+Q,Z=X+G,et=e(t),tt=e(n),nt;e.fn.fullpage=function(u){function bt(){u.css3&&(u.css3=Dn()),u.anchors.length||(u.anchors=e(u.sectionSelector+"[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),wt(),l.setAllowScrolling(!0),G=et.height(),l.setAutoScrolling(u.autoScrolling,"internal");var t=e(E).find(H);t.length&&(e(E).index(w)!==0||e(E).index(w)===0&&t.index()!==0)&&qn(t),cn(),_n(),et.on("load",function(){tn()})}function wt(){Q.css({height:"100%",position:"relative"}),Q.addClass(s),e("html").addClass(d),Q.removeClass(p),Tt(),e(w).each(function(t){var n=e(this),r=n.find(P),i=r.length;St(n,t),xt(n,t),i>0?Et(n,r,i):u.verticalCentered&&En(n)}),u.fixedElements&&u.css3&&e(u.fixedElements).appendTo(f),u.navigation&&Ct(),u.scrollOverflow?(n.readyState==="complete"&&kt(),et.on("load",kt)):Lt()}function Et(t,n,r){var i=r*100,s=100/r;n.wrapAll('<div class="'+F+'" />'),n.parent().wrap('<div class="'+B+'" />'),t.find(I).css("width",i+"%"),r>1&&(u.controlArrows&&Nt(t),u.slidesNavigation&&Ln(t,r)),n.each(function(t){e(this).css("width",s+"%"),u.verticalCentered&&En(e(this))});var o=t.find(H);o.length&&(e(E).index(w)!==0||e(E).index(w)===0&&o.index()!==0)?qn(o):n.eq(0).addClass(m)}function St(t,n){!n&&e(E).length===0&&t.addClass(m),t.css("height",G+"px"),u.paddingTop&&t.css("padding-top",u.paddingTop),u.paddingBottom&&t.css("padding-bottom",u.paddingBottom),typeof u.sectionsColor[n]!="undefined"&&t.css("background-color",u.sectionsColor[n]),typeof u.anchors[n]!="undefined"&&t.attr("data-anchor",u.anchors[n])}function xt(t,n){typeof u.anchors[n]!="undefined"&&t.hasClass(m)&&gn(u.anchors[n],n),u.menu&&u.css3&&e(u.menu).closest(o).length&&e(u.menu).appendTo(f)}function Tt(){e(u.sectionSelector).each(function(){e(this).addClass(b)}),e(u.slideSelector).each(function(){e(this).addClass(D)})}function Nt(e){e.find(j).after('<div class="'+J+'"></div><div class="'+Y+'"></div>'),u.controlArrowColor!="#fff"&&(e.find(Z).css("border-color","transparent transparent transparent "+u.controlArrowColor),e.find(K).css("border-color","transparent "+u.controlArrowColor+" transparent transparent")),u.loopHorizontal||e.find(K).hide()}function Ct(){f.append('<div id="'+L+'"><ul></ul></div>');var t=e(A);t.addClass(function(){return u.showActiveTooltip?M+" "+u.navigationPosition:u.navigationPosition});for(var n=0;n<e(w).length;n++){var r="";u.anchors.length&&(r=u.anchors[n]);var i='<li><a href="#'+r+'"><span></span></a>',s=u.navigationTooltips[n];typeof s!="undefined"&&s!==""&&(i+='<div class="'+O+" "+u.navigationPosition+'">'+s+"</div>"),i+="</li>",t.find("ul").append(i)}e(A).css("margin-top","-"+e(A).height()/2+"px"),e(A).find("li").eq(e(E).index(w)).find("a").addClass(m)}function kt(){e(w).each(function(){var t=e(this).find(P);t.length?t.each(function(){wn(e(this))}):wn(e(this))}),Lt()}function Lt(){var t=e(E);u.scrollOverflowHandler.afterRender&&u.scrollOverflowHandler.afterRender(t),Gt(t),Yt(t),e.isFunction(u.afterLoad)&&u.afterLoad.call(t,t.data("anchor"),t.index(w)+1),e.isFunction(u.afterRender)&&u.afterRender.call(Q)}function Ot(){var t;if(!u.autoScrolling||u.scrollBar){var i=et.scrollTop(),s=0,o=r.abs(i-n.querySelectorAll(w)[0].offsetTop),a=n.querySelectorAll(w);for(var f=0;f<a.length;++f){var l=a[f],c=r.abs(i-l.offsetTop);c<o&&(s=f,o=c)}t=e(a).eq(s);if(!t.hasClass(m)&&!t.hasClass(C)){At=!0;var h=e(E),p=h.index(w)+1,d=yn(t),v=t.data("anchor"),g=t.index(w)+1,y=t.find(H);if(y.length)var b=y.data("anchor"),S=y.index();ut&&(t.addClass(m).siblings().removeClass(m),e.isFunction(u.onLeave)&&u.onLeave.call(h,p,g,d),e.isFunction(u.afterLoad)&&u.afterLoad.call(t,v,g),Gt(t),gn(v,g-1),u.anchors.length&&(st=v,An(S,b,v,g))),clearTimeout(mt),mt=setTimeout(function(){At=!1},100)}u.fitToSection&&(clearTimeout(gt),gt=setTimeout(function(){ut&&u.fitToSection&&(e(E).is(t)&&requestAnimFrame(function(){rt=!0}),Xt(t),requestAnimFrame(function(){rt=!1}))},u.fitToSectionDelay))}}function Mt(e,t){if(!ct.m[e])return;var n,r;e=="down"?(n="bottom",r=l.moveSectionDown):(n="top",r=l.moveSectionUp);if(t.length>0){if(!u.scrollOverflowHandler.isScrolled(n,t))return!0;r()}else r()}function Bt(n){var i=n.originalEvent;if(!jt(n.target)&&Ft(i)){u.autoScrolling&&n.preventDefault();var s=e(E),o=u.scrollOverflowHandler.scrollable(s);if(ut&&!k){var a=In(i);Pt=a.y,Ht=a.x,s.find(j).length&&r.abs(Dt-Ht)>r.abs(_t-Pt)?r.abs(Dt-Ht)>t.outerWidth/100*u.touchSensitivity&&(Dt>Ht?ct.m.right&&l.moveSlideRight():ct.m.left&&l.moveSlideLeft()):u.autoScrolling&&r.abs(_t-Pt)>et.height()/100*u.touchSensitivity&&(_t>Pt?Mt("down",o):Pt>_t&&Mt("up",o))}}}function jt(t,n){n=n||0;var r=e(t).parent();return n<u.normalScrollElementTouchThreshold&&r.is(u.normalScrollElements)?!0:n==u.normalScrollElementTouchThreshold?!1:jt(r,++n)}function Ft(e){return typeof e.pointerType=="undefined"||e.pointerType!="mouse"}function It(e){var t=e.originalEvent;u.fitToSection&&a.stop();if(Ft(t)){var n=In(t);_t=n.y,Dt=n.x}}function qt(e,t){var n=0,i=e.slice(r.max(e.length-t,1));for(var s=0;s<i.length;s++)n+=i[s];return r.ceil(n/t)}function Ut(n){var i=(new Date).getTime();if(u.autoScrolling&&!lt){n=n||t.event;var s=n.wheelDelta||-n.deltaY||-n.detail,o=r.max(-1,r.min(1,s)),f=typeof n.wheelDeltaX!="undefined"||typeof n.deltaX!="undefined",l=r.abs(n.wheelDeltaX)<r.abs(n.wheelDelta)||r.abs(n.deltaX)<r.abs(n.deltaY)||!f;at.length>149&&at.shift(),at.push(r.abs(s)),u.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var c=e(E),h=u.scrollOverflowHandler.scrollable(c),p=i-Rt;Rt=i,p>200&&(at=[]);if(ut){var d=qt(at,10),v=qt(at,70),m=d>=v;m&&l&&(o<0?Mt("down",h):Mt("up",h))}return!1}u.fitToSection&&a.stop()}function zt(t,n){var r=typeof n=="undefined"?e(E):n,i=r.find(j),s=i.find(P).length;if(!i.length||k||s<2)return;var o=i.find(H),a=null;t==="prev"?a=o.prev(P):a=o.next(P);if(!a.length){if(!u.loopHorizontal)return;t==="prev"?a=o.siblings(":last"):a=o.siblings(":first")}k=!0,an(i,a)}function Wt(){e(H).each(function(){qn(e(this),"internal")})}function Xt(t,n,r){requestAnimFrame(function(){var i=t.position();if(typeof i=="undefined")return;var s=t.hasClass(C)&&i.top?i.top-G+t.height():i.top,o={element:t,callback:n,isMovementUp:r,dest:i,dtop:s,yMovement:yn(t),anchorLink:t.data("anchor"),sectionIndex:t.index(w),activeSlide:t.find(H),activeSection:e(E),leavingSection:e(E).index(w)+1,localIsResizing:rt};if(o.activeSection.is(t)&&!rt||u.scrollBar&&et.scrollTop()===o.dtop&&!t.hasClass(C))return;if(o.activeSlide.length)var a=o.activeSlide.data("anchor"),f=o.activeSlide.index();u.autoScrolling&&u.continuousVertical&&typeof o.isMovementUp!="undefined"&&(!o.isMovementUp&&o.yMovement=="up"||o.isMovementUp&&o.yMovement=="down")&&(o=Jt(o));if(e.isFunction(u.onLeave)&&!o.localIsResizing&&u.onLeave.call(o.activeSection,o.leavingSection,o.sectionIndex+1,o.yMovement)===!1)return;Zt(o.activeSection),t.addClass(m).siblings().removeClass(m),Gt(t),ut=!1,An(f,a,o.anchorLink,o.sectionIndex),Vt(o),st=o.anchorLink,gn(o.anchorLink,o.sectionIndex)})}function Vt(t){if(u.css3&&u.autoScrolling&&!u.scrollBar){var n="translate3d(0px, -"+t.dtop+"px, 0px)";xn(n,!0),u.scrollingSpeed?dt=setTimeout(function(){Qt(t)},u.scrollingSpeed):Qt(t)}else{var r=$t(t);e(r.element).animate(r.options,u.scrollingSpeed,u.easing).promise().done(function(){Qt(t)})}}function $t(e){var t={};return u.autoScrolling&&!u.scrollBar?(t.options={top:-e.dtop},t.element=o):(t.options={scrollTop:e.dtop},t.element="html, body"),t}function Jt(t){return t.isMovementUp?e(E).before(t.activeSection.nextAll(w)):e(E).after(t.activeSection.prevAll(w).get().reverse()),Rn(e(E).position().top),Wt(),t.wrapAroundElements=t.activeSection,t.dest=t.element.position(),t.dtop=t.dest.top,t.yMovement=yn(t.element),t}function Kt(t){if(!t.wrapAroundElements||!t.wrapAroundElements.length)return;t.isMovementUp?e(S).before(t.wrapAroundElements):e(x).after(t.wrapAroundElements),Rn(e(E).position().top),Wt()}function Qt(t){Kt(t),t.element.find(".fp-scrollable").mouseover(),e.isFunction(u.afterLoad)&&!t.localIsResizing&&u.afterLoad.call(t.element,t.anchorLink,t.sectionIndex+1),Yt(t.element),ut=!0,e.isFunction(t.callback)&&t.callback.call(this)}function Gt(t){var t=en(t);t.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function Yt(t){var t=en(t);t.find("video, audio").each(function(){var t=e(this).get(0);t.hasAttribute("autoplay")&&typeof t.play=="function"&&t.play()})}function Zt(t){var t=en(t);t.find("video, audio").each(function(){var t=e(this).get(0);!t.hasAttribute("data-ignore")&&typeof t.pause=="function"&&t.pause()})}function en(t){var n=t.find(H);return n.length&&(t=e(n)),t}function tn(){var e=t.location.hash.replace("#","").split("/"),n=e[0],r=e[1];n&&(u.animateAnchor?Cn(n,r):l.silentMoveTo(n,r))}function nn(){if(!At&&!u.lockAnchors){var e=t.location.hash.replace("#","").split("/"),n=e[0],r=e[1],i=typeof st=="undefined",s=typeof st=="undefined"&&typeof r=="undefined"&&!k;n.length&&(n&&n!==st&&!i||s||!k&&ot!=r)&&Cn(n,r)}}function rn(t){clearTimeout(yt);var n=e(":focus");if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&u.keyboardScrolling&&u.autoScrolling){var r=t.which,i=[40,38,32,33,34];e.inArray(r,i)>-1&&t.preventDefault(),lt=t.ctrlKey,yt=setTimeout(function(){sn(t)},150)}}function sn(t){var n=t.shiftKey;switch(t.which){case 38:case 33:ct.k.up&&l.moveSectionUp();break;case 32:if(n&&ct.k.up){l.moveSectionUp();break};case 40:case 34:ct.k.down&&l.moveSectionDown();break;case 36:ct.k.up&&l.moveTo(1);break;case 35:ct.k.down&&l.moveTo(e(w).length);break;case 37:ct.k.left&&l.moveSlideLeft();break;case 39:ct.k.right&&l.moveSlideRight();break;default:return}}function un(e){ut&&(e.pageY<on?l.moveSectionUp():e.pageY>on&&l.moveSectionDown()),on=e.pageY}function an(t,n){var i=n.position(),s=n.index(),o=t.closest(w),a=o.index(w),f=o.data("anchor"),l=o.find(U),c=Mn(n),h=o.find(H),p=rt;if(u.onSlideLeave){var d=h.index(),v=bn(d,s);if(!p&&v!=="none"&&e.isFunction(u.onSlideLeave)&&u.onSlideLeave.call(h,f,a+1,d,v,s)===!1){k=!1;return}}Zt(h),n.addClass(m).siblings().removeClass(m),p||Gt(n),!u.loopHorizontal&&u.controlArrows&&(o.find(K).toggle(s!==0),o.find(Z).toggle(!n.is(":last-child"))),o.hasClass(m)&&An(s,c,f,a);var y=function(){p||e.isFunction(u.afterSlideLoad)&&u.afterSlideLoad.call(n,f,a+1,c,s),Yt(n),k=!1};if(u.css3){var b="translate3d(-"+r.round(i.left)+"px, 0px, 0px)";hn(t.find(I),u.scrollingSpeed>0).css(Un(b)),vt=setTimeout(function(){y()},u.scrollingSpeed,u.easing)}else t.animate({scrollLeft:r.round(i.left)},u.scrollingSpeed,u.easing,function(){y()});l.find(g).removeClass(m),l.find("li").eq(s).find("a").addClass(m)}function ln(){cn();if(W){var t=e(n.activeElement);if(!t.is("textarea")&&!t.is("input")&&!t.is("select")){var i=et.height();r.abs(i-fn)>20*r.max(fn,i)/100&&(l.reBuild(!0),fn=i)}}else clearTimeout(pt),pt=setTimeout(function(){l.reBuild(!0)},350)}function cn(){var e=u.responsive||u.responsiveWidth,n=u.responsiveHeight,r=e&&t.outerWidth<e,i=n&&et.height()<n;e&&n?l.setResponsive(r||i):e?l.setResponsive(r):n&&l.setResponsive(i)}function hn(e){var t="all "+u.scrollingSpeed+"ms "+u.easingcss3;return e.removeClass(h),e.css({"-webkit-transition":t,transition:t})}function pn(e){return e.addClass(h)}function dn(e,t){var n=825,i=900;if(e<n||t<i){var s=e*100/n,o=t*100/i,u=r.min(s,o),a=u.toFixed(2);f.css("font-size",a+"%")}else f.css("font-size","100%")}function vn(t,n){u.navigation&&(e(A).find(g).removeClass(m),t?e(A).find('a[href="#'+t+'"]').addClass(m):e(A).find("li").eq(n).find("a").addClass(m))}function mn(t){u.menu&&(e(u.menu).find(g).removeClass(m),e(u.menu).find('[data-menuanchor="'+t+'"]').addClass(m))}function gn(e,t){mn(e),vn(e,t)}function yn(t){var n=e(E).index(w),r=t.index(w);return n==r?"none":n>r?"up":"down"}function bn(e,t){return e==t?"none":e>t?"left":"right"}function wn(e){e.css("overflow","hidden");var t=u.scrollOverflowHandler,n=t.wrapContent(),r=e.closest(w),i=t.scrollable(e),s;i.length?s=t.scrollHeight(e):(s=e.get(0).scrollHeight,u.verticalCentered&&(s=e.find(N).get(0).scrollHeight));var o=G-parseInt(r.css("padding-bottom"))-parseInt(r.css("padding-top"));s>o?i.length?t.update(e,o):(u.verticalCentered?e.find(N).wrapInner(n):e.wrapInner(n),t.create(e,o)):t.remove(e),e.css("overflow","")}function En(e){e.addClass(q).wrapInner('<div class="'+T+'" style="height:'+Sn(e)+'px;" />')}function Sn(e){var t=G;if(u.paddingTop||u.paddingBottom){var n=e;n.hasClass(b)||(n=e.closest(w));var r=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"));t=G-r}return t}function xn(e,t){t?hn(Q):pn(Q),Q.css(Un(e)),setTimeout(function(){Q.removeClass(h)},10)}function Tn(t){var n=Q.find(w+'[data-anchor="'+t+'"]');return n.length||(n=e(w).eq(t-1)),n}function Nn(e,t){var n=t.find(j),r=n.find(P+'[data-anchor="'+e+'"]');return r.length||(r=n.find(P).eq(e)),r}function Cn(e,t){var n=Tn(e);typeof t=="undefined"&&(t=0),e!==st&&!n.hasClass(m)?Xt(n,function(){kn(n,t)}):kn(n,t)}function kn(e,t){if(typeof t!="undefined"){var n=e.find(j),r=Nn(t,e);r.length&&an(n,r)}}function Ln(e,t){e.append('<div class="'+R+'"><ul></ul></div>');var n=e.find(U);n.addClass(u.slidesNavPosition);for(var r=0;r<t;r++)n.find("ul").append('<li><a href="#"><span></span></a></li>');n.css("margin-left","-"+n.width()/2+"px"),n.find("li").first().find("a").addClass(m)}function An(e,t,n,r){var i="";u.anchors.length&&!u.lockAnchors&&(e?(typeof n!="undefined"&&(i=n),typeof t=="undefined"&&(t=e),ot=t,On(i+"/"+t)):typeof e!="undefined"?(ot=t,On(n)):On(n)),_n()}function On(e){if(u.recordHistory)location.hash=e;else if(W||$)history.replaceState(i,i,"#"+e);else{var n=t.location.href.split("#")[0];t.location.replace(n+"#"+e)}}function Mn(e){var t=e.data("anchor"),n=e.index();return typeof t=="undefined"&&(t=n),t}function _n(){var t=e(E),n=t.find(H),r=Mn(t),i=Mn(n),s=t.index(w),o=String(r);n.length&&(o=o+"-"+i),o=o.replace("/","-").replace("#","");var u=new RegExp("\\b\\s?"+v+"-[^\\s]+\\b","g");f[0].className=f[0].className.replace(u,""),f.addClass(v+"-"+o)}function Dn(){var e=n.createElement("p"),r,s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(e,null);for(var o in s)e.style[o]!==i&&(e.style[o]="translate3d(1px,1px,1px)",r=t.getComputedStyle(e).getPropertyValue(s[o]));return n.body.removeChild(e),r!==i&&r.length>0&&r!=="none"}function Pn(){n.addEventListener?(n.removeEventListener("mousewheel",Ut,!1),n.removeEventListener("wheel",Ut,!1),n.removeEventListener("MozMousePixelScroll",Ut,!1)):n.detachEvent("onmousewheel",Ut)}function Hn(){var e="",r;t.addEventListener?r="addEventListener":(r="attachEvent",e="on");var s="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==i?"mousewheel":"DOMMouseScroll";s=="DOMMouseScroll"?n[r](e+"MozMousePixelScroll",Ut,!1):n[r](e+s,Ut,!1)}function Bn(){if(W||$){var t=Fn();e(o).off("touchstart "+t.down).on("touchstart "+t.down,It),e(o).off("touchmove "+t.move).on("touchmove "+t.move,Bt)}}function jn(){if(W||$){var t=Fn();e(o).off("touchstart "+t.down),e(o).off("touchmove "+t.move)}}function Fn(){var e;return t.PointerEvent?e={down:"pointerdown",move:"pointermove"}:e={down:"MSPointerDown",move:"MSPointerMove"},e}function In(e){var t=[];return t.y=typeof e.pageY!="undefined"&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=typeof e.pageX!="undefined"&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,$&&Ft(e)&&u.scrollBar&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function qn(e,t){l.setScrollingSpeed(0,"internal"),typeof t!="undefined"&&(rt=!0),an(e.closest(j),e),typeof t!="undefined"&&(rt=!1),l.setScrollingSpeed(ht.scrollingSpeed,"internal")}function Rn(e){if(u.scrollBar)Q.scrollTop(e);else if(u.css3){var t="translate3d(0px, -"+e+"px, 0px)";xn(t,!1)}else Q.css("top",-e)}function Un(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function zn(e,t,n){switch(t){case"up":ct[n].up=e;break;case"down":ct[n].down=e;break;case"left":ct[n].left=e;break;case"right":ct[n].right=e;break;case"all":n=="m"?l.setAllowScrolling(e):l.setKeyboardScrolling(e)}}function Wn(){Rn(0),e(A+", "+U+", "+X).remove(),e(w).css({height:"","background-color":"",padding:""}),e(P).css({width:""}),Q.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),a.css({overflow:"",height:""}),e("html").removeClass(d),e.each(f.get(0).className.split(/\s+/),function(e,t){t.indexOf(v)===0&&f.removeClass(t)}),e(w+", "+P).each(function(){u.scrollOverflowHandler.remove(e(this)),e(this).removeClass(q+" "+m)}),pn(Q),Q.find(N+", "+I+", "+j).each(function(){e(this).replaceWith(this.childNodes)}),a.scrollTop(0);var t=[b,D,F];e.each(t,function(t,n){e("."+n).removeClass(n)})}function Xn(e,t,n){u[e]=t,n!=="internal"&&(ht[e]=t)}function Vn(){u.continuousVertical&&(u.loopTop||u.loopBottom)&&(u.continuousVertical=!1,$n("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),u.scrollBar&&u.scrollOverflow&&$n("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),u.continuousVertical&&u.scrollBar&&(u.continuousVertical=!1,$n("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(u.anchors,function(t,n){(e("#"+n).length||e('[name="'+n+'"]').length)&&$n("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function $n(e,t){console&&console[e]&&console[e]("fullPage: "+t)}var a=e("html, body"),f=e("body"),l=e.fn.fullpage;u=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:nt,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:y,slideSelector:_,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},u),Vn(),e.extend(e.easing,{easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n}}),e.extend(e.easing,{easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n}}),l.setAutoScrolling=function(t,n){Xn("autoScrolling",t,n);var r=e(E);u.autoScrolling&&!u.scrollBar?(a.css({overflow:"hidden",height:"100%"}),l.setRecordHistory(ht.recordHistory,"internal"),Q.css({"-ms-touch-action":"none","touch-action":"none"}),r.length&&Rn(r.position().top)):(a.css({overflow:"visible",height:"initial"}),l.setRecordHistory(!1,"internal"),Q.css({"-ms-touch-action":"","touch-action":""}),Rn(0),r.length&&a.scrollTop(r.position().top))},l.setRecordHistory=function(e,t){Xn("recordHistory",e,t)},l.setScrollingSpeed=function(e,t){Xn("scrollingSpeed",e,t)},l.setFitToSection=function(e,t){Xn("fitToSection",e,t)},l.setLockAnchors=function(e){u.lockAnchors=e},l.setMouseWheelScrolling=function(e){e?Hn():Pn()},l.setAllowScrolling=function(t,n){typeof n!="undefined"?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){zn(t,n,"m")})):t?(l.setMouseWheelScrolling(!0),Bn()):(l.setMouseWheelScrolling(!1),jn())},l.setKeyboardScrolling=function(t,n){typeof n!="undefined"?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){zn(t,n,"k")})):u.keyboardScrolling=t},l.moveSectionUp=function(){var t=e(E).prev(w);!t.length&&(u.loopTop||u.continuousVertical)&&(t=e(w).last()),t.length&&Xt(t,null,!0)},l.moveSectionDown=function(){var t=e(E).next(w);!t.length&&(u.loopBottom||u.continuousVertical)&&(t=e(w).first()),t.length&&Xt(t,null,!1)},l.silentMoveTo=function(e,t){requestAnimFrame(function(){l.setScrollingSpeed(0,"internal")}),l.moveTo(e,t),requestAnimFrame(function(){l.setScrollingSpeed(ht.scrollingSpeed,"internal")})},l.moveTo=function(e,t){var n=Tn(e);typeof t!="undefined"?Cn(e,t):n.length>0&&Xt(n)},l.moveSlideRight=function(e){zt("next",e)},l.moveSlideLeft=function(e){zt("prev",e)},l.reBuild=function(n){if(Q.hasClass(p))return;rt=!0,requestAnimFrame(function(){rt=!0});var r=t.outerWidth;G=et.height(),u.resize&&dn(G,r),e(w).each(function(){var t=e(this).find(j),n=e(this).find(P);u.verticalCentered&&e(this).find(N).css("height",Sn(e(this))+"px"),e(this).css("height",G+"px"),u.scrollOverflow&&(n.length?n.each(function(){wn(e(this))}):wn(e(this))),n.length>1&&an(t,t.find(H))});var i=e(E),s=i.index(w);s&&l.silentMoveTo(s+1),rt=!1,requestAnimFrame(function(){rt=!1}),e.isFunction(u.afterResize)&&n&&u.afterResize.call(Q),e.isFunction(u.afterReBuild)&&!n&&u.afterReBuild.call(Q)},l.setResponsive=function(t){var n=f.hasClass(c);t?n||(l.setAutoScrolling(!1,"internal"),l.setFitToSection(!1,"internal"),e(A).hide(),f.addClass(c)):n&&(l.setAutoScrolling(ht.autoScrolling,"internal"),l.setFitToSection(ht.autoScrolling,"internal"),e(A).show(),f.removeClass(c))};var k=!1,W=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),$="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Q=e(this),G=et.height(),rt=!1,it=!0,st,ot,ut=!0,at=[],ft,lt,ct={};ct.m={up:!0,down:!0,left:!0,right:!0},ct.k=e.extend(!0,{},ct.m);var ht=e.extend(!0,{},u),pt,dt,vt,mt,gt,yt;e(this).length&&bt();var At=!1;et.on("scroll",Ot);var _t=0,Dt=0,Pt=0,Ht=0,Rt=(new Date).getTime();t.requestAnimFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){e()}}(),et.on("hashchange",nn),tt.keydown(rn),tt.keyup(function(e){it&&(lt=e.ctrlKey)}),e(t).blur(function(){it=!1,lt=!1});var yt;Q.mousedown(function(e){e.which==2&&(on=e.pageY,Q.on("mousemove",un))}),Q.mouseup(function(e){e.which==2&&Q.off("mousemove")});var on=0;tt.on("click touchstart",A+" a",function(t){t.preventDefault();var n=e(this).parent().index();Xt(e(w).eq(n))}),tt.on("click touchstart",z,function(t){t.preventDefault();var n=e(this).closest(w).find(j),r=n.find(P).eq(e(this).closest("li").index());an(n,r)}),u.normalScrollElements&&(tt.on("mouseenter",u.normalScrollElements,function(){l.setMouseWheelScrolling(!1)}),tt.on("mouseleave",u.normalScrollElements,function(){l.setMouseWheelScrolling(!0)})),e(w).on("click touchstart",X,function(){var t=e(this).closest(w);e(this).hasClass(V)?ct.m.left&&l.moveSlideLeft(t):ct.m.right&&l.moveSlideRight(t)}),et.resize(ln);var fn=G;l.destroy=function(t){l.setAutoScrolling(!1,"internal"),l.setAllowScrolling(!1),l.setKeyboardScrolling(!1),Q.addClass(p),clearTimeout(vt),clearTimeout(dt),clearTimeout(pt),clearTimeout(mt),clearTimeout(gt),et.off("scroll",Ot).off("hashchange",nn).off("resize",ln),tt.off("click",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click",z).off("mouseover",u.normalScrollElements).off("mouseout",u.normalScrollElements),e(w).off("click",X),clearTimeout(vt),clearTimeout(dt),t&&Wn()}};var rt={afterRender:function(e){var t=e.find(B),n=e.find(a);t.length&&(n=t.find(H)),n.mouseover()},create:function(e,t){e.find(a).slimScroll({allowPageScroll:!0,height:t+"px",size:"10px",alwaysVisible:!0})},isScrolled:function(e,t){if(e==="top")return!t.scrollTop();if(e==="bottom")return t.scrollTop()+1+t.innerHeight()>=t[0].scrollHeight},scrollable:function(e){return e.find(j).length?e.find(H).find(a):e.find(a)},scrollHeight:function(e){return e.find(a).get(0).scrollHeight},remove:function(e){e.find(a).children().first().unwrap().unwrap(),e.find(f).remove(),e.find(l).remove()},update:function(e,t){e.find(a).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+u+'"></div>'}};nt=rt});