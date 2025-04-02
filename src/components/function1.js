const API_KEY = import.meta.VITE_EXCHANGE_API_KEY
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
export const convertUsdToCop = async (value) => {
    try {
        const answer = await fetch(API_URL);
        if (!answer.ok) {
            throw new Error(`Error en la API: ${answer.status}`);
        }
        const data = await answer.json();
        const exchangeRate = data.conversion_rates.COP;
        const operation = value * exchangeRate;

        console.log(`${value} USD equivale a ${operation.toFixed(1)} COP`);
        return operation.toFixed(1); // 🔹 AHORA DEVUELVE EL RESULTADO CORRECTAMENTE
    } catch (error) {
        console.log("ERROR al obtener los datos");
        return "0"; // 🔹 En caso de error, devuelve "0" en lugar de `undefined`
    }
};
