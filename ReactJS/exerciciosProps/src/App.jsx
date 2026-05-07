import "./App.css";
import Saudacao from "./components/exercicio2/produto";
import Produto from "./components/exercicio2/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/exercicio05/filme";
import Aluno from "./components/exercicio06/aluno";
import imagemAluno from "./assets/pessoa01.png";
import MeuCard from "./components/exercicio07/Card";
import Contato from "./components/exercicio08/contato";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemLoja";




function App() {

  // const filmes = [{
  //   titulo: "O Poderoso Chefão",
  //   ano: 1972,
  //   genero: "Crime/Drama",
  //   nota: 9.2
  // }, 
  // {
  //   titulo: "Poderoso chefinho",
  //   ano: 2016,
  //   genero: "Comédia/Animação",
  //   nota: 9.4
  // },
  // {
  //   titulo: "Homem Aranha: No Aranhaverso",
  //   ano: 2018,
  //   genero: "Animação",
  //   nota: 9.8
  // }

  // ]



  return (
    <>
      {/* ex-01
    < Saudacao nome="Laura"/>
    < Saudacao nome="Livia"/>
    < Saudacao nome="Lorenzo"/> */}

      {/* ex-02
    < Produto nome="Blusa" preco={100.00} descricao="Produto de teste"/> */}

      {/* ex-03
    <Perfil nome="Laura" idade={17} profissao="Policial"/> */}

      {/* <MyComponent>
      < Saudacao nome="Laura"/>
      < Produto nome="Blusa" preco={100.00} descricao="Produto de teste"/>
      <Perfil nome="Laura" idade={17} profissao="Policial"/>
    </MyComponent> */}

      {/* ex-04  */}
      {/* <Botao texto="Clique aqui" onClick={() => alert("Tolete de Guerra!")} /> */}


      {/* ex-05 */}
      {/* {
      filmes.map((p)=>{
      return <Filme
      key={p.id}
      titulo={p.titulo}
      ano={p.ano}
      genero={p.genero}
      nota={p.nota}/>
      })
     } */}

      {/* ex-06 */}
      {/* <Aluno nome="Lorenzo" curso="Engenharia de Software" imagem={imagemAluno} /> */}


      {/* ex-07 */}
      {/* <MeuCard> 
      <Saudacao nome="Laura" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="Lorenzo" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="Livia" />   
      </MeuCard>    */}

      {/* ex-08
      <Contato nome="Laura" telefone="(11) 99999-9999" email="laura@example.com" />
      <Contato nome="Lorenzo" telefone="(11) 99999-9999" email="lorenzo@example.com" />
      <Contato nome="Livia" telefone="(11) 99999-9999" email="livia@example.com" /> */}

      {/* ex-09 */}

      {/* <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={imagemAluno} />
      <Jogo nome="Super Mario Odyssey" plataforma="Nintendo Switch" preco={199.99} imagem={imagemAluno} />
      <Jogo nome="Sonic Mania" plataforma="PS4" preco={59.99} imagem={imagemAluno} />
 */}

      <ItemLoja nome="Notebook Gamer" preco={4500.00} categoria="Eletrônicos" estoque={10} />
      <ItemLoja nome="Smartphone" preco={2500.00} categoria="Eletrônicos" estoque={0} />
      <ItemLoja nome="Fone de Ouvido" preco={150.00} categoria="Acessórios" estoque={5} />

    </>
  )
}

export default App;
