import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Card, Title, Text, ButtonRegister } from './LoginStyles'
import Footer from '../../components/Footer/Footer'
import LoginForm from './LoginForm'
import { token } from '../../APIConfig/token'

function LoginPage() {
  const history = useHistory()
  useEffect(() => {
    if (token){
      history.push('/')
    }
  }, [history])

  return <Container>
    <Card>
      <Title>Login</Title>
      <LoginForm />
      <Text>Não tem uma conta? Se <ButtonRegister>cadastre</ButtonRegister> agora</Text>
    </Card>
    <Footer
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default LoginPage