var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema Nutrição";

calculaTodosImc();

function calculaTodosImc() {
    pacientes = document.querySelectorAll(".paciente");

    for (i = 0; i < pacientes.length; i++){
        const paciente = pacientes[i];
    
        pesoValue = paciente.querySelector(".info-peso").textContent;
        alturaValue = paciente.querySelector(".info-altura").textContent;
        imcField = paciente.querySelector(".info-imc");

        imcField.textContent = imc(pesoValue, alturaValue);

        classifyImcResult(paciente);
    }
}

function classifyImcResult(paciente) {
    imcValue = paciente.querySelector(".info-imc").textContent;

    if(imcValue < 18.5) {
        result = 'Abaixo do peso';
        indicator = "abaixoPeso-indicator";
        
    } else if(imcValue >= 18.5 && imcValue < 24.5) {
        result = 'Normal';
        indicator = "pesoNormal-indicator";
        
    } else if(imcValue >= 25 && imcValue < 29.9) {
        result = 'Sobrepeso';
        indicator = "sobrePeso-indicator";
        
    } else if (imcValue >= 30){
        result = 'Obeso';
        indicator = "obeso-indicator";
    
    } else {
        result = 'ERROR';
        indicator = "error-indicator";
    }

    resultadoImcField = paciente.querySelector(".info-imc-resultado");

    resultadoImcField.textContent = result;
    resultadoImcField.classList.add(indicator);

}

function imc(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed("2");
}




