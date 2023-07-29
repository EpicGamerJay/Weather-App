const img = document.getElementById("image");
const description = document.getElementById("desc");
const temprature = document.getElementById("temp");
const humidity = document.getElementById("hum");
const wind = document.getElementById("win");
const container = document.getElementById("container");
const notFound = document.getElementById("notFound");
const weatherBox = document.getElementById("weatherBox");
const weatherDetails = document.getElementById("weatherDetails");

const apiKey = " ";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")

async function checkWeather(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    
    if(city==''){
        notFound.style.display ='none';
        weatherBox.style.display ='none';
        weatherDetails.style.display = 'none';

        notFound.classList.remove('fadeIn');
        weatherBox.classList.remove('fadeIn');
        weatherBox.classList.remove('fadeIn');

        container.style.height ='100px';
        return;
    }

    if(data.cod==404){
        container.style.height ='500px';
        notFound.style.display ='block';
        notFound.classList.add('fadeIn')

        weatherBox.style.display ='none';
        weatherDetails.style.display = 'none';
    }

    else{
        notFound.style.display ='none';

        temprature.innerHTML= Math.round(data.main.temp) + ' °C';
        temprature.style.textAlign = 'center';
        container.style.height ='500px';
        weatherBox.style.display ='block';
        weatherBox.classList.add('fadeIn')
        weatherDetails.style.display = 'flex'
        weatherDetails.classList.add('fadeIn')
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = Math.round(data.wind.speed) + 'Km/Hr'
        description.innerHTML = data.weather[0].description;
        
        switch (data.weather[0].main) {
            case 'Clear':
                img.src = 'Media/clear.png';
                break;

            case 'Rain':
                img.src = 'Media/rain.png';
                break;

            case 'Snow':
                img.src = 'Media/snow.png';
                break;

            case 'Clouds':
                img.src = 'Media/cloud.png';
                break;

            case 'Mist':
                img.src = 'Media/mist.png';
                break;

            case 'Haze':
                img.src = 'Media/haze.png';
                break;

            default:
                image.src = '';
        }



    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})