import React from 'react'
import styled from 'styled-components'
import { baseUrl, headers } from '../parameters'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  background: black;
  padding: 1rem;
  border-radius: 3px;
  height: 15rem;
  width: 50%;
`
const Tittle = styled.h2`
  color: white;
  
`
const InputName = styled.input `
  padding: 0.3rem;
  border: none;
  border-bottom: 3px solid orange;
  border-radius: 3px;
  margin-bottom: 0.5rem;
`

const ButtonCreate = styled.button `
  background-color: orange;
  font-weight:600;
  font-size: 1rem;
  width: 50%;
  /* margin: auto; */
  border: none;
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

      this.setState({ inputNamePl: '' })
      console.log(response.data)
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    return (
      <Container>
        <Tittle>Crie sua playlist</Tittle>
        <InputName
          placeholder='Nome da playlist'
          onChange={this.handleNome}
          value={this.state.inputNamePl}
        />

        <ButtonCreate onClick={this.createPlaylist}>Criar Playlist</ButtonCreate>
      </Container>
    )
  }
}