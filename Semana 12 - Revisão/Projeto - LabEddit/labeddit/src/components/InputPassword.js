import { useState } from 'react'
import { InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { InputPattern } from "./InputPattern"


function InputPassword(props) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return <InputGroup size="md">
    <InputPattern
      placeholder={"Senha"}
      name={'password'}
      value={props.value}
      onChange={props.onChange}
      type={show ? "text" : "password"}
    />
    <InputRightElement>
      <Button
        marginBottom={'-.1rem'}
        onClick={handleClick}
        background={'rgba(255, 255, 255, 0)'}
        color={'#000'}
        bgHover={'white'}
        boxShadow={'none'}
        bgActive={'white'}
        _focus={{ boxShadow: "" }}
        _active={{ background: '' }}
      >{show ? <ViewIcon /> : <ViewOffIcon />} </Button>
    </InputRightElement>
  </InputGroup>
}

export default InputPassword