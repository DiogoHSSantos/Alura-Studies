import React from 'react';
import './botao.scss'

export class Botao extends React.Component <
    { 
        textoBotao:string , 
        type?:'button'| 'submit' | 'reset' | undefined,
        onClick?:()=>void
    }
>{
    render(){

        const p = this.props;

        return(
            <button onClick={p.onClick} type={p.type} className='botao'>{p.textoBotao}</button>
        )
    }
}