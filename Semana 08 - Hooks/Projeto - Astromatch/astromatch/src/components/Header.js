import { ContainerLogo, Logo, ColorRed, ListMacthes, ListProfiles } from '../styles/component/HeaderStyles'
import { Icon } from "@chakra-ui/react"
import { AiFillHeart, AiFillFire } from 'react-icons/ai'



function Header(props) {
    const renderIconChangePage = () => {
        if (props.page === 'match') {
            return (
                <ListMacthes onClick={props.onClickFire} title="Lista de Matches">
                    <Icon w={6} h={6} as={AiFillFire} color="brand.darkRed" />
                </ListMacthes>
            )
        } else if (props.page === 'matchList') {
            return (
                <ListProfiles title="Perfis" onClick={props.onClickHeart}>
                    <Icon as={AiFillHeart} w={7} h={7} color='brand.darkRed' />
                </ListProfiles>
            )
        }
    }

    return <ContainerLogo>
        {renderIconChangePage()}
        <Logo>Astro<ColorRed>Match</ColorRed></Logo>
    </ContainerLogo>
}

export default Header