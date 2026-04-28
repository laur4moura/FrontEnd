async function calcular() {
   const nome = document.getElementById("nome").value.trim();
   const altura = parseFloat(document.getElementById("altura").value);
   const peso = parseFloat(document.getElementById("peso").value);


   // Verificar se os campos estão preenchidos corretamente
   if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
      alert("Preencher todos os campos")
      return false;
   }

   console.log("Liberado para cadastrar")

   const IMC = calcularIMC(peso, altura);
   console.log(IMC)

   const situacao = gerarSituacao(IMC);
   console.log(situacao)
   //gerar um objeto js com os dados
   const objIMC = {
      nome: nome,
      altura: altura,
      peso: peso,
      IMC: IMC,
      situacao: situacao
   }

   const dadosGravados =  await cadastrarAPI(objIMC);
   console.log(dadosGravados);

   if ("error" in dadosGravados) {
      alert(dadosGravados.error);
   }else{
      mostrarNaTela(objIMC);
   }
}

async function carregarCadastros(){
       try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dados = await retorno.json();

        
         dados.sort( (a, b) => 
          a.nome.localeCompare(b.nome)
        );

        const tabela = document.getElementById("cadastro");
        tabela.innerHTML = ""; 

        dados.forEach(pessoa => {
            // tabela.innerHTML += `
            //     <tr>
            //         <td>${pessoa.nome}</td>
            //         <td>${pessoa.altura}</td>
            //         <td>${pessoa.peso}</td>
            //         <td>${pessoa.IMC}</td>
            //         <td>${pessoa.situacao}</td>
            //     </tr>
            // `;
            mostrarNaTela(pessoa);
        });

    } catch (error) {
        console.log(error);
    alert("Carregando os dados...");
    }
}


async function cadastrarAPI(objCadastro) {
   try {
      const retorno = await fetch("http://localhost:3000/imc",{
         method: "POST",
         body: JSON.stringify(objCadastro),
         headers: {
            "Content-Type": "application/json; charset=UTF-8"
         }
      });

      const dadosGravados= await retorno.json();
      return dadosGravados;
   } catch (error) {
      console.log(error)
       return await {error: "Não foi possível cadastrar os dados"}
      
   }
}





function mostrarNaTela(objCadastro) {
   document.getElementById("cadastro").innerHTML +=
      ` <tr>
                    <td>${objCadastro.nome}</td>
                    <td>${objCadastro.altura}</td>
                    <td>${objCadastro.peso}</td>
                    <td>${objCadastro.IMC.toFixed(2)}</td>
                    <td>${objCadastro.situacao}</td>
                </tr>`

}

function calcularIMC(peso, altura) {
   return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;
// 16 a menor que 17 – Magreza moderada;
// 17 a menor que 18,5 – Magreza leve;
// 18,5 a menor que 25 – Saudável;
// 25 a menor que 30 – Sobrepeso;
// 30 a menor que 35 – Obesidade Grau I;
// 35 a menor que 40 – Obesidade Grau II (considerada severa);
// Maior que 40 – Obesidade Grau III (considerada mórbida).

function gerarSituacao(IMC) {
   if (IMC < 16) {
      return "Magreza grave";
   } else if (IMC < 17) {
      return "Magreza moderada";
   } else if (IMC < 18.5) {
      return "Magreza leve";
   } else if (IMC < 25) {
      return "Saudável";
   } else if (IMC < 30) {
      return "Sobrepeso";
   } else if (IMC < 35) {
      return "Obesidade Grau I";
   } else if (IMC < 40) {
      return "Obesidade Grau II (considerada severa)";
   } else {
      return "Obesidade Grau III (considerada mórbida)";
   }
}