import React from 'react'
import { Icon, Button } from "@chakra-ui/react"
import { SmallCloseIcon, } from '@chakra-ui/icons'
import { AiFillHeart } from 'react-icons/ai'
import { Profile, Infos, Name, Age, Description, BackgroundBlack, ContainerButton, Photo } from '../styles/pages/ScreenProfilesStyles'

function ScreenProfiles(props) {
  return (
    <Profile>
      {/* <List onClick={props.onClick} title="Lista de Matches">
        <Icon w={6} h={6} as={FaFire} color="brand.darkRed" />
      </List> */}
      <Photo image={props.photo}>
        <BackgroundBlack>
          <Infos>
            <Name>{props.name} <Age>{props.age}</Age></Name>
            <Description>{props.bio}</Description>
          </Infos>

          <ContainerButton>
            <Button
              onClick={props.onClickRecuse}
              borderRadius="100%"
              width='2rem'

              _hover={{ transform: "scale(1.2)", }}
              _active={{
                transform: "scale(1.1)",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, .15)",
              }}>
              <SmallCloseIcon w={6} h={6} />
            </Button>
            <Button
              onClick={props.onClickMatch}
              borderRadius="100%"
              width='2rem'

              _hover={{ transform: "scale(1.2)" }}
              _active={{
                transform: "scale(1.1)",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(218, 14, 51, 0.5), 0 1px 1px rgba(0, 0, 0, .15)",
              }}>
              <Icon w={5} h={5} as={AiFillHeart} color="brand.red" />
            </Button>
          </ContainerButton>
        </BackgroundBlack>
      </Photo>
    </Profile>
  )
}

export default ScreenProfiles