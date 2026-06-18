import "./CadastroGenero.css";
import Botao from "../../components/botao/Botao.jsx";
import { useState } from "react";
import { Alerta } from "../../components/alerta/Alerta.jsx";
import api from "../../Services/services.js";

const CadastroGenero = () => {
    const [nomeGenero, setNomeGenero] = useState("");

    const cadastrarGenero = async () => {

        if (nomeGenero.trim().length === 0) {
            Alerta({
                title: "Cadastro de Gênero",
                text: "Preencha o nome do gênero",
                icon: "warning",
                confirmButtonText: "OK"
            });
            return;
        }

        const dadosGenero = {
            nome: nomeGenero
        };

        try {

            await api.post("/Genero", dadosGenero);

            Alerta({
                title: "Sucesso!",
                text: "Gênero cadastrado com sucesso.",
                icon: "success",
                confirmButtonText: "OK"
            });

            setNomeGenero("");

        } catch (error) {

            Alerta({
                title: "Erro",
                text: "Erro ao cadastrar gênero.",
                icon: "error",
                confirmButtonText: "OK"
            });

        }
    };

    return (
        <main className="main_cadastro_genero">

            <section className="card_genero">

                <div className="topo_genero">

                    <div className="icone_genero">
                        🎮
                    </div>

                    <div>
                        <h1>Cadastro de Gêneros</h1>
                        <p>
                            Cadastre os gêneros disponíveis para os jogos.
                        </p>
                    </div>

                </div>

                <form
                    className="form_genero"
                    onSubmit={(e) => {
                        e.preventDefault();
                        cadastrarGenero();
                    }}
                >

                    <div className="campo_genero">

                        <label>Nome do Gênero</label>

                        <input
                            type="text"
                            placeholder="Ex: RPG, Ação, Corrida..."
                            value={nomeGenero}
                            onChange={(e) => setNomeGenero(e.target.value)}
                            maxLength={50}
                        />

                    </div>

                    <div className="info_genero">

                        <div className="card_info">
                            <span>🎲</span>
                            <small>Máx. 50 caracteres</small>
                        </div>

                        <div className="card_info">
                            <span>📝</span>
                            <small>{nomeGenero.length}/50</small>
                        </div>

                    </div>

                    <div className="area_botao">

                        <Botao
                            nomeDoBotao="Cadastrar"
                            btnLogin={true}
                            fnLogin={cadastrarGenero}
                        />

                    </div>

                </form>

            </section>

        </main>
    );
};

export default CadastroGenero;