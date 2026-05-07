
import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/title/title';

function App() {
  return (
    <>
      <Title nome="Laura" sobrenome="Anacleto" texto= "Bem vindo, sou o Título"/>
      <Title texto= "Eu sou o outro Título"/>
      <Paragrafo textoParagrafo="Este é o texto do parágrafo"/>
      <Paragrafo textoParagrafo="Este é o outro texto do parágrafo"/>

    </>
  );
}

export default App;
