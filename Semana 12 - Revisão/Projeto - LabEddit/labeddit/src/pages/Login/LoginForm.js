import { useState } from 'react'
import useForm from '../../hooks/useForm'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { InputPattern } from "../../components/InputPattern"
import { ButtonPattern } from '../../components/ButtonPattern'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, ContainerButton } from '../../styles/ButtonFormStyles'
import login from '../../functions/login'


function LoginForm() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  const initialState = {
    email: '',
    password: '',
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const bodyApi = {
    email: form.email,
    password: form.password
  }
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(bodyApi)

    resetForm()
  }

  return <form onSubmit={onSubmitForm}>
    <InputPattern
      placeholder={'Email'}
      name={'email'}
      value={form.email}
      onChange={onChange}
      type={'email'}
      pattern={'[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+'}
    />

    <InputGroup size="md">
      <InputPattern
        placeholder={"Senha"}
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
      <Button type={'submit'}>Entrar</Button>
    </ContainerButton>
  </form>
}

export default LoginForm