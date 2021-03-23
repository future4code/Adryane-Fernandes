import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Etapa1 extends React.Component {
  state = {
    valorInputNome: '',
    valorInputIdade: '',
    valorInputEmail: ''
  }

  render() {
    const inputNome = (event) => {
      this.setState({ valorInputNome: event.target.value })
    }
    const inputIdade = (event) => {
      this.setState({ valorInputIdade: event.target.value })
    }
    const inputEmail = (event) => {
      this.setState({ valorInputEmail: event.target.value })
    }


    return (
      <Container>
        <h1>Etapa 1: Dados gerais</h1>

        <label>Nome:</label>
        <input type='text' onChange={inputNome} value={this.state.valorInputNome} />

        <label>Idade:</label>
        <input type='number' onChange={inputIdade} value={this.state.valorInputIdade} />

        <label>Email:</label>
        <input type='email' onChange={inputEmail} value={this.state.valorInputEmail} />

        <label>Grau de escolaridade:</label>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>

        <button onClick={this.props.avancarEtapa}>Próxima etapa</button>
      </Container>
    )
  }


}