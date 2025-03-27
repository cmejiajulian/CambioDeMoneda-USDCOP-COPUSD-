import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { values1 } from './DOMcomponents/dom1'
import { values2 } from './DOMcomponents/dom2'
import { updateTimeDOM } from './DOMcomponents/actualHora'


document.querySelector('#app').insertAdjacentHTML("beforeend", `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
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
`);

document.addEventListener("DOMContentLoaded", () => {
  values1(); // ✅ Correcto
  values2(); // ✅ Correcto
  updateTimeDOM();
  
});
