

$( document ).ready(function() {
  
  thermostat = new Thermostat()

  $("#psm").text("PSM On")

  $("#temp").text(thermostat.currentTemp());

  $( "#up" ).click(function() {
  
    try {thermostat.up();
    $("#temp").text(thermostat.currentTemp());
    } catch(err) {
      alert("Temperature already at maximum!")
    }
  });

  $( "#down" ).click(function(){

    try {thermostat.down();
    $("#temp").text(thermostat.currentTemp());
    } catch(err) {
      alert("Temperature already at minimum!")
    }

  });

  

  $("#psm-btn").click(function(){

    if (thermostat.powerSaving === true){
      $("#psm").text("PSM Off")
      $("#psm-btn").text("Turn On Powersaving")
      thermostat.powerSaverOff();
    } else
      {$("#psm").text("PSM On")
      $("#psm-btn").text("Turn Off Powersaving")
      thermostat.powerSaverOn();}

  });



});
