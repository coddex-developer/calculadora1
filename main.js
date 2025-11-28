const inputA = document.getElementById("nmA").value;
const inputB = document.getElementById("nmB").value;
const showSum = document.getElementById("sum");
const versionInfo = document.querySelector(".versionInfo");
const modalShow = document.getElementById("modalShow");
const modalClose = document.getElementById("modalClose");
const closeError = document.getElementById("closeError");
const options = document.getElementById("options");
const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");

const objCalc = {
  sum: inputA + inputB,
  subtract: inputA - inputB,
  division: inputA / inputB
};
const {sum} = objCalc;
const {subtract} = objCalc;
const {division} = objCalc;

document.querySelector("form")

showSum.addEventListener("click", (ev) => {
  ev.preventDefault();
  
})