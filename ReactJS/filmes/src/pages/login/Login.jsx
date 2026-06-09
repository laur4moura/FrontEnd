import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Login = () => {
    const { setUsuario } = useContext(UsuarioContext);

    const [novoUsuario, setNovoUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario));
        setUsuario(novoUsuario);
        setNovoUsuario("");
        setSenha("");
    };

    return(
        <main className="main_login">
          <div className="banner"></div>

          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>

            <form
              className="form_login"
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
                <h1>Login</h1>

                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={novoUsuario}
                            onChange={(e) => setNovoUsuario(e.target.value)}
                        />
                    </div>

                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                </div>

                <div onClick={login}>
                    <Botao nomeDoBotao="Entrar" />
                </div>
            </form>
          </section>
        </main>
    );
};

export default Login;