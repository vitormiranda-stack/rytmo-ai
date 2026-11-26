import  {tarefa} from "../datas/tarefas.js"

export function concluirTarefa(indice: number) : boolean {
    const tarefaSelecionada = tarefa[indice];

    if (tarefaSelecionada !== undefined) {
        tarefaSelecionada.concluida = true;
        return true;
    }

    return false;
}