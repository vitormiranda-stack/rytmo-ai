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

function concluirTarefa(indice: number) : boolean {
    const tarefaSelecionada = tarefa[indice];

    if (tarefaSelecionada !== undefined) {
        tarefaSelecionada.concluida = true;
        return true;
    }

    return false;
}

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




 