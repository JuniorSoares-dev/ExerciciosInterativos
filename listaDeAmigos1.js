function amigo() {
    let amigoInp = document.getElementById ("amigoInput");
    let botaoAdicionar = document.getElementById ("btnAdd");
    let lista = document.getElementById ("listaAmigos");
    let limparLista = document.getElementById ("btnLimpar");


    if (amigoInp.value == '') { 
        alert("Digite o nome do amigo");
    } else {
        if (lista.textContent == '') {
            lista.textContent = amigoInp.value;
        } else {
            lista.textContent += ', ' + amigoInp.value;
        }
        amigoInp.value = ''; // limpa o campo
    }
}
 
function limparLista(){
let lista = document.getElementById ("listaAmigos"); //REPETI A VARIAVEL LISTA POR COMPLETO PORQUE ELA ESTA "DENTRO" DA FUNÇAO AMIGO()
lista.textContent = '';
 }
//AO PRECIONAR ENTER O AMIGO IR PARA A LISTA
 let amigoInp = document.getElementById ("amigoInput");
 
amigoInp.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        amigo();
    }
});

