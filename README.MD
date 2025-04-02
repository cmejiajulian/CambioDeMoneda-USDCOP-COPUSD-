📌 Descripción

Esta es una aplicación web que permite convertir entre dólares estadounidenses (USD) y pesos colombianos (COP) en tiempo real, utilizando una API de tasas de cambio. Además, muestra la fecha y hora actual de manera dinámica.

🚀 Características

Conversión de USD a COP y COP a USD.

Interfaz moderna con modo oscuro.

Actualización automática de la hora y fecha.

Uso de Vite para un desarrollo rápido y eficiente.

Uso de Fetch API para obtener datos en tiempo real.

🛠️ Tecnologías Utilizadas

HTML, CSS y JavaScript (estructura, estilos y funcionalidad)

Vite (gestor de módulos y bundler)

Exchange Rate API (obtención de tasas de cambio)

📂 Estructura del Proyecto

📁 currency-converter-app
│── 📁 src
│   ├── 📁 components
│   │   ├── function1.js  # Conversión de USD a COP
│   │   ├── function2.js  # Conversión de COP a USD
│   ├── 📁 DOMcomponents
│   │   ├── dom1.js  # Manipulación del DOM para USD a COP
│   │   ├── dom2.js  # Manipulación del DOM para COP a USD
│   │   ├── actualHora.js  # Función para actualizar la hora en el DOM
│   ├── style.css  # Estilos de la aplicación
│   ├── main.js  # Punto de entrada principal
│── index.html  # Página principal
│── README.md  # Documentación del proyecto

📜 Explicación del Código

🔹 function1.js (Conversión de USD a COP)

Esta función obtiene la tasa de cambio actual desde la API y multiplica el valor ingresado por la tasa obtenida.

export const convert1 = async (value) => {
    try {
        const answer = await fetch("https://v6.exchangerate-api.com/v6/5047b68756ab86b1930cc413/latest/USD");
        if (!answer.ok) {
            throw new Error(`Error en la API: ${answer.status}`);
        }
        const data = await answer.json();
        const change = data.conversion_rates.COP;
        return (value * change).toFixed(1);
    } catch (error) {
        console.error("ERROR al obtener los datos", error);
        return "0";
    }
};

🔹 dom1.js (Manipulación del DOM para USD a COP)

import { convert1 } from "../components/function1";

export const values1 = () => {
    const converter1 = document.querySelector('.converter1');
    if (!converter1) return;

    const num1 = converter1.querySelector('#usdInput1');
    const result = converter1.querySelector('#copOutput1');

    const updateConversion = async () => {
        const value = parseFloat(num1.value);
        result.value = isNaN(value) || value < 0 ? "0" : await convert1(value);
    };

    num1.addEventListener("input", updateConversion);
    updateConversion();
};

🔹 actualHora.js (Actualización de la hora en el DOM)

export const updateTimeDOM = () => {
    const dateElement = document.querySelector('#time');
    if (!dateElement) return;

    const updateTime = () => {
        const now = new Date();
        dateElement.textContent = now.toLocaleString();
    };

    updateTime();
    setInterval(updateTime, 1000); // Actualiza cada segundo
};

📦 Instalación y Ejecución

Clona el repositorio:

git clone https://github.com/tu-usuario/currency-converter-app.git

Ingresa al directorio del proyecto:

cd currency-converter-app

Instala las dependencias:

npm install

Ejecuta la aplicación en modo desarrollo:

npm run dev

Abre en el navegador: La aplicación estará disponible en http://localhost:5173

📌 Contribuciones

Si deseas contribuir al proyecto:

Realiza un fork del repositorio.

Crea una nueva rama (git checkout -b nueva-funcionalidad).

Realiza tus cambios y haz un commit (git commit -m 'Agregada nueva funcionalidad').

Sube los cambios (git push origin nueva-funcionalidad).

Abre un Pull Request.

📃 Licencia

Este proyecto está bajo la licencia MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente.