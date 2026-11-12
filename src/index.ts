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


if (tarefa[0] !== undefined) {
    tarefa[0].concluida = true;
}

for( let i = 0; i < tarefa.length; i++) {

    const tarefaAtual =  tarefa[i];

    if(tarefaAtual !== undefined) {
    console.log(tarefaAtual.titulo);
    console.log(tarefaAtual.duracao);
    console.log(tarefaAtual.concluida);

    }
}




 