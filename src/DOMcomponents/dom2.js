import { convertCopToUsd } from "../components/function2";

export const values2 = () => {
    const converter2 = document.querySelector('.converter2');
    if (!converter2) return;

    const num2 = converter2.querySelector('#usdInput2');
    const result = converter2.querySelector('#copOutput2');

    const updateConversion = async () => {
        const value = parseFloat(num2.value);
        result.value = isNaN(value) || value < 0 ? "0" : await convertCopToUsd(value);
    };
    num2.addEventListener("input", updateConversion);
    updateConversion();
};
