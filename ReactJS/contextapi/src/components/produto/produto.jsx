import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Produto = () => {
    
    const { usuario, setUsuario } = useContext(UsuarioContext);
    const [novoProduto, setNovoProduto] = useState();

    return(
        <>
        <input type="text"
        placeholder="Digite um novo produto"
        onChange={(e) => {
           setNovoProduto(e.target.value)
        }} />

        <button onClick={() => {
            setProdutos(novoProduto)
        }}>Cadastrar Produto</button>
        <p>Produto cadastrado: <strong>{novoProduto}</strong></p>
        </>
    )
}

export default Produto;