import Botao from '../Botao';
import { useState } from 'react'
import { useEffect } from 'react'
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/ITarefa';

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: ()=> void 
}
export const Cronometro = ({ selecionado, finalizarTarefa }:Props)=>{
    
    const [ tempo, setTempo] = useState<number>();

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    

    function regressiva(contador:number = 0){
        setTimeout(()=>{
        if(contador > 0){
            setTempo(contador - 1);
            return regressiva(contador - 1)
        }
        finalizarTarefa();
    }, 1000)

    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao textoBotao={'Começar!'} onClick={()=>regressiva(tempo)}/>
        </div>
    );
};