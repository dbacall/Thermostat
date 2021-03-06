function tempToPercent() {
  return ((thermostat.currentTemp()/32) * 100) + "%"
}

function setDisplay() {
  $("#temp").text(thermostat.currentTemp() + " °C");
  $("#temp").css("color", thermostat.usageColour);
  $("#in-progressbar").css("background-color", thermostat.usageColour);
  $("#in-progressbar").css("height", tempToPercent())
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
      $("#psm").text("Power Saving Off")
      $("#psm-btn").text("Turn On Powersaving")
      thermostat.powerSaverOff();
    } else {
      $("#psm").text("Power Saving On")
      $("#psm-btn").text("Turn Off Powersaving")
      thermostat.powerSaverOn();
      setDisplay();
    }

  });

  $( "#reset" ).click(function(){
    
    thermostat.resetTemp()
    setDisplay()

  });

  const imageSelector = (temp) => {
    if (((temp - 273.15)) < 10) {
      return "https://www.gardendecoration.co.uk/library/original/5312255.jpg";
    } else {
      return "http://www.travelblat.com/wp-content/uploads/2014/07/summer-vacation.jpg";
    }
  };

  $.get( `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=52aa889a5f746d2407a3fcfd97904b20`, function( data ) {
    
      
    });

 

  const weatherAPI = (city) => {
    var city = $("#city" ).val()
    $.get( `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=52aa889a5f746d2407a3fcfd97904b20`, function( data ) {
      $( "#current-temp" ).text("Temperature Outside: " + (Math.round((data.main.temp - 273.15))) + " °C")
      $( "#main" ).css("background-image", `url(${imageSelector(data.main.temp)})`)
    });
  }


  $("#city").change(function(){

    var city = $( "city" ).val()
    weatherAPI(city)
    console.log(imageSelector())

  });

});
