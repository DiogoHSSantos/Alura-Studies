// import React from 'react';

import './lista.scss'

export function Lista(){

    const tarefas = [
        {
            id: 1,
            tarefa: 'React', 
            tempo:'02:00:00'
        },
        {
            id: 2,
            tarefa: 'JavaScript', 
            tempo:'02:00:00'
        },
    ]

    return(
        <aside className='listaTarefas'>
            <h2>Estudos do dia: </h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id} className='item'>
                        <h3>{tarefa.tarefa}</h3>
                        <span>{tarefa.tempo}</span>
                        
                    </li>
                ))}
            </ul>
        </aside>
    )
}