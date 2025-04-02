(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const s="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",i="/CambioDeMoneda-USDCOP-COPUSD-/vite.svg",l=async o=>{try{const t=await fetch("https://v6.exchangerate-api.com/v6/6dca3c982d2ce4a5ea67c1b5/latest/USD");if(!t.ok)throw new Error(`Error en la API: ${t.status}`);const r=(await t.json()).conversion_rates.COP,e=o*r;return console.log(`${o} USD equivale a ${e.toFixed(1)} COP`),e.toFixed(1)}catch{return console.log("ERROR al obtener los datos"),"0"}},u=()=>{const o=document.querySelector(".converter1");if(!o)return;const t=o.querySelector("#usdInput1"),a=o.querySelector("#copOutput1"),r=async()=>{const e=parseFloat(t.value);if(isNaN(e)||e<0)a.value="0";else{const n=await l(e);a.value=n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}};t.addEventListener("input",r),r()},d=async o=>{try{const t=await fetch("https://v6.exchangerate-api.com/v6/6dca3c982d2ce4a5ea67c1b5/latest/USD");if(!t.ok)throw new Error(`Error en la API:${t.status}`);const r=(await t.json()).conversion_rates.COP,e=o/r;return console.log(`${o} COP equivale a ${e.toFixed(1)}USD`),e.toFixed(1)}catch{console.log("ERROR al obtener los datos ")}},p=()=>{const o=document.querySelector(".converter2");if(!o)return;const t=o.querySelector("#usdInput2"),a=o.querySelector("#copOutput2"),r=async()=>{const e=parseFloat(t.value);if(isNaN(e)||e<0)a.value="0";else{const n=await d(e);a.value=n}};t.addEventListener("input",r),r()},v=()=>new Date,m=()=>{const o=document.querySelector("#time");if(!o)return console.error("No se encuenta el id del elemento");const t=()=>{o.textContent=v()};t(),setInterval(t,1e3)};document.querySelector("#app").insertAdjacentHTML("beforeend",`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${i}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <div class="container">
        
        <div>
          <p id ="time">  </p>
        </div>

        <div class="converter1">
            <input type="number" id="usdInput1" value="1" min="0">
            <span>USD</span>
            <span>=</span>
            <input type="number" id="copOutput1" readonly>
            <span>COP</span>
        </div>

        <div class="converter2">
            <input type="number" id="usdInput2" value="1" min="0">
            <span>COP</span>
            <span>=</span>
            <input type="number" id="copOutput2" readonly>
            <span>USD</span>
        </div>
    </div>
`);document.addEventListener("DOMContentLoaded",()=>{u(),p(),m()});
