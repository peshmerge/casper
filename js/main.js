/* jshint ignore: start */
/*! Casper 05-10-2018 */

!function(y,t){"use strict";var e=function(){t(".post-content").fitVids(),t(y).load(function(){!function(){var t,e,i,a,n,o,r,s,d,c,l,u,m,h,f,g,p=y.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,v=document.getElementsByTagName("body")[0].getElementsByTagName("img"),w=y.devicePixelRatio&&1.2<=y.devicePixelRatio?1:0;if(0!==v.length)for(s=v[0].hasAttribute?function(t,e){return t.hasAttribute(e)}:function(t,e){return null!==t.getAttribute(e)},n=0;n<v.length;n++)if(l=v[n],d=w&&s(l,"data-src2x")?"data-src2x":"data-src",u=w&&s(l,"data-src-base2x")?"data-src-base2x":"data-src-base",l.onload=function(){this.style.opacity="1"},s(l,d))for(t=s(l,u)?l.getAttribute(u):"",o=l.getAttribute(d).split(","),e=0;e<o.length;e++)if(c=(a=o[e].replace(":","||").split("||"))[0],i=a[1],-1!==c.indexOf("<")?(m=c.split("<"),o[e-1]?(f=o[e-1].split(/:(.+)/)[0].split("<"),r=p<=m[1]&&p>f[1]):r=p<=m[1]):(m=c.split(">"),o[e+1]?(h=o[e+1].split(/:(.+)/)[0].split(">"),r=p>=m[1]&&p<h[1]):r=p>=m[1]),r){g=1==(-1!==i.indexOf("//")?1:0)?i:t+i,l.src!==g&&l.setAttribute("src",g);break}}()})};t(document).ready(function(){e()})}(window,jQuery),function(n){"use strict";var o,r,s,d;n.fn.fitVids=function(t){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var e=document.createElement("div"),a=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];e.className="fit-vids-style",e.id="fit-vids-style",e.style.display="none",e.innerHTML="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",a.parentNode.insertBefore(e,a)}return t&&n.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var e=n(this).find(t.join(","));(e=e.not("object object")).each(function(){var t=n(this);"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length||(o="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),s=o/r,t.attr("id")||(d="fitvid"+Math.floor(999999*Math.random()),t.attr("id",d)),t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),t.removeAttr("height").removeAttr("width"))})})}}(window.jQuery||window.Zepto),function(){var t,e,i;(t=document.getElementById("site-navigation"))&&void 0!==(e=t.getElementsByTagName("h1")[0])&&(void 0!==(i=t.getElementsByTagName("ul")[0])?(-1===i.className.indexOf("nav-menu")&&(i.className+=" nav-menu"),e.onclick=function(){-1!==t.className.indexOf("toggled")?t.className=t.className.replace(" toggled",""):t.className+=" toggled"}):e.style.display="none")}(),function(){var t=-1<navigator.userAgent.toLowerCase().indexOf("webkit"),e=-1<navigator.userAgent.toLowerCase().indexOf("opera"),i=-1<navigator.userAgent.toLowerCase().indexOf("msie");if((t||e||i)&&void 0!==document.getElementById){var a=window.addEventListener?"addEventListener":"attachEvent";window[a]("hashchange",function(){var t=document.getElementById(location.hash.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)}}();