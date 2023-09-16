import './formulario.scss'
import React from 'react';
import { useState } from 'react'
import Botao from '../Botao';
import { ITarefa } from '../../types/ITarefa';
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export const Formulario = ({setTarefas}:Props) => {

    const [tarefa, setTarefa] = useState(
        {
            tarefa: '',
            tempo: '00:00'
        }
    )

    function adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault();

        setTarefas(tarefasAntigas => 
            [...tarefasAntigas, 
                {
                    ...tarefa,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])


        setTarefa({tarefa: '', tempo: '00:00'})
        
    }
     
    return(
        <form className='novaTarefa' onSubmit={adicionarTarefa.bind(this)}>
                <div className='inputContainer'>
                    <label htmlFor="tarefa">Adicione um novo estudo.</label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa"
                        value={tarefa.tarefa}
                        onChange={evento => setTarefa({...tarefa, tarefa: evento.target.value})}
                        placeholder='O que você quer estudar ?'
                        required  
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="tempo">Tempo.</label>
                    <input 
                        type="time" 
                        step='1'
                        name="tempo" 
                        value={tarefa.tempo}
                        onChange={evento => setTarefa({...tarefa, tempo: evento.target.value})}
                        id="tempo"
                        min='00:00:00'
                        max='01:30:00'
                        required  
                    />
                </div>
                <Botao textoBotao={'Adicionar'} type="submit" />
            </form>
    )
}