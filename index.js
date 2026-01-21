import{a as l,S as u,i}from"./assets/vendor-DQq26VV5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="54293972-23f9808dc3d8310adc0a56592",f="https://pixabay.com/api/";async function m(o){return(await l.get(f,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=new u(".gallery a",{captionsData:"alt"}),y=document.querySelector(".gallery");function g(o){const s=o.map(t=>{const a=t.tags.split(",").slice(0,3).join(", ");return`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${a}" />
          </a>
          <div class="info">
            <span>Likes: ${t.likes}</span>
            <span>Views: ${t.views}</span>
            <span>Comments: ${t.comments}</span>
            <span>Downloads: ${t.downloads}</span>
          </div>
        </li>`}).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",s),p.refresh()}function h(){y.innerHTML=""}function L(){document.querySelector(".loader").classList.add("visible")}function w(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){i.error({message:"Please enter a search term!"});return}h(),L();try{const t=await m(s);t.hits.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):g(t.hits)}catch{i.error({message:"Something went wrong. Try again later."})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
