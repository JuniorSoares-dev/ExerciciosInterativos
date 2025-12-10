let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");

function botaoSomar(){
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);

    let soma = (valor1 + valor2);

    let resultado = document.getElementById("resultado").textContent = soma;

    input1.value = ''
    input2.value = ''
