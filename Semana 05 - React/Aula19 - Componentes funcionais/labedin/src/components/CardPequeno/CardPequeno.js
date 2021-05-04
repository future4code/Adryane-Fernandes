import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return <div>
        <div className='container'>
            <img src={props.imagemEmail} alt='Icone de email' />
            <b>Email: </b><span>{props.email}</span>
        </div>
        <div className='container'>
            <img src={props.imagemEndereco} alt='Icone de localização' />
            <b>Endereço: </b><span>{props.endereco}</span>
        </div>
    </div>
}

export default CardPequeno;
