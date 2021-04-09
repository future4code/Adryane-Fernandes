import { Container, Text } from '../styles/component/NoProfileWarningStyles'
import { ZoomIn } from 'animate-css-styled-components';
import { CgProfile } from 'react-icons/cg'
import { Icon } from "@chakra-ui/react"

function NoProfileWarning(props) {
  return (
    <Container>
      <ZoomIn>
        <Icon as={CgProfile} w={65} h={65} color='brand.red'/>
        <Text>Não há mais perfis</Text>
      </ZoomIn>
    </Container>
  )
}

export default NoProfileWarning