$(document).ready(function() {

  var icons = new Skycons({
    "color": "white"
  });


  function getTemperature(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543038ac6ec11c62ded8555f02ceb1bc`)
      .then(response => response.json())
      .then(function(json) {
        setTemperature(city, json.main.temp)
        // console.log(json.main.temp);
        // setWeather(json)
        // console.log(json.weather[{
        //   'description'
        // }]);
        // console.log(json.weather[{
        //   'icon'
        // }]);

        setWeather(

          json.weather[main],
          json.weather[description],
          json.weather[icon]
        )

      })
  }

  function setTemperature(city, kelvin) {
    report = document.getElementById('weather_report')
    celcius = Math.floor(kelvin - 273.15)
    report.innerHTML = `It is ${celcius} degrees in ${city}`
  }

  function setWeather(json) {


    console.log(json.weather);
    console.log(json.description);
    console.log(json.icon);

    json.weather = document.getElementById('weather_today')
    // description = document.getElementsById('weather_today_description')
    // switch (icon) {
  }




});