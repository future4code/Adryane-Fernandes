import Logo from './Logo'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ButtonPattern from './ButtonPattern'

const Container = styled.header`
  display: flex;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid gray; */
`

const ContainerButton = styled.div`
  align-self: flex-end;
  position: fixed;
  right: 1rem;
  top: 2rem;
`

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

      <hr />
    </Container>)
}

export default Header