import React from 'react'
import { Avatar, Button, Icon } from "@chakra-ui/react"
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { Container, ContainerProfile, Name, ProfileList, ContainerButton, ContainerMessage, PhraseMessage } from '../styles/pages/ScreenListStyles'

function ScreenList(props) {

  const listMatches = props.list.map((person) => {
    return <ContainerProfile key={person.id}>
      <Avatar size="xl" src={person.photo} />
      <Name>{person.name}</Name>
    </ContainerProfile>

  })

  const renderButton = () => {
    if (listMatches.length === 0) {
      return (
        <ContainerMessage>
          <Icon as={HiOutlineEmojiSad} w={20} h={20} color='brand.red' />
          <PhraseMessage>Nenhum match no momento</PhraseMessage>
        </ContainerMessage>
      )
    } else {
      return (
        <ContainerButton>
          <Button
            onClick={props.onClickLimpar}
            bg="brand.red"
            color='white'
            width='10rem'

            _hover={{ bg: 'brand.darkRed' }}
            _active={{
              bg: 'brand.darkRed',
              transform: "scale(0.98)",
            }}
            _focus={{
              boxShadow: "0 0 1px 2px rgba(255, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, .15)"
            }}
          >
            Limpar matchs
      </Button>
        </ContainerButton>
      )
    }
  }
  return (
    <Container>
      <ProfileList>
        {listMatches}
      </ProfileList>
      {renderButton()}
    </Container >
  )
}

export default ScreenList