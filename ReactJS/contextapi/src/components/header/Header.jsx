import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";  



const Header = () => {
  const {usuario, setUsuario} = useContext(UsuarioContext);

  const logout = () => {
    setUsuario(null);
    localStorage.setItem("usuario", null);
  }

  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link> {""}
        <Link to={"/perfil"}>Perfil</Link>
        <Link to={"/produto"}>Produto</Link>
        <Link to={"/cadastro-produto"}>Cadastro Produto</Link>
        <Link to={"/listar-produto"}>Listar Produto</Link>

      </nav>
      <h2>Bem-vindo, {usuario ? usuario : "Visitante" }
        <button
        onClick ={() => logout()}>
          Sair
        </button>
      </h2>
    </header>
  )
}

export default Header;