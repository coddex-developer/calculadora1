const inputA = document.getElementById("nmA");
const inputB = document.getElementById("nmB");
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
  
  soma.textContent = parseFloat(numberA) + parseFloat(numberB)
  subtracao.textContent = parseInt(numberA) - parseInt(numberB)
  divisao.textContent = parseInt(numberA) / parseInt(numberB)
  multiplicacao.textContent = parseInt(numberA) * parseInt(numberB)
}

showSum.addEventListener("click", (ev) => {
  ev.preventDefault();
  runOperations(parseInt(inputA.value), parseInt(inputB.value))
})