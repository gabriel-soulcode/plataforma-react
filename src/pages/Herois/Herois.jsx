import { useForm } from "react-hook-form";

export function Herois() {

    const { register, handleSubmit } = useForm();

    function onSubmitHeroi(heroi) {
        let mensagem = `
            Nome: ${heroi.nome}
            Poder: ${heroi.poder}
            Fraqueza: ${heroi.fraqueza}
            História: ${heroi.historia}
        `;
        alert(mensagem);
    }

    return (
        <div className="herois">
            <h1>Cadastro de Super Heróis</h1>
            <form onSubmit={handleSubmit(onSubmitHeroi)}>
                <label htmlFor="nome">Nome</label> <br />
                <input type="text" id="nome" {...register("nome")} /> <br />

                <label htmlFor="poder">Poder</label> <br />
                <input type="text" id="poder" {...register("poder")} /> <br />

                <label htmlFor="fraqueza">Fraqueza</label> <br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /> <br />

                <label htmlFor="historia">História</label> <br />
                <textarea cols="23" id="historia" {...register("historia")}></textarea> <br />

                <button type="submit">Cadastrar Heroi</button>
            </form>
        </div>
    );
}