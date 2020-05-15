var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema Nutrição";

pacientes = document.querySelectorAll(".paciente");
calculaTodosImc();

function calculaTodosImc() {
    for (i = 0; i < pacientes.length; i++){
        const paciente = pacientes[i];
    
        peso = paciente.querySelector(".info-peso").textContent;
        altura = paciente.querySelector(".info-altura").textContent;
        imcField = paciente.querySelector(".info-imc");
        resultadoImc = paciente.querySelector(".info-imc-resultado");
    
        imcValue = imc(peso, altura);
        imcField.textContent = imcValue;
    
        if(imcValue < 18.5) {
            result = 'Abaixo do peso';
            indicator = "abaixoPeso-indicator";
            
        } else if(imcValue >= 18.5 && imcValue < 24.5) {
            result = 'Normal';
            indicator = "pesoNormal-indicator";
            
        } else if(imcValue >= 25 && imcValue < 29.9) {
            result = 'Sobrepeso';
            indicator = "sobrePeso-indicator";
            
        } else {
            result = 'Obeso';
            indicator = "obeso-indicator";
        }
        
        resultadoImc.textContent = result;
        resultadoImc.classList.add(indicator);
        
        /*  
            é possível alterar o css diretamente no js, mas n é boa prática
            uma vez que os estilos devem estar no arquivo de css
            por isso, devemos atribuir o elemento a uma classe do css
    
            resultadoImc.style.backgroundColor = resultColor;
        */
    
    }
}

function imc(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed("2");
}

btnAdiciona = document.getElementById("adicionar");
btnAdiciona.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("oi");

    nomeValue = document.getElementById("form-nome").value;
    pesoValue = document.getElementById("form-peso").value;
    alturaValue = document.getElementById("form-altura").value;
    gorduraValue = document.getElementById("form-gordura").value;

    pacientesElement = document.getElementById("tabela-pacientes");
    
    nomeElement = document.createElement("td");
    pesoElement = document.createElement("td");
    alturaElement = document.createElement("td");
    gorduraElement = document.createElement("td");
    imcElement = document.createElement("td");
    resultadoElement = document.createElement("td");
    
    nomeElement.innerText = nomeValue;
    pesoElement.innerText = pesoValue;
    alturaElement.innerText = alturaValue;
    gorduraElement.innerText = gorduraValue;
    imcElement.innerText = imc(pesoValue, alturaValue);
    resultadoElement.innerText = '';

    linha = document.createElement("tr");
    linha.classList.add("paciente");

    linha.appendChild(nomeElement);
    linha.appendChild(pesoElement);
    linha.appendChild(alturaElement);
    linha.appendChild(gorduraElement);
    linha.appendChild(imcElement);
    linha.appendChild(resultadoElement);

    pacientesElement.appendChild(linha);
});
