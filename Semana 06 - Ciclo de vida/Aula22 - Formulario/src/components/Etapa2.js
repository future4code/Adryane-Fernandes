import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`


export default class Etapa2 extends React.Component {
  render() {
    return (
      <Container>
        <h1>Etapa 2: ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior.</h1>
        <label>Curso:</label>
        <input type='text' onChange={this.inputCurso} />

        <label>Unidade de ensino:</label>
        <input type='text' onChange={this.inputUnidade} />

        <button onClick={this.props.avancarEtapa}>Próxima etapa</button>

      </Container>
    );
  }
}