const apiKey = "6ebf37be279a1fbce239b96b3b0d3857";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("inputbox");
const searchBtn = document.getElementById("btn");
const wImg = document.querySelector(".wather-icon");   //most of the time use querryselectior to perform certain actions Ex:- change src,placeholder etc;


// created a async functions to fetch api 
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();        // loading api data in json format 

    if (response.status == 404) {                   //if 404 error code is coming form api then change style of .error class
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        document.querySelector(".city").innerHTML = data.name;                              //getting data from api using keyword (data)
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";      // using math.round to round off the numbers Ex :- (25.15 = 25); 
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') wImg.src = "images/clouds.png";       
        else if (data.weather[0].main == "Clear") wImg.src = "images/clear.png";                    
        else if (data.weather[0].main == "Rain") wImg.src = "images/rain.png";
        else if (data.weather[0].main == "Drizzle") wImg.src = "images/drizzle.png";
        else if (data.weather[0].main == "Mist") wImg.src = "images/mist.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}



searchBtn.addEventListener("click", () => checkWeather(searchBox.value))               //getting value of the the inputbox and putting it inthe function