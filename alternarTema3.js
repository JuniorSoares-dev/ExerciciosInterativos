let caixa = document.getElementById("caixa"); // pega a div com id="caixa"
let botao = document.getElementById("btnToggle"); // pega o botão que alterna o tema

function alternarTema() { 
    caixa.classList.toggle("escuro"); // adiciona/remove a classe "escuro" sempre que chamada
}

caixa.addEventListener("click", alternarTema); // quando clicar na caixa → chama alternarTema()
botao.addEventListener("click", alternarTema); // quando clicar no botão → chama alternarTema()
