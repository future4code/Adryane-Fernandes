import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, ContainerButton } from '../../styles/ButtonFormStyles'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { InputPattern } from "../../components/InputPattern"
import { ButtonPattern } from '../../components/ButtonPattern'
import signup from '../../requests/signup'
import { token } from '../../APIConfig/token'

function Registerform() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const history = useHistory()

  const initialState = {
    email: '',
    password: '',
    username: ''
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const bodyApi = {
    email: form.email,
    password: form.password,
    username: form.username
  }
  const onSubmitForm = (event) => {
    event.preventDefault()
    signup(bodyApi)

    if (token) {
      history.push('/')
    }
    resetForm()
  }

  return <form onSubmit={onSubmitForm}>
    <InputPattern
      placeholder="Nome"
      type={'text'}
      name={'username'}
      value={form.username}
      onChange={onChange}
      pattern={'^(.*[a-zA-Z0-9]){3}'}
      title={'O título deve conter no mínimo 3 caracteres'}
    />
    <InputPattern
      placeholder="Email"
      type={'email'}
      name={'email'}
      value={form.email}
      onChange={onChange}
    />

    <InputGroup>
      <InputPattern
        placeholder="Senha"
        name={'password'}
        value={form.password}
        onChange={onChange}
        type={show ? "text" : "password"}
      />
      <InputRightElement>
        <ButtonPattern
          marginBottom={'-.1rem'}
          onClick={handleClick}
          background={'rgba(255, 255, 255, 0)'}
          color={'#000'}
          bgHover={'white'}
          text={show ? <ViewIcon /> : <ViewOffIcon />}
          boxShadow={'none'}
          bgActive={'white'}
        />
      </InputRightElement>
    </InputGroup>

    <ContainerButton>
      <Button type={'submit'}>Cadastrar</Button>
    </ContainerButton>
  </form>
}

export default Registerform