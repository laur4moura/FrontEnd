import { BrowserRouter, Route, Routes } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/Login"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/"/> 
                <Route element={<CadastroFilme/>} path="/Filmes"/> 
                <Route element={<CadastroGenero/>} path="/Generos"/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas