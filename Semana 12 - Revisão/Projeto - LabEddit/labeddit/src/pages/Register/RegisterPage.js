import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../router/coordinator'
import { Container, Card, Title, Text, ButtonRegister } from './RegisterStyles'
import Footer from '../../components/Footer/Footer'
import Registerform from './RegisterForm'

function RegisterPage() {
  const history = useHistory()

  return <Container>
    <Card>
      <Title>Cadastro</Title>
      <Registerform />
      <Text>Já tem uma conta? Faça <ButtonRegister onCLick={() => goToLogin(history)}>login</ButtonRegister> agora</Text>
    </Card>
    <Footer
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default RegisterPage