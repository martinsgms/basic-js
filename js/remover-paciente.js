var tabela = document.querySelector("#tabela-pacientes");

// evento relacionado ao pai das linhas (eventos nos filhos sobem, o pai escuta e executa a function)
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});


/* não funciona com registros novos -> evento acoplado aos itens 
pacientes.forEach(p => {
    p.addEventListener("dblclick", function() {
        this.remove();
    })
});
*/
