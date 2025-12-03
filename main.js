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

document.querySelector("form").addEventListener("input", ev => ev.preventDefault())

const runOperations = (numberA, numberB) => {
  typeof(numberA)
  soma.textContent = numberA + numberB
  subtracao.textContent = numberA - numberB
  divisao.textContent = numberA / numberB
  multiplicacao.textContent = numberA * numberB
}

showSum.addEventListener("click", (ev) => {
  ev.preventDefault();
  runOperations(inputA, inputB)
})