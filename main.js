const numbers = [1, 2, 3];
const food = ["burger", "schabowy", "pizza"];

const newArry2 = numbers.concat(food);
console.log(newArry2);

const newArry = [...numbers, ...food];
console.log(newArry);
