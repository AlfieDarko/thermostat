describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starting temperature', function() {
    it("has a starting temperature of 20", function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#up', function() {
    it("You can increase the temperature with an `up` function", function() {
      thermostat.up(4);
      expect(thermostat.temp).toEqual(24);
    });

    it("You cant go above 32 degrees on the thermostat", function() {
      expect(thermostat.up(15)).toEqual("Maximum temp reached");
    });
  });

  describe('#down', function() {
    it("You can decrease the temperature with a `down` function", function() {
      thermostat.down(6);
      expect(thermostat.temp).toEqual(14);
    });

    it("You cant go below 10 degrees on the thermostat", function() {
      expect(thermostat.down(15)).toEqual("Minimum temp reached");
    });
  });

  describe('#powerSaveMode', function() {
    it("I can turn on power saving mode", function() {
      thermostat.powerSaveMode(true)
      expect(thermostat.powerSave).toEqual(true);
    });

    it("I can turn off power saving mode", function() {
      thermostat.powerSaveMode(false)
      expect(thermostat.powerSave).toEqual(false);
    });

    it("when powerSaveMode is on, max temp is 25", function() {
      thermostat.powerSaveMode(true)
      expect(thermostat.up(6)).toEqual("Maximum temp reached");
    });

    it("if temperature is above 25 powerSaveMode reduces it to 25", function(){
      thermostat.up(10)
      thermostat.powerSaveMode(true)
      expect(thermostat.temp).toEqual(25);
    });

    it("when powerSaveMode is of, max temp is 32 ", function() {
      thermostat.powerSaveMode(false)
      expect(thermostat.up(13)).toEqual("Maximum temp reached");
    });
  });

  describe('#reset', function() {
    it("when reset button is pressed, temp is 20 ", function() {
      thermostat.reset()
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('energy usage property', function() {
    it("has an energy usage state of 'low-usage' when <18", function() {
      thermostat.down(5);
      expect(thermostat.energyUsage).toEqual("low-usage");
    });

    it("has an energy usage state of 'medium-usage' when 19<temp<25", function() {
      expect(thermostat.energyUsage).toEqual("medium-usage");
    });

    it("has an energy usage state of 'high-usage' when >=25", function() {
      thermostat.up(5);
      expect(thermostat.energyUsage).toEqual("high-usage");
    });
  });

});
