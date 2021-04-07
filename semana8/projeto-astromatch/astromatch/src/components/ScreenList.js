import React from 'react'
import { Avatar, Button } from "@chakra-ui/react"
import { Container, ContainerProfile, Name, ProfileList, ContainerButton } from '../styles/ScreenListStyles'

function ScreenList() {
  return (
    <Container>
      <ProfileList>
        <ContainerProfile>
          <Avatar size="xl" src="https://bit.ly/code-beast" />
          <Name>Marco Hugo</Name>
        </ContainerProfile>
        <ContainerProfile>
          <Avatar size="xl" src="https://bit.ly/code-beast" />
          <Name>Marco Hugo</Name>
        </ContainerProfile>
        <ContainerProfile>
          <Avatar size="xl" src="https://bit.ly/code-beast" />
          <Name>Marco Hugo</Name>
        </ContainerProfile>
        <ContainerProfile>
          <Avatar size="xl" src="https://bit.ly/code-beast" />
          <Name>Marco Hugo</Name>
        </ContainerProfile>
      </ProfileList>

      <ContainerButton>
        <Button
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
    </Container>
  )
}

export default ScreenList