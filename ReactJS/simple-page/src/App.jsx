import './App.css';

function App() {
  return (
    <nav class="menu">
        <a href="#"class="menu_item">Home</a>
        <a href="#"class="menu_item">Quem Somos</a>
        <a href="#"class="menu_item">Contato</a>
        <a href="#"class="menu_item menu_item--success">Entrar</a>
        <a href="#"class="menu_item menu_item--button-default">Cadastrar</a>

        <div class="card-perfi">
      
        <img class="card-perfil__image" 
        src="./images/portrait-avatar-girl.avif" 
        alt="foto de perfil do usuário" />
    </div>
    </nav>
  );
}

export default App;