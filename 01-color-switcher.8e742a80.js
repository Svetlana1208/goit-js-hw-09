const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;function n(){t.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(){e=setInterval(n,1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8e742a80.js.map
