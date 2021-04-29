import { Container, Logo, LogoutButton } from './HeaderStyles'

function Header() {
  const logout = () => {
    window.localStorage.removeItem('token')
  }

  return <Container>
    <Logo>LabEddit</Logo>
    <LogoutButton onClick={logout}>Logout</LogoutButton>
  </Container>
}

export default Header