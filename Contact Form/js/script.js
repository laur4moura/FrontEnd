function validarFormulario(){

    let quantidadeErros = 0;

    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let email = document.getElementById("email");
    let pais = document.getElementById("pais");
    let ddd = document.getElementById("ddd");
    let telefone = document.getElementById("telefone");
    let cep = document.getElementById("cep");
    let rua = document.getElementById("rua");
    let numeroCasa = document.getElementById("numeroCasa");
    let complemento = document.getElementById("complemento");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    if(!nome || nome.value.trim().length == 0){
        formError("nome");
        quantidadeErros++;
    }else{
        reiniciaBorda("nome");
    }

    if(!sobrenome || sobrenome.value.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
    }else{
        reiniciaBorda("sobrenome");
    }

    if(!email || email.value.trim().length == 0){
        formError("email");
        quantidadeErros++;
    }else{
        reiniciaBorda("email");
    }

    if(!pais || pais.value.trim().length == 0){
        formError("pais");
        quantidadeErros++;
    }else{
        reiniciaBorda("pais");
    }

    if(!ddd || ddd.value.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
    }else{
        reiniciaBorda("ddd");
    }

    if(!telefone || telefone.value.trim().length == 0){
        formError("telefone");
        quantidadeErros++;
    }else{
        reiniciaBorda("telefone");
    }

    if(!cep || cep.value.trim().length == 0){
        formError("cep");
        quantidadeErros++;
    }else{
        reiniciaBorda("cep");
    }

    if(!rua || rua.value.trim().length == 0){
        formError("rua");
        quantidadeErros++;
    }else{
        reiniciaBorda("rua");
    }

    if(!numeroCasa || numeroCasa.value.trim().length == 0){
        formError("numeroCasa");
        quantidadeErros++;
    }else{
        reiniciaBorda("numeroCasa");
    }

    if(!complemento || complemento.value.trim().length == 0){
        formError("complemento");
        quantidadeErros++;
    }else{
        reiniciaBorda("complemento");
    }

    if(!bairro || bairro.value.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
    }else{
        reiniciaBorda("bairro");
    }

    if(!cidade || cidade.value.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
    }else{
        reiniciaBorda("cidade");
    }

    if(!estado || estado.value.trim().length == 0){
        formError("estado");
        quantidadeErros++;
    }else{
        reiniciaBorda("estado");
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário!");
    }else{
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "";
}

function reiniciaTodasAsBordas(){
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(function(campo){
        campo.style.border = "";
    });
}