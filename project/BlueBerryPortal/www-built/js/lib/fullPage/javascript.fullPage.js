/**
 * fullPage Pure Javascript v.0.0.8 (Alpha) - Not support given until Beta version.
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function(e,t,n,r,i){typeof define=="function"&&define.amd?define([],function(){return e.fullpage=r(t,n),e.fullpage}):typeof exports=="object"?module.exports=r(t,n):e.fullpage=r(t,n)})(this,window,document,function(e,t,n){"use strict";function rt(e,t){var n={menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,recordHistory:!0,controlArrows:!0,sectionSelector:p,slideSelector:E,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null};z=ot(n,t),tt=Et(z),nt=ct(e),it(st)}function it(e){mt(nt,a),ir(),z.css3&&(z.css3=Wn()),nt!==null?(ft(nt,{height:"100%",position:"relative"}),gt(nt,i),gt(ct("html"),f)):sr("error","Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"),jt(!0),Qn(),$n(),Jn();var t=ht(z.sectionSelector);for(s=0;s<t.length;++s)gt(t[s],d);var n=ht(z.slideSelector);for(s=0;s<n.length;++s)gt(n[s],S);z.navigation&&$t();var r=ht(v);for(var s=0;s<r.length;s++){var o=s,u=r[s],l=u,h=ht(x,u),p=h.length;!o&&ct(m)===null&&gt(u,c),typeof z.anchors[o]!="undefined"&&(u.setAttribute("data-anchor",z.anchors[o]),vt(u,c)&&Mn(z.anchors[o],o));if(p>0){var g=p*100,y=100/p,b=u.innerHTML,w='<div class="'+N+'"><div class="'+k+'">'+b+"</div></div>";u.innerHTML=w,h=ht(x,u),lt(ct(L,u),"width",g+"%"),z.controlArrows&&p>1&&Vt(u),z.slidesNavigation&&In(u,p);for(var E=0;E<h.length;E++){var C=h[E];lt(C,"width",y+"%")}var A=ct(T,u);typeof A!==null?gt(h[0],c):er(A)}}e()}function st(){var n=ht(P);for(var r=0;r<n.length;r++)Tt(n[r],"click onclick touchstart",yn);Dt(z.autoScrolling,"internal");var i=ct(m),s=ct(T,i),o=pt(ct(m));s&&(o!==0||o===0&&pt(s)!==0)&&er(s);if(z.navigation){lt(Z,"margin-top","-"+Z.offsetHeight/2+"px");var u=ht("li",Z)[pt(ct(m))];gt(ct("a",u),c)}Jt();var a=e.location.hash.replace("#","").split("/"),f=a[0];if(f.length){var l=ct('[data-anchor="'+f+'"]');if(!z.animateAnchor&&l.length){if(z.autoScrolling)tr(l.offsetTop);else{tr(0),zn(f);var h=vn(l.offsetTop);Nt(h.element,h.options,0)}Mn(f,null),xt(z.afterLoad)&&z.afterLoad.call(l,f,pt(l)+1),mt(i,c),gt(l,c)}}zn(),Kn(t,gn,"DOMContentLoaded","DOMContentLoaded","DOMContentLoaded")}function ot(e,t){typeof t!="object"&&(t={});for(var n in t)e.hasOwnProperty(n)&&(e[n]=t[n]);return e}function ut(e){return t.getElementById(e)}function at(e){return t.getElementsByTagName(e)[0]}function ft(e,t){var n;for(n in t)t.hasOwnProperty(n)&&n!==null&&(e.style[n]=t[n]);return e}function lt(e,t,n){e.style[t]=n}function ct(e,n){return n=n||t,n.querySelector(e)}function ht(e,n){return n=n||t,n.querySelectorAll(e)}function pt(e){var t=0;while(e=e.previousSibling)(e.nodeType!=3||!/^\s*$/.test(e.data))&&t++;return t}function dt(e,t){return typeof t!="undefined"?t?e.style.display="block":e.style.display="none":e.style.display=="block"?e.style.display="none":e.style.display="block",e}function vt(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function mt(e,t){if(e&&vt(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n,"")}}function gt(e,t){e&&!vt(e,t)&&(e.className+=" "+t)}function yt(e,t){return e&&(t(e)?e:yt(e.parentNode,t))}function bt(){return"innerWidth"in e?e.innerWidth:t.documentElement.offsetWidth}function wt(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function Et(e){if(null===e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function St(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xt(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function Tt(e,n,r){var i=n.split(" ");for(var s=0,o=i.length;s<o;s++)t.addEventListener?e.addEventListener(i[s],r,!1):e.attachEvent(i[s],r,!1)}function Nt(e,t,n,r){var i=Mt(e),s=t-i,o=0,u=20;et=!0;var a=function(){if(et){var f=t;o+=u,f=Math.easeInOutCubic(o,i,s,n),_t(e,f),o<n?setTimeout(a,u):typeof r!="undefined"&&r()}else o<n&&r()};a()}function Ct(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function kt(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType==1&&e!=t&&n.push(e);return n}function Lt(e){return kt(e.parentNode.firstChild,e)}function At(e){var t=e.nextSibling;while(t&&t.nodeType!=1)t=t.nextSibling;return t}function Ot(e){var t=e.previousSibling;while(t&&t.nodeType!=1)t=t.previousSibling;return t}function Mt(t){var n;return t.self!=e&&vt(t,N)?n=t.scrollLeft:!z.autoScrolling||z.scrollBar?n=Ct():n=t.offsetTop,n}function _t(t,n){!z.autoScrolling||z.scrollBar||t.self!=e&&vt(t,N)?t.self!=e&&vt(t,N)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Dt(e,n){rr("autoScrolling",e,n);var r=ct(m);if(z.autoScrolling&&!z.scrollBar)ft(t.body,{overflow:"hidden",height:"100%"}),ft(at("html"),{overflow:"hidden",height:"100%"}),Pt(z.recordHistory,"internal"),ft(nt,{"-ms-touch-action":"none","touch-action":"none"}),r&&tr(r.offsetTop);else{ft(t.body,{overflow:"visible",height:"100%"}),ft(at("html"),{overflow:"visible",height:"100%"}),Pt(!1,"internal"),ft(nt,{"-ms-touch-action":"","touch-action":""}),tr(0);var i=vn(r.offsetTop);i.element.scrollTo(0,i.options)}}function Pt(e,t){rr("recordHistory",e,t)}function Ht(e,t){rr("scrollingSpeed",e,t)}function Bt(e,t){rr("fitToSection",e,t)}function jt(e){e?Vn():Xn()}function Ft(e){z.keyboardScrolling=e}function It(){var e=Ot(ct(m));e&&pn(e,null,!0)}function qt(){var e=At(ct(m));e&&pn(e,null,!1)}function Rt(e,t){Ht(0,"internal"),Ut(e,t),Ht(tt.scrollingSpeed,"internal")}function Ut(e,t){var n=Hn(e);typeof t!="undefined"?jn(e,t):n&&pn(n)}function zt(){cn("next")}function Wt(){cn("prev")}function Xt(e){if(vt(nt,a))return;J=!0,$=wt();var t=ht(v);for(var n=0;n<t.length;++n){var r=t[n],i=ct(C,r),s=ht(x,r);i&&s.length>1&&xn(i,ct(T,i))}var o=ct(m);pt(o)&&tr(o.offsetTop),J=!1,xt(z.afterResize)&&e&&z.afterResize.call(nt),xt(z.afterReBuild)&&!e&&z.afterReBuild.call(nt)}function Vt(e){var n=t.createElement("div");n.className=j;var r=t.createElement("div");r.className=R;var i=ct(C,e);z.controlArrowColor!="#fff",i.parentNode.appendChild(n),i.parentNode.appendChild(r),z.loopHorizontal||(ct(F,e).style.display="none")}function $t(){var r=t.createElement("div");r.setAttribute("id",g);var i=t.createElement("ul");r.appendChild(i),t.body.appendChild(r),Z=ct(y),lt(Z,"color",z.navigationColor),gt(Z,z.navigationPosition),z.showActiveTooltip&&gt(Z,w);var s="";for(var o=0;o<ht(v).length;o++){var u="";z.anchors.length&&(u=z.anchors[o]),s=s+'<li><a href="#'+u+'"><span></span></a>';var a=z.navigationTooltips[o];typeof a!==n&&a!==""&&(s+='<div class="'+b+" "+z.navigationPosition+'">'+a+"</div>"),s+="</li>"}var f=ct("ul",Z);f.innerHTML=f.innerHTML+s;var l=ht(_);for(var c=0;c<l.length;c++)Tt(l[c],"click onclick touchstart",function(t){t=e.event||t||t.originalEvent,St(t);var n=pt(this.parentNode);pn(ht(v)[n],null,!1)})}function Jt(){var e=ct(m);xt(z.afterLoad)&&z.afterLoad.call(e,e.getAttribute("data-anchor"),pt(e)+1),xt(z.afterRender)&&z.afterRender.call(nt)}function Yt(){var e;if(!z.autoScrolling||z.scrollBar){var t=Ct(),n=0,r=Math.abs(t-ht(v)[0].offsetTop),i=ht(v);for(var s=0;s<i.length;++s){var o=i[s],u=Math.abs(t-o.offsetTop);u<r&&(n=s,r=u)}e=ht(v)[n]}if(!z.autoScrolling||z.scrollBar){if(!vt(e,c)){Gt=!0;var a=ct(m),f=pt(a)+1,l=_n(e),h=e.getAttribute("data-anchor"),p=pt(e)+1,d=ct(T,e);if(d)var g=d.getAttribute("data-anchor"),y=pt(d);G&&(mt(a,c),gt(e,c),xt(z.onLeave)&&z.onLeave.call(a,f,p,l),xt(z.afterLoad)&&z.afterLoad.call(e,h,p),Mn(h,0),z.anchors.length&&(K=h,qn(y,g,h,p))),clearTimeout(Kt),Kt=setTimeout(function(){Gt=!1},100)}z.fitToSection&&(clearTimeout(Qt),Qt=setTimeout(function(){if(G&&!z.autoScrolling||z.scrollBar)pt(ct(m))==pt(e)&&(J=!0),pn(e),J=!1},z.fitToSectionDelay))}}function Zt(e){e=="down"?qt():It()}function sn(t){var n=e.event||n||n.originalEvent;if(on(n)){z.autoScrolling&&St(t);var r=ct(m),i=ht(C,r);if(G&&!W){var s=Zn(n);nn=s.y,rn=s.x,i&&Math.abs(tn-rn)>Math.abs(en-nn)?Math.abs(tn-rn)>bt()/100*z.touchSensitivity&&(tn>rn?zt():Wt()):z.autoScrolling&&Math.abs(en-nn)>wt()/100*z.touchSensitivity&&(en>nn?Zt("down"):nn>en&&Zt("up"))}}}function on(e){return typeof e.pointerType=="undefined"||e.pointerType!="mouse"}function un(t){var n=e.event||n||n.originalEvent;z.fitToSection&&(et=!1);if(on(n)){var r=Zn(n);en=r.y,tn=r.x}}function an(e,t){var n=0,r=e.slice(Math.max(e.length-t,1));for(var i=0;i<r.length;i++)n+=r[i];return Math.ceil(n/t)}function ln(t){var n=(new Date).getTime();if(z.autoScrolling){t=e.event||t||t.originalEvent;var r=t.wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r));Y.length>149&&Y.shift(),Y.push(Math.abs(r)),z.scrollBar&&St(t);var s=n-fn;fn=n,s>200&&(Y=[]);if(G){var o=an(Y,10),u=an(Y,70),a=o>=u;a&&(i<0?Zt("down"):Zt("up"))}return!1}z.fitToSection&&(et=!1)}function cn(e){var t=ct(m),n=ct(C,t);if(!n||W)return;var r=ct(T,n),i=null;e==="prev"?i=Ot(r):i=At(r);if(!i){if(!z.loopHorizontal)return;var s=Lt(r);e==="prev"?i=s[s.length-1]:i=s[0]}W=!0,xn(n,i)}function hn(){var e=ht(T);for(var t=0;t<e.length;t++)er(e[t],"internal")}function pn(e,t,n){if(e===null)return;var r={element:e,callback:t,isMovementUp:n,dtop:e.offsetTop,yMovement:_n(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:pt(e),activeSlide:ct(T,e),activeSection:ct(m),leavingSection:pt(ct(m))+1,localIsResizing:J};if(pt(r.activeSection)==r.sectionIndex&&!J||z.scrollBar&&Ct()===r.dtop)return;if(r.activeSlide)var i=r.activeSlide.getAttribute("data-anchor"),s=pt(r.activeSlide);var o=ht(v);for(var u=0;u<o.length;u++)mt(o[u],c);gt(e,c),G=!1,qn(s,i,r.anchorLink,r.sectionIndex),xt(z.onLeave)&&!r.localIsResizing&&z.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement),dn(r),K=r.anchorLink,Mn(r.anchorLink,r.sectionIndex)}function dn(e){if(z.css3&&z.autoScrolling&&!z.scrollBar){var t="translate3d(0px, -"+e.dtop+"px, 0px)";Pn(t,!0),z.scrollingSpeed?setTimeout(function(){mn(e)},z.scrollingSpeed):mn(e)}else{var n=vn(e.dtop);Nt(n.element,n.options,z.scrollingSpeed,function(){mn(e)})}}function vn(t){var n={};return z.autoScrolling&&!z.scrollBar?(n.options=-t,n.element=ct("."+i)):(n.options=t,n.element=e),n}function mn(e){xt(z.afterLoad)&&!e.localIsResizing&&z.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),G=!0,xt(e.callback)&&e.callback.call(this)}function gn(){var t=e.location.hash.replace("#","").split("/"),n=t[0],r=t[1];n&&jn(n,r)}function yn(t){var n=this;n.self==e&&(n=t.target||t.srcElement),vt(n,H)?Wt():zt()}function bn(){if(!Gt){var t=e.location.hash.replace("#","").split("/"),n=t[0],r=t[1];if(n.length){var i=typeof K=="undefined",s=typeof K=="undefined"&&typeof r=="undefined"&&!W;(n&&n!==K&&!i||s||!W&&Q!=r)&&jn(n,r)}}}function En(e,t){switch(t){case 38:case 33:It();break;case 32:if(e){It();break};case 40:case 34:qt();break;case 36:Ut(1);break;case 35:Ut(ht(v).length);break;case 37:Wt();break;case 39:zt();break;default:return}}function xn(e,t){var n=pt(t),r=yt(e,function(e){return vt(e,d)}),i=pt(r),s=r.getAttribute("data-anchor"),o=ct(M,r),u=Un(t),a=J;if(z.onSlideLeave){var f=ct(T,r),l=pt(f),p=Dn(l,n);!a&&p!=="none"&&xt(z.onSlideLeave)&&z.onSlideLeave.call(f,s,i+1,l,p)}var v=ht(x,r);for(var m=0;m<v.length;m++)mt(v[m],c);gt(t,c),!z.loopHorizontal&&z.controlArrows&&(dt(ct(F,r),n!==0),dt(ct(U,r),!t.is(":last-child"))),vt(r,c)&&qn(n,u,s,i);var g=function(){a||xt(z.afterSlideLoad)&&z.afterSlideLoad.call(t,s,i+1,u,n),W=!1};if(z.css3){var y="translate3d(-"+Math.round(t.offsetLeft)+"px, 0px, 0px)",b=ct(L,e);kn(b,z.scrollingSpeed>0),nr(b,y),setTimeout(function(){g()},z.scrollingSpeed,z.easing)}else Nt(e,Math.round(t.offsetLeft),z.scrollingSpeed,function(){g()});if(z.slidesNavigation){mt(ct(h,o),c);var w=ht("li",o)[n],E=ct("a",w);gt(E,c)}}function Cn(){if(X){if(t.activeElement.getAttribute("type")!=="text"){var e=wt();Math.abs(e-Tn)>20*Math.max(Tn,e)/100&&(Xt(!0),Tn=e)}}else clearTimeout(Nn),Nn=setTimeout(function(){Xt(!0)},350)}function kn(e){var t="all "+z.scrollingSpeed+"ms "+z.easingcss3;return mt(e,u),ft(e,{"-webkit-transition":t,transition:t}),e}function Ln(e){return gt(e,u)}function An(e,t){if(z.navigation){mt(ct(h,Z),c);if(e)gt(ct('a[href="#'+e+'"]',Z),c);else{var n=ht("li",Z)[t];gt(ct("a",n),c)}}}function On(e){if(z.menu){var t=ct(z.menu);t&&(mt(ct(h,t),c),gt(ct('[data-menuanchor="'+e+'"]',t),c))}}function Mn(e,t){On(e),An(e,t)}function _n(e){var t=pt(ct(m)),n=pt(e);return t==n?"none":t>n?"up":"down"}function Dn(e,t){return e==t?"none":e>t?"left":"right"}function Pn(e,t){t?kn(nt):Ln(nt),nr(nt,e),setTimeout(function(){mt(nt,u)},10)}function Hn(e){var t=ct(v+'[data-anchor="'+e+'"]');return t||(t=ht(v)[e-1]),t}function Bn(e,t){var n=ct(C,t),r=ct(x+'[data-anchor="'+e+'"]',n);return n&&!r&&(r=ht(x,n)[e]),r}function jn(e,t){var n=Hn(e);typeof t=="undefined"&&(t=0),e!==K&&!vt(n,c)?pn(n,function(){Fn(n,t)}):Fn(n,t)}function Fn(e,t){if(typeof t!="undefined"){var n=ct(C,e),r=Bn(t,e);r&&xn(n,r)}}function In(e,n){var r=t.createElement("div");r.className=O;var i=t.createElement("ul");r.appendChild(i),e.appendChild(r);var s=ct(M,e),o=ct("ul",s);gt(s,z.slidesNavPosition);var u="";for(var a=0;a<n;a++)u+='<li><a href="#"><span></span></a></li>';o.innerHTML=o.innerHTML+u,lt(s,"margin-left","-"+s.offsetWidth/2+"px");var f=ht("li",s)[0];gt(ct("a",f),c)}function qn(e,t,n,r){var i="";z.anchors.length&&(e?(typeof n!="undefined"&&(i=n),typeof t=="undefined"&&(t=e),Q=t,Rn(i+"/"+t)):typeof e!="undefined"?(Q=t,Rn(n)):Rn(n)),zn()}function Rn(t){if(z.recordHistory)location.hash=t;else if(X||V)history.replaceState(n,n,"#"+t);else{var r=e.location.href.split("#")[0];e.location.replace(r+"#"+t)}}function Un(e){var t=e.getAttribute("data-anchor"),n=pt(e);return t||(t=n),t}function zn(e){var n=ct(m),r=ct(T,n),i=n.getAttribute("data-anchor"),s=pt(n),e=String(s);z.anchors.length&&(e=i);if(r){var o=Un(r);e=e+"-"+o}e=e.replace("/","-").replace("#","");var u=new RegExp("\\b\\s?"+l+"-[^\\s]+\\b","g");t.body.className=t.body.className.replace(u,""),gt(t.body,l+"-"+e)}function Wn(){var r=t.createElement("p"),i,s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(r,null);for(var o in s)r.style[o]!==n&&(r.style[o]="translate3d(1px,1px,1px)",i=e.getComputedStyle(r).getPropertyValue(s[o]));return t.body.removeChild(r),i!==n&&i.length>0&&i!=="none"}function Xn(){var e=ct(s);t.addEventListener?(e.removeEventListener("mousewheel",ln,!1),e.removeEventListener("wheel",ln,!1)):e.detachEvent("onmousewheel",ln)}function Vn(){Kn(ct(s),ln,"mousewheel","onmousewheel","wheel")}function $n(){Kn(e,Cn,"resize","onresize")}function Jn(){Kn(e,Yt,"scroll","onscroll","onscroll")}function Kn(e,t,n,r,i){e.addEventListener?(e.addEventListener(n,t,!1),typeof i!="undefined"&&e.addEventListener(i,t,!1)):e.attachEvent(r,t)}function Qn(){if(X||V){var e=ct(s);if(t.addEventListener){var n=Yn();e.removeEventListener("touchstart",un),e.removeEventListener(n.down,un),e.removeEventListener("touchmove",sn),e.removeEventListener(n.move,sn),Tt(e,"touchstart "+n.down,un),Tt(e,"touchmove "+n.move,sn)}}}function Gn(){if(X||V){var e=ct(s);if(e.addEventListener){var t=Yn();e.removeEventListener("touchstart",un),e.removeEventListener(t.down,un),e.removeEventListener("touchmove",sn),e.removeEventListener(t.move,sn)}}}function Yn(){var t;return e.PointerEvent?t={down:"pointerdown",move:"pointermove"}:t={down:"MSPointerDown",move:"MSPointerMove"},t}function Zn(e){var t=[];return t.y=typeof e.pageY!="undefined"&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=typeof e.pageX!="undefined"&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,V&&on(e)&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function er(e,t){Ht(0,"internal"),typeof t!="undefined"&&(J=!0);var n=yt(e,function(e){return vt(e,N)});xn(n,e),typeof t!="undefined"&&(J=!1),Ht(tt.scrollingSpeed,"internal")}function tr(e){if(z.scrollBar){var t=vn(e);_t(t.element,t.options,0)}else if(z.css3){var n="translate3d(0px, -"+e+"px, 0px)";Pn(n,!1)}else lt(nt,"top",-e+"px")}function nr(e,t){ft(e,{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t})}function rr(e,t,n){z[e]=t,n!=="internal"&&(tt[e]=t)}function ir(){for(var e=0;e<z.anchors.length;e++){var t=z.anchors[e],n=ut("#"+t);(n||ht('[name="'+t+'"]').length)&&sr("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}}function sr(e,t){console&&console[e]&&console[e]("fullPage: "+t)}var r,i="fullpage-wrapper",s="."+i,o="fp-responsive",u="fp-notransition",a="fp-destroyed",f="fp-enabled",l="fp-viewing",c="active",h="."+c,p=".section",d="fp-section",v="."+d,m=v+h,g="fp-nav",y="#"+g,b="fp-tooltip",w="fp-show-active",E=".slide",S="fp-slide",x="."+S,T=x+h,N="fp-slides",C="."+N,k="fp-slidesContainer",L="."+k,A="fp-table",O="fp-slidesNav",M="."+O,_=M+" a",D="fp-controlArrow",P="."+D,H="fp-prev",B="."+H,j=D+" "+H,F=P+B,I="fp-next",q="."+I,R=D+" "+I,U=P+q,z,W=!1,X=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),V="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,$=wt(),J=!1,K,Q,G=!0,Y=[],Z,et,tt,nt;Math.easeInOutCubic=function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t};var Kt,Qt,Gt=!1,en=0,tn=0,nn=0,rn=0,fn=(new Date).getTime();t.addEventListener?e.addEventListener("hashchange",bn,!1):e.attachEvent("onhashchange",bn);var wn;t.onkeydown=function(n){clearTimeout(wn);var r=t.activeElement,i=r.tagName;if(i!=="SELECT"&&i!=="INPUT"&&z.keyboardScrolling&&z.autoScrolling){n=e.event||n||n.originalEvent;var s=n.charCode||n.keyCode,o=[40,38,32,33,34];for(var u=0;u<o.length;u++)o[u]==s&&St(n);var a=n.shiftKey;wn=setTimeout(function(){En(a,s)},150)}};var Sn=ct(_);Sn!==null&&Tt(ct(_),"click onclick touchstart",function(e){St(e);var t=yt(this,function(e){return vt(e1,d)}),n=ct(C,t),r=yt(this,function(e){return e.tagName==="li"}),i=pt(r),s=ht(x,n)[i];xn(n,s)});var Tn=$,Nn;return r={initialize:rt,moveSectionUp:It,moveSectionDown:qt,moveTo:Ut,silentMoveTo:Rt,moveSlideRight:zt,moveSlideLeft:Wt,setAutoScrolling:Dt,setFitToSection:Bt,setKeyboardScrolling:Ft,setRecordHistory:Pt,setScrollingSpeed:Ht},r});