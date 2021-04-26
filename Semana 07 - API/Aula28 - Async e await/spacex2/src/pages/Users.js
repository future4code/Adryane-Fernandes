import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px #333;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const User = styled.p`
    list-style: none;
`
const ButtonBack = styled.button`
    padding: 0.4rem 1rem;
    margin: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background: #733236;
    color: #E3DBD3;

    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:focus{
        outline: none;
        border: 1px solid #9D7982;
        box-shadow: 0 0 0 0;
    }
`
export default class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = async () => {
        try {
            const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
                headers: {
                    Authorization: 'adryane-fernandes-cruz'
                })

            this.setState({ users: res.data })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

deleteUser = async (id) => {
    try {
        const responde = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: 'adryane-fernandes-cruz'
            })

        const deleteUser = confirm('Deseja deletar usuário?')
        if (deleteUser) {
            this.getUsers()
            alert('Usuário apagado!')
        } 
        
    } catch (err) {
        console.log(err.response.data)
        alert('Erro ao apagar usuário!')
    }
}

render() {
    return (
        <Container>
            <User>{this.props.list}</User>
            <ButtonBack onClick={this.props.onClick}>Voltar</ButtonBack>
        </Container>
    )
}
    }