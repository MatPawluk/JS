const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
  numbers.push(i);
}

const check = (x) => {
  if (x % 3 === 0 && x !== 0) {
    console.log(`${x} jest podzielne przez trzy`);
  } else {
    console.log(`${x} nie jest podzielne przez trzy lub ${x} = 0`);
  }
};

numbers.forEach(check);
