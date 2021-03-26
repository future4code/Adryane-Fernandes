import React from 'react'
import styled from 'styled-components'
import { baseUrl, headers } from '../parameters'
import axios from 'axios'

const Container = styled.div `
  display: flex;
  flex-direction: column;
`
export default class CreatePlaylistPage extends React.Component {
  state = {
    inputNamePl: ''
  }

  handleNome = (event) => {
    this.setState({ inputNamePl: event.target.value })
  }

  createPlaylist = async () => {
    const body = {
      name: this.state.inputNamePl
    }
    try {
      const response = await axios.post(baseUrl, body, headers)

      this.setState({inputNamePl: ''})
      console.log(response.data)
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    return (
      <Container>
        <h2>Crie sua playlist</h2>
        <input
          placeholder='Nome da playlist'
          onChange={this.handleNome}
          value={this.state.inputNamePl}
        />

        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </Container>
    )
  }
}