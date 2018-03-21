$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#up").click(function() {
    thermostat.up(1)

    $(temp)
      .text(thermostat.temp);
  })

  $("#down").click(function() {
    thermostat.down(1)
    $(temp)
      .text(
        thermostat.temp);
  })

  $("#powerSaveMode").click(function() {

    if (!thermostat.powerSave) {
      thermostat.powerSaveMode(true)
      $(powerSaveModeDiv)
        .text("Power Save Mode on");

    } else if (thermostat.powerSave) {
      thermostat.powerSaveMode(false)
      $(powerSaveModeDiv)
        .text("Power Save Mode off");
    }
  })

  $("#reset").click(function() {
    thermostat.reset()

    $(temp)
      .text(thermostat.temp);
  })




});
