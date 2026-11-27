import  {tarefa} from "../datas/tarefas.js";

export function concluirTarefa(id: number) : boolean {
    

    for(let i=0; i < tarefa.length; i++){

        const tarefaAtual = tarefa[i];

        if (tarefaAtual !== undefined && tarefaAtual.id === id) {
            tarefaAtual.concluida = true;
            return true;
    };
    }

    return false;
}