import "./perfil.css";

const Perfil = ({nome, idade, profissao}) => {
    return (
        <div className="perfil">
            Nome: {nome}<br/>
            Idade: {idade}<br/>
            Profissão: {profissao}<br/>
        </div>
    );
}

export default Perfil