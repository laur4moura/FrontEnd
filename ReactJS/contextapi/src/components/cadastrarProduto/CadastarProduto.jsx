import { useContext, useState } from "react";
import { ProdutoContext } from "../context/ProdutoContext";


const CadastroProduto = () => {

    const {listaProdutos, setListaProdutos} = useContext(ProdutoContext)
    const [novoProduto, setNovoProduto] = useState()

  return (
    <>
        <h1>Pagina Cadastro Produto</h1>

        <input type="text"
        onChange={(e) => {
            setNovoProduto(e.target.value)
        }}
         placeholder="Nome do produto"
         />
         <button onClick={() => {
             setListaProdutos([...listaProdutos, novoProduto])
             alert("Produto cadastrado com sucesso!")
         }}>Cadastrar</button>
         <p>Produto que será cadastrado: {novoProduto}</p>
    </>
    )
}

export default CadastroProduto;