import { useHistory } from 'react-router-dom'
import { Container, Card, Title, Text, ButtonRegister } from './RegisterStyles'
import Footer from '../../components/Footer/Footer'
import Registerform from './RegisterForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

function RegisterPage() {
  useUnprotectedPage()
  const history = useHistory()

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