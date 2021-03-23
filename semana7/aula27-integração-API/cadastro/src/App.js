import React from 'react'
import axios from 'axios'
import styled from "styled-components"
import Register from "./components/Register"
import Users from './components/Users'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://image.freepik.com/vetores-gratis/cartao-floral_53876-91231.jpg');
  background-size: cover;
  background-position: center;
  
`

const ContainerUsers = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 2px;

  border-bottom: 2px solid #9D7982;
  margin: 2rem 0;
  width: 15rem;
`

const User = styled.div`
  font-weight: 500;
  font-size: 1rem;
  padding-left: 0.5rem;
`

const ButtonDel = styled.button`
    margin: .2rem;
    font-size: 1rem;
    border: none;
    color: gray;

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

export default class App extends React.Component {
  state = {
    users: [],
    inputName: '',
    inputEmail: '',
    page: 'home'
  }

  componentDidMount = () => {
    this.getUsers()
  }

  // Inputs
  onChangeName = (e) => {
    this.setState({ inputName: e.target.value })
  }
  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  //Funções
  backScreen = () => {
    this.setState({ page: 'home' })
    console.log(this.state.page)
  }
  listScreen = () => {
    this.setState({ page: 'list' })
    console.log(this.state.page)
  }

  //API
  getUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'adryane-fernandes-cruz'
      }
    }).then((res) => {
      this.setState({ users: res.data })
    }).catch((err) => {
      console.log(err.response.data)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'adryane-fernandes-cruz'
      }
    }).then((res) => {
      alert('Usuário criado com sucesso!')
      this.getUsers()
      this.setState({ inputEmail: '', inputName: '' })
      this.setState({ page: 'list' })
    }).catch((err) => {
      if (!this.state.inputName || !this.state.inputEmail) {
        alert('Por favor, preencha todos os campos corretamente.')
      } else {
        console.log(err.response.data)
        alert('Erro ao criar usuário!')
      }

    })
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'adryane-fernandes-cruz'
      }
    }).then((res) => {
      this.getUsers()
      alert('Usuário apagado!')
    }).catch((err) => {
      console.log(err.response.data)
      alert('Erro ao apagar usuário!')
    })
  }

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <ContainerUsers key={user.id}>
          <User> {user.name} </User>
          <ButtonDel onClick={() => this.deleteUser(user.id)}>X</ButtonDel>
        </ContainerUsers>
      )
    })

    // Rendezição da tela
    const renderScreen = () => {
      if (this.state.page === 'home') {
        return (
          <Register
            valueName={this.state.inputName}
            onChangeName={this.onChangeName}

            valueEmail={this.state.inputEmail}
            onChangeEmail={this.onChangeEmail}

            onClickAdd={this.createUser}
            onClickNext={this.listScreen}
          />
        )
      } else if (this.state.page === 'list') {
        return (
          <Users
            list={usersList}
            onClick={this.backScreen}
          />
        )
      }
    }

    return (
      <Container>
        {renderScreen()}
      </Container>
    );
  }
}

