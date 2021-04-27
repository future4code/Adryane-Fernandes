import { Container } from '../styles/components/FooterStyles'

function Footer(props) {
  return <Container
  background={props.background}
  color={props.color}
  > 
    <p>LabEddit &copy; 2021 - Todos os direitos reservados</p>
  </Container>
}

export default Footer