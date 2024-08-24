const numbers = [1, 5, 12, 26, 48];

function multiply(x) {
  return x * 5;
}

const newNumbers = numbers.map(multiply);
console.log(newNumbers);

for (const number of newNumbers) {
  if (number % 2 === 0) {
    console.log(`liczba jest parzysta: ${number}`);
  } else {
    console.log(`liczba jest nieparzysta: ${number}`);
  }
}
