$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#up").click(function() {
    thermostat.up(1)
    reloadTemp()
  })

  $("#down").click(function() {
    thermostat.down(1)
    reloadTemp()
  })

  $("#reset").click(function() {
    thermostat.reset()
    reloadTemp()
  })

  function reloadTemp() {
    $(temp)
      .replaceWith("<div id='temp'>" +
        thermostat.temp + "</div>");
  }

  $("#powerSaveMode").click(function() {

    if (!thermostat.powerSave) {
      thermostat.powerSaveMode(true)
      $(powerSaveModeDiv)
        .replaceWith(
          "<div id='powerSaveModeDiv'>" +
          "Power Save Mode on" +
          "</div>");

    } else if (thermostat.powerSave) {
      thermostat.powerSaveMode(false)
      $(powerSaveModeDiv)
        .replaceWith(
          "<div id='powerSaveModeDiv'>" +
          "Power Save Mode off" +
          "</div>");
    }
  })

});
