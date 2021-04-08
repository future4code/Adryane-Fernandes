import React  from 'react'
import { Icon, Button } from "@chakra-ui/react"
import { SmallCloseIcon, } from '@chakra-ui/icons'
import { AiFillHeart } from 'react-icons/ai'
import { FaFire } from 'react-icons/fa'
import { Profile, Infos, Name, Age, Description, BackgroundBlack, ContainerButton, List, Photo, ContainerPhoto } from '../styles/ScreenMatchsStyles'

function ScreenMatchs(props) {
  return (
    <Profile>
      <List onClick={props.onClick}>
        <Icon w={6} h={6} as={FaFire} color="brand.darkRed" />
      </List>
      <ContainerPhoto>
        <Photo src={props.photo} />
      </ContainerPhoto>
      <BackgroundBlack>

        <Infos>
          <Name>{props.name} <Age>{props.age}</Age></Name>
          <Description>{props.bio}</Description>
        </Infos>

        <ContainerButton>
          <Button
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
    </Profile>
  )
}

export default ScreenMatchs