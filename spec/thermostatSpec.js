describe("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20);

  });

  describe('.up', function(){
    
    it('turns temperature up by 1', function(){
      thermostat.up()
      expect(thermostat.currentTemp()).toEqual(21)
    });
    
  });

  describe('.down', function(){

    it('turns temperature down by 1', function(){
      thermostat.down()
      expect(thermostat.currentTemp()).toEqual(19)
    });

    it('raises an error if temperature reaches 10', function(){
      for(i = 0; i < 10; i++){
        thermostat.down();
      };
      expect(function(){thermostat.down()}).toThrowError("Temperature already at minimum!")
    });

  });

  describe('.powerSaverOn', function(){

    it('sets max temperature to 25', function(){
      thermostat.powerSaverOn()
      for(i = 0; i < 5; i++){
        thermostat.up();
      };
      expect(function(){thermostat.up()}).toThrowError("Temperature already at maximum!")
    });

    it('is on by default', function(){
      thermostat.powerSaverOn()
      for(i = 0; i < 5; i++){
        thermostat.up();
      };
      expect(function(){thermostat.up()}).toThrowError("Temperature already at maximum!")
    });

  });

  describe('.powerSaverOff', function(){

    it('sets max temperature to 32', function(){
      thermostat.powerSaverOff()
      for(i = 0; i < 12; i++){
        thermostat.up();
      };
      expect(function(){thermostat.up()}).toThrowError("Temperature already at maximum!")
    });

  });  

  describe('.resetTemp', function(){

    it('sets temperature to 20', function(){
      thermostat.up()
      expect(thermostat.currentTemp()).toEqual(21)
      thermostat.resetTemp()
      expect(thermostat.currentTemp()).toEqual(20)
    });

  })

  describe('.isUsage', function(){
    
    it('returns low usage when below 18', function(){
      for(i = 0; i < 3; i++){
        thermostat.down();
      };
      expect(thermostat.isUsage()).toEqual("low-usage")
    });

    it('returns medium usage when between 18 and 25', function(){
      expect(thermostat.isUsage()).toEqual("medium-usage")
    });

    it('returns high usage when 25 or higher', function(){
      thermostat.powerSaverOff()
      for(i = 0; i < 12; i++){
        thermostat.up();
      };
      expect(thermostat.isUsage()).toEqual("high-usage")
    });

  });

});
