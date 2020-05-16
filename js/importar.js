var importar = document.getElementById("importar");

importar.addEventListener("click", function(event) {
    event.preventDefault();
    http = new XMLHttpRequest();

    http.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    http.addEventListener("load", function() {
        
        if(http.status != 200){
            messages("error", "Erro ao importar os Pacientes");
            return;
        }

        response = JSON.parse(http.responseText);
        response.forEach(object => {
            createRow(object);
        });
        messages("success", "Pacientes importados com sucesso")
    });
    http.send();
});