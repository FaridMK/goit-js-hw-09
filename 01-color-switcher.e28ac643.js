const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");let o=null;function r(n=t,o=e){o.disabled=!0,n.disabled=!1}r(),t.addEventListener("click",(function(){o=setInterval((()=>n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),r(e,t)})),e.addEventListener("click",(function(){clearInterval(o),r()}));
//# sourceMappingURL=01-color-switcher.e28ac643.js.map
