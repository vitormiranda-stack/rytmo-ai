import type { Tarefa } from "../models/Tarefa.js";
import { tarefa } from "../datas/tarefas.js"

export function adicionarTarefa(titulo: string, duracao: number): void {
    const novaTarefa: Tarefa = 
        {
            titulo: titulo, 
            duracao: duracao,
            concluida: false
        };

tarefa.push(novaTarefa);

};

