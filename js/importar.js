var importar = document.getElementById("importar");

importar.addEventListener("click", function(event) {
    event.preventDefault();
    http = new XMLHttpRequest();

    http.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    http.addEventListener("load", function() {
        response = JSON.parse(http.responseText);

        response.forEach(object => {
            createRow(object);
        });
    });
    http.send();
});