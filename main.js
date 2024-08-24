const colors = ["green"];

colors.unshift("red");
colors.push("blue");

for (let i = 0; i < colors.length; i++) {
  let color = colors[i];
  let formattedColor =
    color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
  console.log(`Mój ulubiony kolor to ${formattedColor}`);
}
