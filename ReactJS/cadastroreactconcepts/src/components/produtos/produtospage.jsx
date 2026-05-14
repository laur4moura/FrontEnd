import "./produtospage.css";
import { useState } from "react";

import oleoImg from "../../assets/oleo.jpg";
import calcinhaImg from "../../assets/calcinha.jpg";

function ProdutosPage() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");

    const [arrProdutos, setArrProdutos] = useState([
        {
            id: 1,
            titulo: "Oléo",
            descricao: "Oléo capilar",
            preco: 5.99,
            imagem: oleoImg
        },

        {
            id: 2,
            titulo: "Calcinha",
            descricao: "calcinha branca - fio dental",
            preco: 3.49,
            imagem: calcinhaImg
        }
    ]);

    function CadastrarProduto(e) {

        e.preventDefault();

        setArrProdutos([
            ...arrProdutos,

            {
                id: Date.now(),
                titulo: titulo,
                descricao: descricao,
                preco: preco,
                imagem: imagem
            }
        ]);

        limparCampos();
    }

    function limparCampos() {
        setTitulo("");
        setDescricao("");
        setPreco(0);
        setImagem("");
    }

    return (

        <section className="produtos">

            <h1 className="titulo-texto">Produtos</h1>

            <form onSubmit={CadastrarProduto}>

                <fieldset className="linha">

                    <label className="titulo">Título:</label>

                    <input
                        
                        type="text"
                        placeholder="Titulo"
                        onChange={(e) =>
                            setTitulo(e.target.value)}
                            required
                    />

                    <label className="descricao">Descrição:</label>

                    <input
                        type="text"
                        placeholder="descricao"
                        onChange={(e) =>
                            setDescricao(e.target.value)}
                            required
                    />

                    <label className="preco-texto">Preço:</label>

                    <input
                        type="number"
                        placeholder="preco"
                        onChange={(e) =>
                            setPreco(parseFloat(e.target.value))}
                            required
                    />

                    <label className="imagem">Imagem:</label>

                    <input
                        type="text"
                        placeholder="Cole a URL da imagem"
                        onChange={(e) =>
                            setImagem(e.target.value)}
                            required
                    />

                    <button className="cadastrar_botao" type="submit">
                        Cadastrar
                    </button>

                </fieldset>

            </form>

            {/* CARDS */}

            <div className="container-cards">

                {arrProdutos.map((p) => (

                    <div className="card" key={p.id}>

                        <img
                            src={p.imagem}
                            alt={p.titulo}
                        />

                        <h2>{p.titulo}</h2>

                        <p>{p.descricao}</p>

                        <span className="preco">
                            R$ {p.preco}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default ProdutosPage;