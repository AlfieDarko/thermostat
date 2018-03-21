$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#up").click(function() {
    console.log(thermostat.temp);
  });


});