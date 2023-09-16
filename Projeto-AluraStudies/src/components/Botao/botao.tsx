
import './botao.scss'

interface Props{
    textoBotao:string , 
    type?:'button'| 'submit' | 'reset' | undefined,
    onClick?:()=>void
}

export const Botao = ({textoBotao, type, onClick}:Props)=>{
    return(
        <button onClick={onClick} type={type} className='botao'>{textoBotao}</button>
    )
}