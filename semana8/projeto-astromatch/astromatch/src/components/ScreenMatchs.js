import React from 'react'
import { Button, Collapse } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Profile, Infos, Name, Age, Description, BackgroundBlack } from '../styles/ScreenMatchsStyles'

function ScreenMatchs(props) {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Profile>
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
        <button>X</button>
        <button>S3</button>
      </BackgroundBlack>
    </Profile>
  )
}

export default ScreenMatchs