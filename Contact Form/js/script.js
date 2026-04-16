async function cadastrarContato(objetoContato){
    console.log(objetoContato);
     
    const resposta = fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}

async function buscarEndereco(cep){

     if(cep.trim().length < 8){
         alert("O CEP deve ter 8 números");
        return false;
     }

    try{
        aguardandoCampos();

    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json();
    
    console.log(dados);
    console.log(dados.logradouro);
    console.log(dados.bairro);
    console.log(dados.localidade);
    console.log(dados.estado);

    campoDoFormulario = dados.logradouro;
        document.getElementById("rua").value = dados.logradouro;
    campoDoFormulario = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
    campoDoFormulario = dados.logradouro;
        document.getElementById("cidade").value = dados.localidade;
    campoDoFormulario = dados.logradouro;
        document.getElementById("estado").value = dados.estado;


}
    catch(error){
        console.log(error);
    }
}

function aguardandoCampos(){
    document.getElementById("rua").value = "...";
    document.getElementById("bairro").value = "...";
    document.getElementById("cidade").value = "...";
    document.getElementById("estado").value = "...";
}



function validarFormulario(){

    let quantidadeErros = 0;

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let ddd = document.getElementById("ddd").value;
    let telefone = document.getElementById("numero").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numeroCasa = document.getElementById("numeroCasa").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let anotacoes = document.getElementById("anotacoes").value;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
    }else{
        reiniciaBorda("nome");
    }

    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
    }else{
        reiniciaBorda("sobrenome");
    }

    if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
    }else{
        reiniciaBorda("email");
    }

    if(pais.trim().length == 0){
        formError("pais");
        quantidadeErros++;
    }else{
        reiniciaBorda("pais");
    }

    if(ddd.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
    }else{
        reiniciaBorda("ddd");
    }

    if(telefone.trim().length == 0){
        formError("numero");
        quantidadeErros++;
    }else{
        reiniciaBorda("numero");
    }

    if(cep.trim().length == 0){
        formError("cep");
        quantidadeErros++;
    }else{
        reiniciaBorda("cep");
    }

    if(rua.trim().length == 0){
        formError("rua");
        quantidadeErros++;
    }else{
        reiniciaBorda("rua");
    }

    if(numeroCasa.trim().length == 0){
        formError("numeroCasa");
        quantidadeErros++;
    }else{
        reiniciaBorda("numeroCasa");
    }

    if(complemento.trim().length == 0){
        formError("complemento");
        quantidadeErros++;
    }else{
        reiniciaBorda("complemento");
    }

    if(bairro.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
    }else{
        reiniciaBorda("bairro");
    }

    if(cidade.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
    }else{
        reiniciaBorda("cidade");
    }

    if(estado.trim().length == 0){
        formError("estado");
        quantidadeErros++;
    }else{
        reiniciaBorda("estado");
    }

    if(anotacoes.trim().length == 0){
        formError("anotacoes");
        quantidadeErros++;
    }else{
        reiniciaBorda("anotacoes");
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário!");
    }else{

        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            pais: pais,
            ddd: ddd,
            telefone: telefone,
            cep: cep,
            rua: rua,
            numeroCasa: numeroCasa,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotacoes: anotacoes
        }


        let cadastrado =  cadastrarContato(objetoContato);
        
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