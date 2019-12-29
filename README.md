# Thermostat Challenge

A project that has the functionality of a thermostat, and our first attempt at creating something using Javascript and it's surrounding tchnologies.

## Specification

```
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
```

## Technologies used

- Javascript
- Jasmine
- JQuery
- Ajax
- Sinatra

## How run app

- Fork this repository and clone to your local system, then:
```
$ rackup
$ open http://localhost:9292
```

## How run tests

Run `open SpecRunner.html`

