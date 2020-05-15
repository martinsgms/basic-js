btnAdiciona = document.getElementById("adicionar");
messagesList = document.getElementById("messages");
    

btnAdiciona.addEventListener("click", function(event) {
    event.preventDefault();
    
    messagesList.innerHTML = "";

    form = document.getElementById("form-adiciona");
    paciente = getPaciente(form);

    var errors = [];
    errors = validatePaciente(paciente);

    if(errors.length > 0) {
        errors.forEach(error => {
            messages("error", error);
        }); 
        return;
    }

    createRow(paciente);
    messages("success", "Paciente adicionado com sucesso!")
    form.reset();
});

function createRow(paciente) {
    
    linha = document.createElement("tr");
    linha.classList.add("paciente");

    linha.appendChild(generateField(paciente.nome, "nome"));
    linha.appendChild(generateField(paciente.peso, "peso"));

    linha.appendChild(generateField(paciente.altura, "altura"));
    linha.appendChild(generateField(paciente.gordura, "gordura"));
    linha.appendChild(generateField(paciente.imc, "imc"));
    linha.appendChild(generateField(paciente.resultado, "imc-resultado"));

    tabela = document.getElementById("tabela-pacientes");
    tabela.appendChild(linha);

    classifyImcResult(linha)
}

function getPaciente(form) {
    
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: imc(form.peso.value, form.altura.value),
        resultadoImc: ''
    }

    console.log(paciente);
    
    return paciente;
}

function generateField(data, clazz) {
    field = document.createElement("td");
    field.classList.add("info-" + clazz);
    field.innerText = data;
    return field;
}

function validatePaciente(paciente) {
    var errors = [];

    if (paciente.nome.length == 0 || paciente.nome.match("\\s+") != null)
        errors.push("Preencha o campo Nome");

    if (paciente.peso.length == 0 || paciente.peso.match("\\s+") != null)
        errors.push("Preencha o campo Peso");
        
    if (paciente.altura.length == 0 || paciente.altura.match("\\s+") != null)
        errors.push("Preencha o campo Altura");
        
    if (paciente.gordura.length == 0 || paciente.gordura.match("\\s+") != null)
        errors.push("Preencha o campo Gordura");
        
    if (paciente.peso < 0 || paciente.peso > 200)
        errors.push("Peso inválido");
    
    if (paciente.altura < 0 || paciente.altura > 3)
        errors.push("Altura inválida");

    if (paciente.gordura < 0)
        errors.push("Gordura inválida");
    
    return errors;
}

function messages(type, message) {
    item = document.createElement("li");

    item.className = type;
    item.innerText = message;
    
    messagesList.appendChild(item);
}
