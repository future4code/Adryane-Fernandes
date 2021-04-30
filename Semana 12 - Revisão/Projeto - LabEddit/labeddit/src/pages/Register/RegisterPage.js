import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../router/coordinator'
import { Container, Card, Title, Text, ButtonRegister } from './RegisterStyles'
import Footer from '../../components/Footer/Footer'
import Registerform from './RegisterForm'
import { token } from '../../APIConfig/token'

function RegisterPage() {
  const history = useHistory()
  useEffect(() => {
    if (token){
      history.push('/')
    }
  }, [history])

  return <Container>
    <Card>
      <Title>Cadastro</Title>
      <Registerform />
      <Text>Já tem uma conta? Faça <ButtonRegister onClick={() => history.push('/login')}>login</ButtonRegister> agora</Text>
    </Card>
    <Footer
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default RegisterPage