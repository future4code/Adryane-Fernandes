import React from 'react'
import styled from "styled-components"
import Register from "./pages/Register"
import Users from './pages/Users'

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
    page: 'home'
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
  

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <ContainerUsers key={user.id}>
          <User> {user.name} </User>
          <ButtonDel onClick={() => this.deleteUser(user.id)}>X</ButtonDel>
        </ContainerUsers>
      )
    })

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

