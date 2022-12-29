const api = {
    key: "9f977b94509e89f6c16fbc950095c3b4",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search"),
      btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.type == "click"){
       getData(search.value);
       console.log(search.value)
    }
   });

   const t = new Date();
   document.querySelector(".date").textContent = dateFunction(t);

const getData = () => {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(Response => {
        return Response.json();
    }).then(displayData);
}

const displayData = (Response) => {
   if(Response.cod == "404") {
    const error = document.querySelector(".error");
    const myTimeout = setTimeout(errorCity, 5000);
    function errorCity () {
    error.textContent = "Please enter a valid city";
    }
    const stopError = () => {
        clearTimeout(myTimeout);
    }
    stopError();
    search.value = ""; 
   } else {
    document.querySelector(".city").innerText = `${Response.name}, ${Response.sys.country}`;
    const today = new Date();
    document.querySelector(".date").innerText = dateFunction(today);
    const temp = document.querySelector(".temp"); 
    temp.innerHTML = `Temp: ${Math.round(Response.main.temp)} <span>°C</span>`;
    const weather = document.querySelector(".weather");
    weather.innerText = `Weather: ${Response.weather[0].main}`;
    const tempRange = document.querySelector(".temp-range");
    tempRange.innerText = `Temp Range: ${Math.round(Response.main.temp_min)}°C / ${Math.round(Response.main.temp_max)}°C`;
    const weatherIcon = document.querySelector(".weather-icon");
    const iconURL = "https://openweathermap.org/img/w/";
    weatherIcon.src = iconURL + Response.weather[0].icon + ".png";
    
    search.value = "";
   }
}


function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct","Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`

}









