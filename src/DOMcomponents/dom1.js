import { convertUsdToCop } from "../components/function1";

export const values1 = () => {
    const converter1 = document.querySelector('.converter1');
    if (!converter1) return;

    const num1 = converter1.querySelector('#usdInput1');
    const result = converter1.querySelector('#copOutput1');

    const updateConversion = async () => {
        const value = parseFloat(num1.value);
        result.value = isNaN(value) || value < 0 ? "0" : await convertUsdToCop(value);
    };
    num1.addEventListener("input", updateConversion);
    updateConversion();
};