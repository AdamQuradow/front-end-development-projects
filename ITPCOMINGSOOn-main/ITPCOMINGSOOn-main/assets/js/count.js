const countTo = "25 May 2024";

const c = setInterval(() => {
    
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate)/1000; 
    
    const year = Math.floor(totalSeconds/ 3600 / 24 / 365);
    const days = Math.floor(totalSeconds/ 3600 / 24) % 365;
    const hours = Math.floor(totalSeconds/3600) % 24; 
    const minutes = Math.floor(totalSeconds/60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60; 
    console.log(minutes);

    const countDown = document.querySelector(".countdown"); 
    const daySection = document.getElementById('day-section'); 
    const hourSection = document.getElementById('hour-section'); 
    const minuteSection = document.getElementById('minute-section'); 
    const secondsSection = document.getElementById('seconds-section'); 

    daySection.textContent = `${format(days)}`; 
    hourSection.textContent = `${format(hours)}`;
    minuteSection.textContent = `${format(minutes)}`;
    secondsSection.textContent = `${format(seconds)}`;

    if(totalSeconds < 0){
        clearInterval(c);
        countDown.textContent = " WELCOME TO INTERNATIONAL TRADE PROPERTIES";
    }

}, 1000);

function format(t) {
    return t < 10 ? `0${t}` : t;
}