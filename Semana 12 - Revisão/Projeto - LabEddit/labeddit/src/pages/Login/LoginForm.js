import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { InputPattern } from "../../components/InputPattern"
// import { ButtonPattern } from '../../components/ButtonPattern'
import { ButtonPattern, ContainerButton } from '../../styles/ButtonFormStyles'
import login from '../../requests/login'
import { token } from '../../APIConfig/token'
import InputPassword from '../../components/InputPassword'


function LoginForm() {
  
  const history = useHistory()

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

    if (token) {
      history.push('/')
    }
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
    <InputPassword 
      value={form.password}
      onChange={onChange}
    />

    <ContainerButton>
      <ButtonPattern type={'submit'}>Entrar</ButtonPattern>
    </ContainerButton>
  </form>
}

export default LoginForm