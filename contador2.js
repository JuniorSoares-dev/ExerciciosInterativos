//PARTE 2 

let contador = document.getElementById("contador");   // pega a div onde o número aparece

// BOTÃO DE INCREMENTO (+)
document.getElementById("inc").addEventListener("click", function() {   // escuta clique no botão +
    
    let valor = Number(contador.textContent);   // pega o número atual (que é texto) e converte para número
    contador.textContent = valor + 1;           // soma 1 e coloca de volta na tela
});

// BOTÃO DE DECREMENTO (-)
document.getElementById("dec").addEventListener("click", function() {   // escuta clique no botão -
    
    let valor = Number(contador.textContent);   // pega o valor atual
    
    if (valor > 0) {                             // impede que o contador fique negativo
        contador.textContent = valor - 1;        // subtrai 1
    }
});



// BOTÃO DE RESET
document.getElementById("reset").addEventListener("click", function() { // escuta clique no botão reset
    
    contador.textContent = 0;                   // coloca o contador de volta para 0
});




 
