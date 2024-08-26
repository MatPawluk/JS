const ulList = document.createElement("ul");

document.body.append(ulList);

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  const par = document.createElement("p");
  par.textContent = i;
  ulList.append(li);
  li.append(par);
}

const lastLi = ulList.lastChild;
const lastPar = lastLi.querySelector("p");

lastLi.style.backgroundColor = "blue";
lastLi.style.paddingBlock = "20px";
lastLi.style.paddingInline = "40px";
lastLi.style.fontSize = "48px";

lastPar.textContent = "Jestem ostatnim paragrafem";
