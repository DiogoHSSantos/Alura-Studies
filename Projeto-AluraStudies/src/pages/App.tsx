
import { useState } from 'react'
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista';
import style from './style.module.scss'
import { ITarefa } from '../types/ITarefa';

function App() {

    
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()


  const selecionaTarefa = (tarefaSelecionada: ITarefa)=>{
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setTarefas(tarefasAnteriores)
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  )
}

export default App
