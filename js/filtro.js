var filtro = document.getElementById("filtro");

filtro.addEventListener("input", function() {
    nomes = document.querySelectorAll(".paciente");
    nomes.forEach(n => {
        nome = n.querySelector(".info-nome").textContent;

        if(this.value.length > 0) {
            if(new RegExp(this.value, "i").test(nome))
                n.classList.remove("invisivel");
            else 
                n.classList.add("invisivel");
        } else 
            n.classList.remove("invisivel");  
    });
});