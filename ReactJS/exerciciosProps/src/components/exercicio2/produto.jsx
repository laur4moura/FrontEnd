import "./produto.css"

const Produto = ({nome, preco, descricao}) => {
    return(
 
            <p>Produto: {nome}<br/>  
             Preço: R$ {preco.toFixed(2)}<br/>
             Descrição: {descricao}<br/>
             </p>
      
    )
}
export default Produto;