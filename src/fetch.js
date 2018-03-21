var icons = new Skycons({
  "color": "black"
});


function getTemperature(city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543038ac6ec11c62ded8555f02ceb1bc`)
    .then(response => response.json())
    .then(function(json) {
      setTemperature(city, json.main.temp)
      setWeather(json.weather[0].main, json.weather[0].description, json.weather[0].icon)
    })
}

function setTemperature(city, kelvin) {
  report = document.getElementById('weather_report')
  celcius = Math.floor(kelvin - 273.15)
  report.innerHTML = `It is ${celcius} degrees in ${city}`
}

function setWeather(main, description, icon) {
  console.log(main);

  holder1 = document.getElementById('weather_today')
  holder2 = document.getElementById('description_today')
  holder3 = document.getElementById('icon_today')

  holder1.innerHTML = `Weather Forecast says: ${main}`
  holder2.innerHTML = `Mystic Meg says: ${description}`
  holder2.innerHTML = `Mystic Meg says: ${description}`

  //VERY LONG SWITCH STATEMENT!
  switch (icon) {
    case '01n':
      holder3.innerHTML = '<figure class="icons">	<canvas id="clear-night" width="64" height="64"></canvas></figure>'
      icons.set("clear-night", Skycons.CLEAR_NIGHT);
      icons.play();
      break;
    case '01d':
      holder3.innerHTML = '<figure class="icons"><canvas id="clear-day" width="64" height="64"></canvas></figure>'
      icons.set("clear-day", Skycons.CLEAR_DAY);
      icons.play();
      break;
    case '10d':
    case '10n':
      holder3.innerHTML = '<figure class="icons"><canvas id="rain" width="64" height="64"></canvas></figure>'
      icons.set("rain", Skycons.RAIN);
      icons.play();
      break;
    case '02n':
      holder3.innerHTML = '<figure class="icons"><canvas id="partly-cloudy-night" width="64" height="64"></canvas></figure>'
      icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
      icons.play();
      break;
    case '02d':
      holder3.innerHTML = '<figure class="icons"><canvas id="partly-cloudy-day" width="64" height="64"></canvas></figure>'
      icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
      icons.play();
      break;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      holder3.innerHTML = '<figure class="icons"> <canvas id="cloudy" width="64" height="64"></canvas></figure>'
      icons.set("cloudy", Skycons.CLOUDY);
      icons.play();
      break;
    case '09d':
    case '09n':
    case '11d':
    case '11n':
      holder3.innerHTML = '<figure class="icons"> <canvas id="sleet" width="64" height="64"></canvas></figure>'
      icons.set("sleet", Skycons.SLEET);
      icons.play();
      break;
    case '13d':
    case '13n':
      holder3.innerHTML = '<figure class="icons"> <canvas id="snow" width="64" height="64"></canvas></figure>'
      icons.set("snow", Skycons.SNOW);
      icons.play();
      break;
    case '50d':
    case '50n':
      holder3.innerHTML = '<figure class="icons"> <canvas id="fog" width="64" height="64"></canvas></figure>'
      icons.set("fog", Skycons.FOG);
      icons.play();
      break;
  }
  // END OF VERY LONG SWITCH STATEMENT



}