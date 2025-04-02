const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const convertCopToUsd =async (value)=>{

    try{
        const answer = await fetch(API_URL);
        if(!answer.ok) {
            throw new Error (`Error en la API:${answer.status}`);
        }
        const data = await answer.json();
        const exchangeRate = data.conversion_rates.COP
        const operation = (value /exchangeRate);
        console.log( `${value} COP equivale a ${operation.toFixed(1)}USD`)
        return operation.toFixed(1)


    }catch(error){
        console.log('ERROR al obtener los datos ');
        return "0";
    }


};

