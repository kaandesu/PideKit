import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},O={},r=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/stories/Configure.mdx":async()=>r(()=>import("./Configure-KlZOIOLz.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/Slider.stories.ts":async()=>r(()=>import("./Slider.stories-J7Bwalxj.js"),__vite__mapDeps([7,8,9,10]),import.meta.url),"./src/stories/Dialog.stories.ts":async()=>r(()=>import("./Dialog.stories-leBdRHi2.js"),__vite__mapDeps([11,8,9,12]),import.meta.url),"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-bm2BGzYT.js"),__vite__mapDeps([13,8,14]),import.meta.url)};async function w(_){return R[_]()}const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([r(()=>import("./config-5b0tGDSn.js"),__vite__mapDeps([15,8,4,2]),import.meta.url),r(()=>import("./preview-BnZLkpK3.js"),__vite__mapDeps([16,3]),import.meta.url),r(()=>import("./preview-GfBHQKui.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-Fi7DQdoQ.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-Y7vvrhHd.js"),__vite__mapDeps([17,5]),import.meta.url),r(()=>import("./preview-gnTYGUb5.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-bJSO6fK3.js"),__vite__mapDeps([18,5]),import.meta.url),r(()=>import("./preview-z_l9a9HW.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-CIBnOfL2.js"),__vite__mapDeps([19,2]),import.meta.url),r(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{r as _};
//# sourceMappingURL=iframe-cCGRJLvw.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Configure-KlZOIOLz.js","./index-FJlWQYtm.js","./_commonjsHelpers-5-cIlDoe.js","./index-ogXoivrg.js","./index-e6jHZmnO.js","./index-PPLHz8o0.js","./index-d4iai0xb.js","./Slider.stories-J7Bwalxj.js","./vue.esm-bundler-u8r1fIpw.js","./index-qBzqBKY5.js","./Slider-u294mW-5.css","./Dialog.stories-leBdRHi2.js","./Dialog-Uo8aLBM0.css","./Button.stories-bm2BGzYT.js","./Button-X8hm4PDT.css","./config-5b0tGDSn.js","./preview-BnZLkpK3.js","./preview-Y7vvrhHd.js","./preview-bJSO6fK3.js","./preview-CIBnOfL2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}