import React from 'react'
import { Button, Collapse, Icon } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon, SmallCloseIcon, } from '@chakra-ui/icons'
import { AiFillHeart } from 'react-icons/ai'
import { FaFire } from 'react-icons/fa'
import { Profile, Infos, Name, Age, Description, BackgroundBlack, ContainerButton, List } from '../styles/ScreenMatchsStyles'


function ScreenMatchs(props) {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Profile>
      <List>
        <Icon w={6} h={6} as={FaFire} color="brand.darkRed" />
      </List>
      <BackgroundBlack>
        <Infos>
          <Name>Fulaninha de tal <Age>26</Age></Name>
          <>
            <Collapse startingHeight={25} in={show}>
              <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae beatae iure consectetur quibusdam molestiae eum totam blanditiis vel facilis corrupti nobis nam ducimus deleniti quis, quisquam atque. Iusto, eius architecto?</Description>
            </Collapse>
            <Button
              size="xs"
              onClick={handleToggle}
              mt=".2rem"
              variant="ghost"
              color="gray"

              _hover={{ transform: "scale(1.1)" }}
              _active={{
                bg: "",
                borderColor: "",
              }}
              _focus={{
                boxShadow:
                  "",
              }}
            >
              Ver {show ? "menos" : "mais"}
              {show ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </Button>
          </>
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