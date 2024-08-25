let score;

const add = (x, y) => {
  score = x + y;
  if (score % 2 === 0) {
    console.log(`Liczba ${score} jest parzysta`);
  } else {
    console.log(`Liczba ${score} jest nieparzysta`);
  }
};

add(5, 2);
