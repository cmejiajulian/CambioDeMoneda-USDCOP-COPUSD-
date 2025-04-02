import { convert1 } from "../components/function1";

export const values1 = () => {
    const converter1 = document.querySelector('.converter1'); // CLASE CORRECTA
    if (!converter1) return; // Si no existe, no hace nada

    const num1 = converter1.querySelector('#usdInput1'); // ID CORRECTO
    const result = converter1.querySelector('#copOutput1'); // ID CORRECTO

    const updateConversion = async () => {
        const value = parseFloat(num1.value); // Obtiene el valor ingresado
        if (isNaN(value) || value < 0) {
            result.value = "0"; // Si el número es inválido, muestra 0
        } else {
            const convertedValue = await convert1(value); // Llama a la función de conversión
            result.value = convertedValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Aplica formato; // Muestra el resultado
        }
    };

    num1.addEventListener("input", updateConversion); // Escucha cambios en el input
    updateConversion(); // Ejecuta la conversión inicial al cargar la página
};
