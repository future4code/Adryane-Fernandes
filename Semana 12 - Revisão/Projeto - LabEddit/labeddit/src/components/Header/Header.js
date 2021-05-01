import { useHistory } from 'react-router'
import { goToLogin } from '../../router/coordinator'
import { Container, Logo, LogoutButton } from './HeaderStyles'

function Header({rightButtonText, setRightButtonText}) {
  const history = useHistory()

  const logout = () => {
    window.localStorage.removeItem('token')
    goToLogin(history)
  }

  return <Container>
    <Logo>LabEddit</Logo>
    <LogoutButton onClick={logout}>Logout</LogoutButton>
  </Container>
}

export default Header