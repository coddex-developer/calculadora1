const A = document.getElementById("nmA").value();
const B = document.getElementById("nmB").value();
const sum = document.getElementById("sum");
const error = document.getElementById("error");
const versionInfo = document.querySelector(".versionInfo");
const modalShow = document.getElementById("modalShow");
const modalClose = document.getElementById("modalClose");
const closeError = document.getElementById("closeError");
const options = document.getElementById("options");
const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");

//Funcão de mostrar Atualizacoes no modal
versionInfo.addEventListener('click', () => {
  modalShow.classList.add("modalOn")
});

//Funcão de mostrar Atualizacoes no modal
modalClose.addEventListener('click', () => {
  modalShow.classList.remove("modalOn")
});


//Função de limpar campos
function ClearFields() {
  document.getElementById("btnDelete").addEventListener("click", () => {
    nmA.value = "";
    nmB.value = "";
    soma.textContent = "_/_";
    subtracao.textContent = "_/_";
    multiplicacao.textContent = "_/_";
    divisao.textContent = "_/_";
    options.classList.remove("func");
    nmA.focus();
  });
}

//Evento de copiar resultados
document.getElementById("btnCopy").addEventListener("click", () => {
  Number(A.value)
  Number(B.value)
  const listCopy = `
📄 *Resultado dos cálculos de ${A} e ${B}:* 

=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=
      
*Soma:* ${A + B}
*Subtração:* ${A - B}
*Multiplicação:* ${A * B}
*Divisão:* ${A / B}

=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=


☆ _Developed by CodeCraft_
`;

  navigator.clipboard.writeText(listCopy)
});

//Evento para realizar operações
sum.addEventListener("click", ev => {
  ev.preventDefault();
  
  if (A.value === "") {
    A.style = "border: 2px solid red";
    A.focus();
  } else if (B.value === "") {
    B.style = "border: 2px solid red";
    B.focus();
  } else if (A.value > 0) {
    A.style = "border: 0";
  } else if (B.value > 0) {
    A.style = "border: 0";
  }

    soma.textContent = A + B;
    subtracao.textContent = A - B;
    multiplicacao.textContent = A * B;
    divisao.textContent = A / B;
    options.classList.add("func");

});

ClearFields();
