import { useState } from 'react'
import useForm from '../../hooks/useForm'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, ContainerButton } from '../../styles/ButtonFormStyles'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { InputPattern } from "../../components/InputPattern"
import { ButtonPattern } from '../../components/ButtonPattern'

function Registerform() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const initialState = {
    email: '',
    password: '',
    username: ''
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    resetForm()
  }

  return  <form onSubmit={onSubmitForm}>
  <InputPattern
    placeholder="Nome"
    type={'text'}
    name={'username'}
    value={form.username}
    onChange={onChange}
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