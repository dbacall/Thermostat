function setDisplay() {
  $("#temp").text(thermostat.currentTemp());
  $("#temp").css("color", thermostat.usageColour)
}

$( document ).ready(function() {
  
  thermostat = new Thermostat()
  setDisplay()

  $( "#up" ).click(function() {
  
    try {thermostat.up();
      setDisplay();
    } catch(err) {
      alert("Temperature already at maximum!")
    }

  });

  $( "#down" ).click(function(){

    try {thermostat.down();
      setDisplay();
    } catch(err) {
      alert("Temperature already at minimum!")
    }

  });

  $( "#psm-btn" ).click(function(){

    if (thermostat.powerSaving === true){
      $("#psm").text("PSM Off")
      $("#psm-btn").text("Turn On Powersaving")
      thermostat.powerSaverOff();
    } else {
      $("#psm").text("PSM On")
      $("#psm-btn").text("Turn Off Powersaving")
      thermostat.powerSaverOn();
      setDisplay();
    }

  });

  $( "#reset" ).click(function(){
    
    thermostat.resetTemp()
    setDisplay()

  });

  $("#city").change(function(){

    var city = $("#city" ).val()
    $.getJSON( `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=52aa889a5f746d2407a3fcfd97904b20`, function( data ) {
      $( "#current-temp" ).text("Temperature Outside: " + (Math.round((data.main.temp - 273.15))) + " Degrees Celsius")
    });

  });

});
