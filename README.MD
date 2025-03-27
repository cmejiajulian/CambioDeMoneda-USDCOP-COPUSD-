💰 Conversor de Moneda - USD a COP

Este proyecto es una aplicación web que permite convertir dólares estadounidenses (USD) a pesos colombianos (COP) en tiempo real, utilizando la API de ExchangeRate-API. Además, muestra la fecha y la hora actual en la interfaz de usuario.

🚀 Características

✅ Conversión en tiempo real de USD a COP.✅ Modo oscuro para una mejor experiencia visual.✅ Interfaz dinámica con actualización automática.✅ Manejo de errores si la API falla.

🛠️ Tecnologías Utilizadas

Vite + JavaScript 🚀

HTML + CSS 🎨

Fetch API para obtener la tasa de cambio en tiempo real.

Manejo de eventos en el DOM.

📥 Instalación y Uso

1️⃣ Clonar el Repositorio

git clone https://github.com/tu-usuario/conversor-usd-cop.git
cd conversor-usd-cop

2️⃣ Instalar Dependencias

npm install

3️⃣ Iniciar la Aplicación

npm run dev

Abre tu navegador y accede a http://localhost:5173.

📜 Explicación del Código

🌎 Conversión de Moneda (convert1.js)

Esta función obtiene la tasa de cambio desde la API y convierte el valor ingresado de USD a COP.

🖥️ Conexión con el DOM (dom1.js)

Esta función actualiza la interfaz con el resultado de la conversión cuando el usuario introduce un valor.

⏰ Mostrar la Hora Actual (actualHora.js)

Esta función actualiza el DOM con la fecha y hora actual en tiempo real.

🎨 Estilos CSS (style.css)

El diseño está optimizado con modo oscuro y los inputs son más anchos para mejorar la usabilidad.

📌 Estructura del Proyecto

📦 conversor-usd-cop  
 ┣ 📂 components  
 ┃ ┣ 📜 function1.js  
 ┃ ┗ 📜 function2.js  
 ┣ 📂 DOMcomponents  
 ┃ ┣ 📜 dom1.js  
 ┃ ┣ 📜 dom2.js  
 ┃ ┗ 📜 actualHora.js  
 ┣ 📜 index.js  
 ┣ 📜 style.css  
 ┣ 📜 README.md  
 ┣ 📜 package.json  
 ┗ 📜 vite.config.js  

🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes:✅ Abrir un issue 🐞✅ Hacer un fork y enviar un pull request 🚀

📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente.

🎉 ¡Gracias por usar este conversor de moneda! 💰✨

