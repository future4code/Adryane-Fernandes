import React from 'react'
import './IconeSemContador.css'

export function IconeSemContador(props) {
    return <div>
        <img src={props.imagem} alt={'Ícone salvar'} onClick={props.onClickSalvo}/>
    </div>
}