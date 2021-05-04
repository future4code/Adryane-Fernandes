import { useHistory } from 'react-router'
import { goToFeed, goToLogin } from '../../router/coordinator'
import { Container, TextLogo, LogoutButton, ContainerLogo, Image } from './HeaderStyles'
import logo from '../../assents/imageLogo.png'
function Header() {
  const history = useHistory()

  const logout = () => {
    window.localStorage.removeItem('token')
    goToLogin(history)
  }

  return <Container>
    <ContainerLogo>
      <Image src={logo} alt={'logo'}/>
      <TextLogo onClick={() => goToFeed(history)}>LabEddit</TextLogo>
    </ContainerLogo>
    <LogoutButton onClick={logout}>Logout</LogoutButton>
  </Container>
}

export default Header