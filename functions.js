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