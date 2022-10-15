
function formatDate() {
  let now = new Date();
  let hours = now.getHours();
  let minutes =now.getMinutes()
  if (hours < 10 ){
    hours = `0${hours}`;
  }
if (minutes < 10){
  minutes = `0${minutes}`;
}
  return `${days[now.getDay()]}, ${hours} : ${minutes}`;
}

function cityShow(event) {
  event.preventDefault();
  let inputc = document.querySelector("input#inputcity");
  let searchc = document.querySelector("h2#searchcity");
  searchc.innerHTML=inputc.value;
  
  console.log(inputc);
let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputc.value}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);
}



let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let daynow = document.querySelector("#currentday");
daynow.innerHTML = formatDate();

let searchcity = document.querySelector(".btn");
searchcity.addEventListener("click", cityShow);

let searchcityform = document.querySelector(".form-city");
searchcityform.addEventListener("submit", cityShow);




function showWeather(response) {
  let h2 = document.querySelector("h2#searchcity");
   let threecard = document.querySelector("#threecard");
  let temperature = Math.round(response.data.main.temp);
  console.log(threecard);
  h2.innerHTML = `${response.data.name}`;
    threecard.innerHTML = (` ${temperature}`);
}

function showCity(event) {
  
}




function retrievePosition(position) {
   
  let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
console.log(url);
  axios.get(url).then(showWeather);
}

function showCurrentCity(event){
    event.preventDefault();
navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentCity = document.querySelector("#city-current");
currentCity.addEventListener("click", showCurrentCity);





  

