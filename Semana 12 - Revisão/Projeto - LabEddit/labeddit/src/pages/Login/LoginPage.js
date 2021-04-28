import { Container, Card, Title, Text, ButtonRegister } from './LoginStyles'
import Footer from '../../components/Footer/Footer'
import LoginForm from './LoginForm'

function LoginPage() {
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