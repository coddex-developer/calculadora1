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

document.querySelector("form").addEventListener("input", ev => ev.preventDefault())

showSum.addEventListener("click", (ev) => {
  ev.preventDefault();
  if(inputA == "") return alert("Preencha todos os campus!");
  if(inputB == "") return alert("Preencha todos os campus!");
  if(tyoeof(inputA) !== number) return alert("Número inválido");
  if(typeof(inputB) !== number) return alert("Número inválido!");
  
})