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
  width: 500px;
`
const Tittle = styled.h2`
  color: white;
  
`
const InputName = styled.input `
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #60d1c1;
  border-radius: 3px;
  margin-bottom: 0.5rem;

  &:focus{
    outline: none;
    border: 1px solid #60d1c1;
    box-shadow: 0 0 0 0;
  }
`
const ContainerButton = styled.div `
  display: flex;
  justify-content: center;
`
const ButtonCreate = styled.button `
  background-color: #60d1c1;
  font-weight:600;
  font-size: 1rem;
  width: 30%;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;

  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  &:focus{
    outline: none;
    border: 0 none;
    box-shadow: 0 0 0 0;
  }
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
          placeholder='Nome'
          onChange={this.handleNome}
          value={this.state.inputNamePl}
        />

      <ContainerButton>
        <ButtonCreate onClick={this.createPlaylist}>Criar Playlist</ButtonCreate></ContainerButton>
        
      </Container>
    )
  }
}