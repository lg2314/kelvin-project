// The temperature in Kelvin
const kelvin = 293;

//The temperature in Celcius
var celcius = (kelvin -  273);

//The temperature in Farenheit rounded down
var farenheit = (Math.floor(celcius * (9/5) + 32));

//The temperature in Newton
var newton = (celcius * (33/100));

console.log(`The temperature is ${farenheit} degrees farenheit.`);
