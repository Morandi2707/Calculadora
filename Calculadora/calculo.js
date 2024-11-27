const caixaAltura = document.getElementById("box-heigth");
const caixaLargura = document.getElementById("box-width");
const butao = document.getElementById("calculate");
const valor = document.getElementById("valor");
const dell = document.getElementById("delete");

function calculateWidthAndHeight() {
  const constante = 3.5;
  const calculo1 = Math.trunc(caixaAltura.value / constante);
  const calculo2 = Math.trunc(caixaLargura.value / constante);
  const calculo = calculo1 * calculo2;
  const resultado = Math.trunc(calculo);
}

const evento = butao.addEventListener("click", () => {
  const constante = 3.5;
  const calculo1 = Math.trunc(caixaAltura.value / constante);
  const calculo2 = Math.trunc(caixaLargura.value / constante);
  const calculo = calculo1 * calculo2;
  const resultado = Math.trunc(calculo);
  valor.innerHTML = `o valor é ${resultado}`;
  if (caixaAltura.value % constante === 0) {
    valor.innerHTML = `Exato no comprimento, resultado: ${resultado}`;
  }
  if (caixaLargura.value % constante === 0) {
    valor.innerHTML = `Exato na largura, resultado: ${resultado}`;
  }
});

const excluir = dell.addEventListener("click", () => {
  dell.removeEventListener("click", calculate);
  valor.innerHTML = "Evento Deletado";
});
