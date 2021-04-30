import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { ButtonPattern, ContainerButton } from '../../styles/ButtonFormStyles'
import { InputPattern } from "../../components/InputPattern"
import signup from '../../requests/signup'
import { token } from '../../APIConfig/token'
import InputPassword from '../../components/InputPassword'

function Registerform() {
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
    <InputPassword
      value={form.password}
      onChange={onChange}
    />

    <ContainerButton>
      <ButtonPattern type={'submit'}>Cadastrar</ButtonPattern>
    </ContainerButton>
  </form>
}

export default Registerform