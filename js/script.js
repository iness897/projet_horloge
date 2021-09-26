
const secondDiv = document.querySelector('.second-hand');
const minDiv = document.querySelector('.min-hand');
const hourDiv = document.querySelector('.hour-hand');


function setDate(){
	const now = new Date();


    const seconds = now.getSeconds();
    const secDeg = ((seconds/60)*360 + 90);
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    
    const mins = now.getMinutes();
    const minDeg = ((mins/60) * 360 + 90);
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    
    const hour = now.getHours();
    const hourDeg = ((hour/12) * 360 + 90);
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);