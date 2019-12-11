function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true
  this.max = 25
  this.usageColour = "black"
}

const MINIMUM = 10


Thermostat.prototype.currentTemp = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if(this.temperature == this.max){throw new Error("Temperature already at maximum!")}
  this.temperature ++
  this._colourSetter();
};

Thermostat.prototype.down = function(){
  if (this.temperature == MINIMUM){throw new Error("Temperature already at minimum!")}
  this.temperature --
  this._colourSetter();
};

Thermostat.prototype.powerSaverOn = function(){
  this.powerSaving = true
  this.max = 25
};

Thermostat.prototype.powerSaverOff = function(){
  this.powerSaving = true
  this.max = 32
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20
};

Thermostat.prototype.isUsage = function(){
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature >= 18 && this.temperature < 25) {
    return "medium-usage";
  } else
    return "high-usage";
}

Thermostat.prototype._colourSetter = function(){
  if (this.temperature < 18) {
    this.usageColour = 'green';
  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.usageColour = 'black';
  } else
    this.usageColour = 'red';
};