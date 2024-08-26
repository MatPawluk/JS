const heading = document.querySelector("h1");
const par = document.querySelectorAll("p");
const firstThreeParagraphs = Array.from(par).slice(0, 3);
const div = document.querySelector(".test");
const divP = div.querySelector("#test");

console.log(heading);
console.log(firstThreeParagraphs);
console.log(div);
console.log(divP);
