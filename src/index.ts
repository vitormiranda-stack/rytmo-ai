interface Tarefa {
    titulo: string;
    duracao: number;
    concluida: boolean;
}

const tarefa: Tarefa[] = [
    {titulo: 'Estudar calculo', duracao : 60, concluida : false},
    {titulo: 'treinar musculação', duracao: 90, concluida: false},
    {titulo: 'Fazer exercícios de cardio', duracao: 45, concluida: false}
];

function concluirTarefa(indice: number) : void {
    const tarefaSelecionada = tarefa[indice];

    if (tarefaSelecionada !== undefined) {
        tarefaSelecionada.concluida = true;
    }
}

concluirTarefa(2);


for( let i = 0; i < tarefa.length; i++) {

    const tarefaAtual =  tarefa[i];

    if(tarefaAtual !== undefined) {
    console.log(tarefaAtual.titulo);
    console.log(tarefaAtual.duracao);
    console.log(tarefaAtual.concluida);

    }
}




 