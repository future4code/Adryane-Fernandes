import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class EtapaFinal extends React.Component {
    render(){
        return <Container>
            <p>Questionário concluído. Obrigado!</p>
        </Container>
    }
}