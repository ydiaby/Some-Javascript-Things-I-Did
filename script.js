let input = document.querySelector("#input")
let button = document.querySelector("#button")




button.addEventListener("click" , e =>{
  let searchInput = input.value 
  sendApiRequest(searchInput)
  console.log("Button pressed !")
})




function sendApiRequest(x) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=8bc34570848c57e0764269143ff45531"
)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
      weatherDataFromAPI(json)
    });
};

let input2 = document.querySelector("#input2")
let button2 = document.querySelector("#button2")

button2.addEventListener("click" , e =>{
  let searchInput2 = input2.value 
sendApiRequest_Two(searchInput2)
  console.log("Button pressed !")
})

function sendApiRequest_Two(zip) {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip="+zip+"&appid=8bc34570848c57e0764269143ff45531"
)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
      weatherDataFromAPI(json)
    });
};


function weatherDataFromAPI(data){
  console.log("It works")
  console.log(data.coord)
  let city = document.querySelector("#city")
  let latitude = document.querySelector("#latitude")
  let longitude = document.querySelector("#longitude")
  let maxtemp = document.querySelector("#maxtemp")
  let mintemp = document.querySelector("#mintemp")
  let humidity = document.querySelector("#humidity")
  let weather = document.querySelector("#weather")
  city.innerHTML = "The city is: " + data.name 
  latitude.innerHTML = "The latitude is: " + data.coord.lat
  longitude.innerHTML = "The longitude is: " + data.coord.lon
  maxtemp.innerHTML = "The maximum temperature is: " + data.main.temp_max
  mintemp.innerHTML = "The maximum temperature is :" + data.main.temp_min 
  humidity.innerHTML = "The humidity is: " + data.main.humidity
  weather.innerHTML = "The weather is: " + data.weather[0].main
}
