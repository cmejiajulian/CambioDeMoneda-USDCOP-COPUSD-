export const convert2 =async (value)=>{

    try{
        const answer = await fetch("https://v6.exchangerate-api.com/v6/5047b68756ab86b1930cc413/latest/USD");
        if(!answer.ok) {
            throw new Error (`Error en la API:${answer.status}`);
        }
        const data = await answer.json();
        const change = data.conversion_rates.COP
        const operation = (value /change);
        console.log( `${value} COP equivale a ${operation.toFixed(1)}USD`)
        return operation.toFixed(1)


    }catch(error){
        console.log('ERROR al obtener los datos ')
    }


};

