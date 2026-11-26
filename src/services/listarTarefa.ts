import {tarefa} from "../datas/tarefas.js";

export function listarTarefa() : void{
    for( let i = 0; i < tarefa.length; i++) {

    const tarefaAtual =  tarefa[i];

    if(tarefaAtual !== undefined) {
    console.log(tarefaAtual.titulo);
    console.log(tarefaAtual.duracao);
    console.log(tarefaAtual.concluida);

    }
}
};