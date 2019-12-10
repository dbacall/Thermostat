describe("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20);

  });

  describe('.up', function(){
    
    it('turns temperature up by 2', function(){
      thermostat.up(2)
      expect(thermostat.currentTemp()).toEqual(22)
    });

    it('turns temperature up by 5', function(){
      thermostat.up(5)
      expect(thermostat.currentTemp()).toEqual(25)
    });
    
  });

});
