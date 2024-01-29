// change day and time after a new search

let now = new Date();
let theDay = now.getDay();
let hour = now.getHours();
let minutes = now.getMinutes();

let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[theDay]

function todaysTime(event){
  let time = document.querySelector("#today")
  let timeUpdate = `${day} ${hour}:${minutes}`
  time.innerHTML= timeUpdate
}

let doASearch = document.querySelector("#search-button")
doASearch.addEventListener("submit",todaysTime())

// use weather api to change my weather info per city

function tempUpdate(response){
  let latestTemp = document.querySelector(".todaysTempFigure")
  console.log(response.data.temperature.current)
  let apiOutput = response.data.temperature.current
  latestTemp.innerHTML = Math.round(apiOutput)
}


let updateCityTemp = document.querySelector(".searchBar")
updateCityTemp.addEventListener("submit",tempUpdate)

// change city name after new search

function citySearch (city){
  let searchedCity = document.querySelector("#search-bar-input")
  let cityEntry = searchedCity.value
  let apiKey = "79ta47230c920obd7a229aa4aa63f7b7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityEntry}&key=${apiKey}`
  console.log(apiUrl)
  axios.get(apiUrl).then(tempUpdate)

}

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










