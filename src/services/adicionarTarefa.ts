import type { Tarefa } from "../models/Tarefa.js";
import { tarefa } from "../datas/tarefas.js"

export function adicionarTarefa(titulo: string, duracao: number): void {
    
        let maiorId = 0

        for(let i=0; i < tarefa.length; i++){
            
            const tarefaAtual = tarefa[i]; 

            if(tarefaAtual !== undefined){
                if(tarefaAtual.id > maiorId){
                    maiorId = tarefaAtual.id;

                }
            }
        }

        const novaTarefa: Tarefa = 
        {
            titulo: titulo, 
            duracao: duracao,
            concluida: false,
            id: maiorId + 1
        };

tarefa.push(novaTarefa);

};

