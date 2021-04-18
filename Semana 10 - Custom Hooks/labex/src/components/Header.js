import Logo from './Logo'
import { useHistory } from 'react-router-dom'
import ButtonPattern from './ButtonPattern'
import {Container, ContainerButton} from '../styles/component/HeaderStyles'

function Header(props) {
  const history = useHistory()

  return (
    <Container>
      <Logo
        color={props.colorLogo}
      />
      {props.isHome &&
        <ContainerButton>
          <ButtonPattern
            onClick={() => history.push('/admin/trips/list')}
            variant={'ghost'}
            name={'Administrador'}
            colorHover={'rgba(255, 255, 255, .2)'}

          />
        </ContainerButton>
      }
    </Container>)
}

export default Header