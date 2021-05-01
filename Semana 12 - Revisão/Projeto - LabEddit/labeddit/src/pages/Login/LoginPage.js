import { useHistory } from 'react-router-dom'
import { Container, Card, Title, Text, ButtonRegister } from './LoginStyles'
import Footer from '../../components/Footer/Footer'
import LoginForm from './LoginForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

function LoginPage({buttonHeader, setButtonHeader}) {
  useUnprotectedPage()
  const history = useHistory()

  return <Container>
    <Card>
      <Title>Login</Title>
      <LoginForm />
      <Text>Não tem uma conta? Se <ButtonRegister onClick={() => history.push('/cadastro')}>cadastre</ButtonRegister> agora</Text>
    </Card>
    <Footer
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default LoginPage