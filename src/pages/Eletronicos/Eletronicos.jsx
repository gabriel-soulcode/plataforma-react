import { useForm } from "react-hook-form"
import "./Eletronicos.css"

export function Eletronicos() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmitEletronicos(data) {
        let mensagem = `
            Marca/Modelo: ${data.marca}
            Número de Serie: ${data.numero}
            Descrição: ${data.descricao}
            Data de entrada: ${data.entrada}
            Data de previsão: ${data.entrega}
            Status: ${data.status}
        `;
        alert(mensagem)
    }

    return (
        <div className="eletronicos">
            <h1>Registro de eletrônicos</h1>
            <form onSubmit={handleSubmit(onSubmitEletronicos)}>
                <label htmlFor="marca">Marca e Modelo</label> <br />
                <input type="text" id="marca" {...register("marca", {required: true, maxLength: 255})} /> <br />
                {errors.marca && <span className="invalid">Digite um marca/modelo válido!</span>} <br />

                <label htmlFor="numero-serie">Número de serie</label> <br />
                <input type="text" id="numero-serie" {...register("numero", {required: true, maxLength: 255})} /> <br />
                {errors.numero && <span className="invalid">Digite um numero de serie válido!</span>} <br />

                <label htmlFor="descricao">Descrição</label> <br />
                <textarea id="descricao" {...register("descricao", {required: true, maxLength: 255})}></textarea> <br />
                {errors.descricao && <span className="invalid">Digite uma descrição válida!</span>} <br />

                <label htmlFor="entrada">Data de entrada</label> <br />
                <input type="date" id="entrada" {...register("entrada", {required: true})} /> <br />
                {errors.entrada && <span className="invalid">Preencha com uma data válida!</span>} <br />

                <label htmlFor="previsao">Previsão de entrega</label> <br />
                <input type="date" id="previsao" {...register("entrega", {required: true})} /> <br />
                {errors.entrega && <span className="invalid">Preencha com uma data válida!</span>} <br />

                <label htmlFor="status">Status</label> <br />
                <select id="status" {...register("status", {required: true})}>
                    <option value="Recebido" selected>Recebido</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Concluido">Concluido</option>
                    <option value="Entregue">Entregue</option>
                </select> <br />
                {errors.status && <span className="invalid">Selecione um status válido!</span>} <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}