const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const convertCopToUsd = async (value) => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
        const data = await response.json();
        const exchangeRate = data.conversion_rates.COP;
        return (value / exchangeRate).toFixed(2);
    } catch (error) {
        console.error("ERROR al obtener los datos:", error);
        return "0";
    }
};
