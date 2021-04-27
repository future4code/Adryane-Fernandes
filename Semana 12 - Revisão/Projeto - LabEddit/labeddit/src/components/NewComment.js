import { Textarea, Icon } from '@chakra-ui/react'
import { Container, ContainerIcon } from '../styles/components/NewCommentStyles'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { ButtonPattern } from './ButtonPattern'

function NewComment() {
  return <Container>
    <Textarea
      placeholder={'Faça um comentário sobre isso'}
      border='none'
    />
    <ContainerIcon>
      <ButtonPattern 
        text={<Icon as={RiSendPlane2Fill} h={6} w={6}/>}
        background={'white'}
        color={'black'}
        bgHover={'white'}
        bgActive={'white'}
        boxShadow={'none'}
        padding={'0'}
        margin={'0'}
      />
      
    </ContainerIcon>
  </Container>
}

export default NewComment