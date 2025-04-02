import { convertCopToUsd } from "../components/function2";

export const values2 = () => {
    const converter2 = document.querySelector('.converter2');
    if (!converter2) return;

    const num2 = converter2.querySelector('#usdInput2'); // ✅ ID corregido
    const result = converter2.querySelector('#copOutput2'); // ✅ ID corregido


    const updateConversion2 = async () => {
        const value = parseFloat(num2.value);
        if (isNaN(value) || value < 0) {
            result.value = "0";
        } else {
            const convertedValue = await convertCopToUsd(value);
            result.value = convertedValue; // Muestra el resultado
        }
    };

    num2.addEventListener("input", updateConversion2);
    updateConversion2();
};


