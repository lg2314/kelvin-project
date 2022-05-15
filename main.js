// The forecast today
const kelvin = 293;

// The forecast in celsius
const celcius = kelvin - 273;

// The forecast in farenheit
let farenheit = celcius * (9/5) + 32;

// Farenheit rounded down
farenheit = Math.floor(farenheit);

// Temperature in farenheit
console.log('The temperature is ${farenheit} degrees Farenheit.');
