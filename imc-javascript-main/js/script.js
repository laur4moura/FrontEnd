function calcular() {
     const nome = document.getElementById("nome").value;
     const altura = parseFloat(document.getElementById("altura").value);
     const peso = parseFloat(document.getElementById("peso").value);


    

     if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencher todos os campos")
        return false;
     }
}



