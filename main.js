let celsius;
let temp;

const fahrenheit = (c) => {
  celsius = c;
  temp = c * 1.8 + 32;
  console.log(`${celsius}°C = ${temp}°F`);
};

fahrenheit(10);
