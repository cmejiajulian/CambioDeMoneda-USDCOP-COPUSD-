import { time } from "../components/hora";

export const updateTimeDOM =()=>{

    const dateElement =document.querySelector('#time');
    if(!dateElement) return console.error('No se encuenta el id del elemento');

    const dowlowndTime =()=>{
        dateElement.textContent = time();
    };

    dowlowndTime();
    setInterval(dowlowndTime,1000);
   
}