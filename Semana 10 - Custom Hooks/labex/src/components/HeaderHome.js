import { Container } from '../styles/component/HeaderHomeStyles'
import ButtonGhost from './ButtonGhost'
import Logo from './Logo'
import {useHistory} from 'react-router-dom'

function HeaderHome() {
    const history = useHistory()
    return (
        <Container>
            <Logo />
            <ButtonGhost 
                name={'Administrador'}
                onClick={() => history.push('/login')}
            />
        </Container>)
}

export default HeaderHome