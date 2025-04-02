export const convert1 = async (value) => {
    try {
        const answer = await fetch("https://v6.exchangerate-api.com/v6/6dca3c982d2ce4a5ea67c1b5/latest/USD");
        if (!answer.ok) {
            throw new Error(`Error en la API: ${answer.status}`);
        }
        const data = await answer.json();
        const change = data.conversion_rates.COP;
        const operation = value * change;

        console.log(`${value} USD equivale a ${operation.toFixed(1)} COP`);
        return operation.toFixed(1); // 🔹 AHORA DEVUELVE EL RESULTADO CORRECTAMENTE
    } catch (error) {
        console.log("ERROR al obtener los datos");
        return "0"; // 🔹 En caso de error, devuelve "0" en lugar de `undefined`
    }
};
