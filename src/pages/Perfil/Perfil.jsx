import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function Perfil() {
    const params = useParams();
    const id = params.id;

    let usuario = usuarios.find(u => u.id === parseInt(id));

    return (
        <div className="perfil">
            <h3>{usuario.nome}</h3>
            <span>{usuario.idade} anos</span>
            <br />
            <span>{usuario.email}</span>
            <br />
            <Button variant="dark">Voltar</Button>
        </div>
    )
}