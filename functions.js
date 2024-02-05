// use weather api data to change my weather info per city

function tempUpdate(response){
  let latestTemp = document.querySelector(".todaysTempFigure")
 
  let apiOutput = response.data.temperature.current
  latestTemp.innerHTML = Math.round(apiOutput)

  let humidity = document.querySelector("#humid")
  console.log(response.data.temperature.humidity)
  let humidityMeasured = response.data.temperature.humidity
  humidity.innerHTML=`${humidityMeasured} %` 

  let wind = document.querySelector("#wind-speed")
  console.log(response.data.wind.speed)
  let windspeed= response.data.wind.speed
  wind.innerHTML=`${windspeed} km/h` 

  let condition = document.querySelector("#describe")
  console.log(response.data.condition.description)
  condition.innerHTML= response.data.condition.description

  let time = document.querySelector("#today")
  console.log(response.data.time * 1000)
  let now = new Date(response.data.time * 1000);
  console.log(now)
  time.innerHTML= timetoday(now)

  let icon = document.querySelector(".todaysTempIcon")
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" alt/>`

}

// change day and time after a new search

function timetoday(now){

let theDay = now.getDay();
let hour = now.getHours();
let minutes = now.getMinutes();
let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[theDay]

if (minutes < 10){minutes = `0${minutes}`}

let timeUpdate = `${day} ${hour}:${minutes}`
return timeUpdate
}

let updateCityTemp = document.querySelector(".searchBar")
updateCityTemp.addEventListener("submit",tempUpdate)

// finding the city I searched in the Api

function citySearch (city){
  let searchedCity = document.querySelector("#search-bar-input")
  let cityEntry = searchedCity.value
  let apiKey = "79ta47230c920obd7a229aa4aa63f7b7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityEntry}&key=${apiKey}`
  console.log(apiUrl)
  axios.get(apiUrl).then(tempUpdate)
}

// change city name displayed after search

function cityUpdate(event){
  event.preventDefault()
  let searchedCity = document.querySelector("#search-bar-input")
  console.log(searchedCity.value)
  let myCity = document.querySelector("#city")
  myCity.innerHTML= searchedCity.value
  citySearch(searchedCity.value)
}
let searchACity = document.querySelector(".searchBar")
searchACity.addEventListener("submit",cityUpdate)

function weekDays(timestamp){
let futureDay = new Date(timestamp * 1000)
      let futureDays = ["Sunday","Mon","Tues","Wed","Thur","Fri","Sat"]
    
      return futureDays[futureDay.getDay()];}
    

function weeklyForecast(response){
  console.log(response.data)
  console.log(response.data.daily)

  
    let weatherForecast = document.querySelector("#thisWeek")
    let forecastedDays = response.data.daily
  
    forecastedDays.forEach(function (day, index)
    { if(index < 5)
      {
      weatherForecast.innerHTML += `<ul>
      <li>${weekDays(day.time)}<br> 
      <span > <img class="forecastIcon" src="${day.condition.icon_url}"/></span> <br>
      <span class="maxTemp">${Math.round(day.temperature.maximum)}º</span> 
      <span class="minTemp">${Math.round(day.temperature.minimum)}º</span> </li><ul>`} 
    }
    )
  
}



function getForecast (city){
  let searchedCity = document.querySelector("#search-bar-input")
  let cityEntered = searchedCity.value
  console.log(cityEntered)
  let apiKey = `79ta47230c920obd7a229aa4aa63f7b7`
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityEntered}&key=${apiKey}`
  
  axios.get(apiUrl).then(weeklyForecast)
  console.log(apiUrl)
}

let searchCityForecast = document.querySelector(".searchBar")
searchCityForecast.addEventListener("submit",getForecast)