// import React from 'react';

// import { useState } from 'react'
import { ITarefa } from '../../types/ITarefa'
import Item from './item'
import './lista.scss'

interface Props{
    tarefas:ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}


export function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className='listaTarefas'>
            <h2>Estudos do dia: </h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item 
                    selecionaTarefa={selecionaTarefa} 
                    key={tarefa.id}
                    {...tarefa}/>
                ))}
            </ul>
        </aside>
    )
}