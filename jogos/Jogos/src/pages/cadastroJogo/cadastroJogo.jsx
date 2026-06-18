import "./cadastroJogo.css"

import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
// import api from "../../services/services.js"
import Lista from "../../components/lista/Lista"
//bibliotrcas de alertas
import Swal from "sweetalert2"
//import jwtDecode from "jwt-decode";
import { Alerta } from "../../components/alerta/Alerta"





const CadastroJogo = () => {

    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false);
    const [genero, setGenero] = useState("")
    const [imagem, setImagem] = useState()

    const [listaGeneros, setListaGeneros] = useState([
        { idGenro: 1, nome: "Ação" },
        { idGenro: 2, nome: "Comédia" },
        { idGenro: 3, nome: "Terror" },
    ])

    const [listaJogo, setListaJogos] = useState([])

    const cadastrarJogo = async (e) => {

        e.preventDefault();
        if (valor.trim().length == 0) {
            Alerta({
                title: "Cadastro De Jogo",
                text: "Jogo deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok",
            });


            // alert("Filme deve ser preenchido antes de cadastrar")
            return false
        }

        console.log("Genero selecionado: " + genero)
        console.log("Genero selecionado: " + valor)

        const formData = new FormData()
        formData.append("Nome", valor)
        formData.append("idGenero", genero)
        formData.append("Imagem", imagem)

        try {
            const retornoAPI = await api.post("/Jogo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            )
            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro De Jogo",
                    text: `Jogo(${formData.get("Nome")}) cadastrado com sucesso`,
                    icon: "success",
                    confirmButtonText: "OK"
                });

                limparFormulario();
                getJogos();
            } else {
                Alerta({
                    title: "Cadastro De Jogo",
                    text: `Erro na chamada da API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })
                // alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
            Alerta(
                {
                    title: "Cadastro De Jogo",
                    text: `Erro na chamada da API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })

        }

    }

    const limparFormulario = () => {
        setValor("");
        setEditar(false)
        setIdEditar(0)
    }

    const resumoDoJogo = (jogo) => {
        
    }


    const preEditar = (item) => {
        const formData = new FormData()
        formData.append("Nome", valor)
        formData.append("idGenero", genero)
        formData.append("Imagem", null)

        setIdEditar(item.idJogo)
        setValor(item.nome)
        setEditar(true)
        console.log(item)
    }
    const editarJogo = async (e) => {
        e.preventDefault()
        // alert(`Agora sim, bora editar: ${valor} | Id: ${idEditar}`)
        const objEditar = {
            nome: valor
        }

        try {
            const formData = new FormData()

            formData.append("Nome", valor)
            formData.append("idGenero", genero)
            formData.append("Imagem", imagem)
            const retornoAPI = await api.put(`/Jogo/${idEditar}`, formData)

            console.log(retornoAPI)
            if (retornoAPI.status == 204) {

                Alerta({
                    title: "Cadastro De Jogo",
                    text: `Jogo (${objEditar.nome}) Jogo Alterado com sucesso`,
                    icon: "success",
                    confirmButtonText: "OK"
                })
                limparFormulario();
                getJogos()
            } else {
                Alerta(
                    {
                        title: "Cadastro De Jogo",
                        text: `Algum Problema aconteceu ao editar`,
                        icon: "error",
                        confirmButtonText: "OK"


                    })

            }
        } catch (error) {
            Alerta(
                {
                    title: "Cadastro De Jogo",
                    text: `Erro ao chamar a API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })
        }
    }

    const excluirJogo = async (item) => {
        let confirmaExclusao = false

        const result = await Alerta({
            title: "Cadastro de Jogo",
            text: `Deseja realmente apagar o jogo ${item.titulo}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar Exclusão",
            cancelButtonText: "Cancelar",
        })

        if (!result.isConfirmed) {
            return false
        }
 
        try {
            const formData = new FormData()

            formData.append("Nome", valor)
            formData.append("idGenero", genero)
            formData.append("Imagem", null)
            
            const retornoAPI = await api.delete(`/Jogo/${item.idJogo}`, formData)
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {

                limparFormulario();
                getJogos()
                console.log(retornoAPI)
            }
        } catch (error) { }
    }

    useEffect(() => {
        getJogos();
        getGeneros();
    }, [])


    const getJogos = async () => {

        try {
            const retornoAPI = await api.get("/Jogo")
            const dados = retornoAPI.data
            console.log(dados)
            setListaJogo(dados)

          
        } catch (error) {
            alert("Erro ao buscar jogos: " + error)
        }

    }

    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            const generosOrdenados = dados.sort((a, b) =>
                a.nome.localeCompare(b.nome)
            )
            setListaGeneros(generosOrdenados)
        } catch (error) {
            alert("Erro ao buscar gêneros: " + error)
        }

    }

    return (

        <>

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Jogo"
                    // visibilidade="none"
                    placeholder="jogo"
                    valor={valor}
                    //função que muda o state
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarJogo : cadastrarJogo}
                    btnEditar={editar}
                    listaGeneros={listaGeneros}
                    setGenero={setGenero}
                    setImagem={setImagem}

                />

                <Lista
                    tituloLista="Lista de Jogos"
                    // visibilidade="none"

                    //Chama o método para validar:
                    lista={listaJogo}
                    //Identifica o type de lista:
                    tipoLista="filme"
                    funcExcluir={excluirJogo}
                    funcEditar={preEditar}

                />
            </main>
        <Footer />
            </>

    )

}
export default CadastroJogo