import  {tarefa} from "./datas/tarefas.js"
import {concluirTarefa} from "./services/concluirTarefa.js"



console.log(concluirTarefa(2));
console.log(concluirTarefa(50));

for( let i = 0; i < tarefa.length; i++) {

    const tarefaAtual =  tarefa[i];

    if(tarefaAtual !== undefined) {
    console.log(tarefaAtual.titulo);
    console.log(tarefaAtual.duracao);
    console.log(tarefaAtual.concluida);

    }
}




 