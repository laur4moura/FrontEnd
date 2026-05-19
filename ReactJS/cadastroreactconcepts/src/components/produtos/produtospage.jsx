import "./produtospage.css"
import fotoProduto from "./images/hero.png"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../Services/service"



export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([])

    //states
    const [id, setId] = useState("");
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("hero.png")
    const [titulo, setTitulo] = useState("")
    const [editar, setEditar] = useState(false)

    //function
    const getDados = async () => {
        try {
            const retornoAPI = await api.get(`/produtos`)
            const dados = await retornoAPI.data;
            setListaProdutos(dados)
        } catch (erro) {
            console.log(erro)
        }
    }

    //carregar
    useEffect(() => {
        getDados()
    }, [])

    const cadastrarProduto = async (e) => {
        e.preventDefault()

        // alert("Função Cadastrar chamada")
        // return false

        //Não permite o formulario seja postado
        // validar os dados
        // cadastrar na api
        // chamar a lista novamente
        // ou então, jogar o novo cadastro na listaProdutos

        if (titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco)) {
            alert("Preencha todos os campos corretamente")
            return false
        }

        const objProduto = {

            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem

            // isso é igual a:
            // titulo,
            // descricao,
            // preco,
            // imagem
            // Caso eles tenha os mesmos nomes em albos os lugarese
        }
        console.log(objProduto)
        const retornoAPI = await axios.post("http://localhost:3000/produtos",objProduto)
        const objetoRetornado = await retornoAPI.data;

        setListaProdutos([...listaProdutos, objetoRetornado])

        limparCadastro();

    }

    function limparCadastro() {
        setTitulo("")
        setDescricao("")
        setPreco(0)
        setImagem("")
    }

    //Deletar
       const deletar = async (id) => {
        if (!confirm("Você realmente quer apagar o produto")) {
            return false
        }
        try{
            const retornoAPI = await axios.delete("http://localhost:3000/produtos/${id}")

            //Gera a lista de produtos que não foram apagados
            const novaLista = listaProdutos.filter((prod) => {
                return prod.id != id
            })

            if(retornoAPI.status == 200 && retornoAPI.statusText == "OK"){
                alert("Produto apagado com sucesso!")
            } else {
                alert("Erro ao cadastar o produto")
            }
            setListaProdutos(novaLista)
            getDados()
        } catch (erro){}
    }

    const editarProduto = async (e) => {
    e.preventDefault()

    if (
        titulo.trim().length == 0 ||
        descricao.trim().length == 0 ||
        isNaN(preco)
    ) {
        alert("Preencha todos os campos corretamente")
        return
    }

    const objEditarProduto = {
        titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
    }

    try {
        const retornoAPI = await axios.put(`http://localhost:3000/produtos/${id}`, objEditarProduto)

        console.log(retornoAPI)

        const objetoEditarRetornado = await retornoAPI.data

        if (retornoAPI.status == 200) {

            const novaLista = listaProdutos.map((prod) => {
                if (prod.id == id) {
                    return objetoEditarRetornado
                }
                return prod
            })

            getDados()

            setListaProdutos(novaLista)
            setEditar(false)

            alert("Produto editado com sucesso!")
        } else {
            alert("Erro ao editar produto")
        }

    } catch (error) {
        alert("Servidor fora do ar! " + error)
    }
}



    return (
        <div className="produtos-page">
            <h1>Cosméticos</h1>

            <form action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                <fieldset className="cadastro-caixa">
                    <div className="linha">
                        <label htmlFor="titulo"></label>
                        <input className="input-produto"
                            type="text"
                            placeholder="titulo"
                            value={titulo}
                            id="titulo" onChange={(e) => {
                                setTitulo(e.target.value)
                            }} />
                    </div>
                    <div className="linha">
                        <label htmlFor="preco"></label>
                        <input className="input-produto"
                            type="text"
                            placeholder="preco"
                            value={isNaN(preco) ? 0 : preco}
                            id="preco" onChange={(e) => {
                                setPreco(e.target.value)
                            }} />
                    </div>
                    <div className="linha">
                        <label htmlFor="descricao"></label>
                        <input className="input-produto"
                            type="text"
                            placeholder="descricao"
                            value={descricao}
                            id="descricao" onChange={(e) => {
                                setDescricao(e.target.value)
                            }} />
                    </div>
                    <div className="linha">
                        <label htmlFor="img"></label>
                        <input className="input-produto"
                            type="text"
                            placeholder="img"
                            value={imagem}
                            id="img" onChange={(e) => {
                                setImagem(e.target.value)
                            }} />
                    </div>
                    <br />
                    {editar ? (
                        <>
                            <button
                                className="bnt-editar"
                                onClick={() => {
                                }}>Editar</button>

                            <button className="bnt-cancelar"
                                onClick={() => {
                                    setEditar(false)
                                    limparCadastro()

                                }}>Cancelar</button>
                        </>


                    )
                        :
                        (

                            <button className="bnt-cadastrar"
                            >Cadastrar</button>
                        )}

                </fieldset>
            </form>

            <br />
            <section className="lista-produtos">
                {listaProdutos.map((p) => {
                    return (
                        <article key={p.id} className="card-produto">
                            <img className="foto-produto" src={p.imagem} alt="" />
                            <h2>{p.titulo}</h2>
                            <p>{p.preco}</p>
                            <p>{p.descricao}</p>
                            <a className="botao-exeed" href="" onClick={(e) => {
                                e.preventDefault()
                                deletar(p.id)
                            }}>Apagar</a>

                            <a className="botao-exeed" href="" onClick={(e) => {
                                e.preventDefault()
                                setId(p.id)
                                setEditar(true)
                                setTitulo(p.titulo)
                                setDescricao(p.descricao)
                                setPreco(p.preco)
                                setImagem(p.imagem)

                            }}>Editar</a>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}