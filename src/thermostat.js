function Thermostat() {
  this.temp = 20;

  this.powerSave = true
  this.energyUsage = "medium-usage";

  if (this.powerSave == true) {
    this.maxTemp = 25
  } else if (this.powerSave == false) {
    this.maxTemp = 32
  }

};

Thermostat.prototype.reset = function() {
  this.temp = 20
  this.energyUsageCheck()
};

Thermostat.prototype.powerSaveMode = function(bool) {
  if (bool) {
    this.powerSave = true
    this.maxTemp = 25
    return "Power Save Mode On"

  } else {
    this.powerSave = false
    this.maxTemp = 32
    return "Power Save Mode Off"

  }
};

Thermostat.prototype.up = function(number) {

  result = this.temp + number

  if (result > this.maxTemp) {
    return "Max temp reached";
  } else {
    this.temp += number;
  }

  this.energyUsageCheck()
};

Thermostat.prototype.down = function(number) {

  result = this.temp - number

  if (result < 10) {
    return "Minimum temp reached"
  } else {
    this.temp -= number;
  }

  this.energyUsageCheck()
};

Thermostat.prototype.energyUsageCheck = function() {
  if (this.temp < 18) {
    this.energyUsage = "low-usage";
  } else if (this.temp > 18 && this.temp < 25) {
    this.energyUsage = "medium-usage";
  } else {
    this.energyUsage = "high-usage";
  }
}