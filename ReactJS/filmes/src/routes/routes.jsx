import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link>{" "}
                <Link to="/filme">Filmes</Link>{" "}
                <Link to="/genero">Gêneros</Link>{" "}
            
            </nav>
            <Routes>
                <Route element={<Login/>} path="/"/> 
                <Route element={<CadastroFilme/>} path="/filmes"/> 
                <Route element={<CadastroGenero/>} path="/genero"/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas