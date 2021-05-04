import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    padding: 4rem 2rem 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px #333;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Inputs = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;

    border: none;
    border-bottom: 2px #733236 solid ;
    border-radius: 5px;

    &:focus{
        outline: none;
        border: 1px solid #9D7982;
        box-shadow: 0 0 0 0;
    }
`
const InputName = styled(Inputs)``
const InputEmail = styled(Inputs)``

const Button = styled.button`
    padding: 0.4rem 1rem;
    margin: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;

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

const ButtonAdd = styled(Button)`
    background: #733236;
    color: #E3DBD3;
`

const ButtonScreen = styled(Button)`
    margin-top: 2rem;
    background: #E3DBD3;
    color: #733236;
    border: 1px solid #733236;
`

export default class Register extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    onChangeName = (e) => {
        this.setState({ inputName: e.target.value })
    }
    onChangeEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    createUser = async () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        try {
            const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
                headers: {
                    Authorization: 'adryane-fernandes-cruz'
                }
            })

            this.getUsers()
            this.setState({ inputEmail: '', inputName: '' })
            this.setState({ page: 'list' })
            alert('Usuário criado :)')
            
        } catch (err) {
            if (!this.state.inputName || !this.state.inputEmail) {
                alert('Por favor, preencha todos os campos corretamente.')
            } else {
                console.log(err.response.data)
                alert('Erro ao criar usuário!')
            }
        }
    }

    render() {
        return (
            <Container>
                <InputName
                    placeholder={'Nome'}
                    value={this.props.valueName}
                    onChange={this.props.onChangeName}
                />
                <InputEmail
                    type='email'
                    placeholder={'Email'}
                    value={this.props.valueEmail}
                    onChange={this.props.onChangeEmail}
                />

                <ButtonAdd onClick={this.props.onClickAdd}>Adicionar</ButtonAdd>
                <ButtonScreen onClick={this.props.onClickNext}>Tela de usuários</ButtonScreen>
            </Container>
        )
    }
}