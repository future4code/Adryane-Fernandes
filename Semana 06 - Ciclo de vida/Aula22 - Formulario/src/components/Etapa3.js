import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Etapa3 extends React.Component {
    state = {
        valorTextArea: ''
    }

    render() {
        const textArea = () => {
            this.setState({ valorTextArea: this.target.value })
        }
        return <Container>
            <h1>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h1>

            <label>Por que você não terminou um curso de graduação?</label>
            <textarea onChange={textArea} value={this.valorTextArea}></textarea>

            <select> Você fez algum curso complementar?
                <option>Curso técnico</option>
                <option>Cursos de inglês</option>
                <option>Não fiz curso complementar</option>
            </select>

            <button onClick={this.props.avancarEtapa}>Próxima etapa</button>
        </Container>
    }
}