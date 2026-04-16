function validarFormulario(){

    let quantidadeErros = 0;

    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let email = document.getElementById("email");
    let pais = document.getElementById("pais");
    let ddd = document.getElementById("ddd");
    let telefone = document.getElementById("numero");
    let cep = document.getElementById("cep");
    let rua = document.getElementById("rua");
    let numeroCasa = document.getElementById("numeroCasa");
    let complemento = document.getElementById("complemento");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");
    let anotacoes = document.getElementById("anotacoes");

    if(nome.value.trim().length == 0){
        formError("nome");
        quantidadeErros++;
    }else{
        reiniciaBorda("nome");
    }

    if(sobrenome.value.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
    }else{
        reiniciaBorda("sobrenome");
    }

    if(email.value.trim().length == 0){
        formError("email");
        quantidadeErros++;
    }else{
        reiniciaBorda("email");
    }

    if(pais.value.trim().length == 0){
        formError("pais");
        quantidadeErros++;
    }else{
        reiniciaBorda("pais");
    }

    if(ddd.value.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
    }else{
        reiniciaBorda("ddd");
    }

    if(telefone.value.trim().length == 0){
        formError("numero");
        quantidadeErros++;
    }else{
        reiniciaBorda("numero");
    }

    if(cep.value.trim().length == 0){
        formError("cep");
        quantidadeErros++;
    }else{
        reiniciaBorda("cep");
    }

    if(rua.value.trim().length == 0){
        formError("rua");
        quantidadeErros++;
    }else{
        reiniciaBorda("rua");
    }

    if(numeroCasa.value.trim().length == 0){
        formError("numeroCasa");
        quantidadeErros++;
    }else{
        reiniciaBorda("numeroCasa");
    }

    if(complemento.value.trim().length == 0){
        formError("complemento");
        quantidadeErros++;
    }else{
        reiniciaBorda("complemento");
    }

    if(bairro.value.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
    }else{
        reiniciaBorda("bairro");
    }

    if(cidade.value.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
    }else{
        reiniciaBorda("cidade");
    }

    if(estado.value.trim().length == 0){
        formError("estado");
        quantidadeErros++;
    }else{
        reiniciaBorda("estado");
    }

    if(anotacoes.value.trim().length == 0){
        formError("anotacoes");
        quantidadeErros++;
    }else{
        reiniciaBorda("anotacoes");
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