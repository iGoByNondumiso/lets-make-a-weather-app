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

// change city name after new search



function cityUpdate(event){
  event.preventDefault()
  let searchedCity = document.querySelector("#search-bar-input")
  console.log(searchedCity.value)
  let myCity = document.querySelector("#city")
  myCity.innerHTML= searchedCity.value

}

let searchACity = document.querySelector(".searchBar")
searchACity.addEventListener("submit",cityUpdate)