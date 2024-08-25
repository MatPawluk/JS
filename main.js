const cars = "Audi, Mercedes, BMW, Nissan, Dogdge";

const newCars = cars.split(", ");
console.log(newCars);

if (newCars.length > 3) {
  console.log("Jest OK");
} else {
  console.log("Nie jest OK");
}

newCars.includes("Audi") ? newCars.push("Ford") : newCars.pop();
console.log(newCars);
