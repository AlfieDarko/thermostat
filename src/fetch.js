
function getTemperature(city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543038ac6ec11c62ded8555f02ceb1bc`)
    .then(response => response.json())
    .then(function(json){
      setTemperature(city,json.main.temp)
    })
}

function setTemperature(city,kelvin) {
  report = document.getElementById('weather_report')
  celcius = Math.floor(kelvin - 273.15)
  report.innerHTML = `It is ${celcius} degrees in ${city}`
}
