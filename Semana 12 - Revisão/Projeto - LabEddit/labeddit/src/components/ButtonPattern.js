import {Button} from '@chakra-ui/react'


export function ButtonPattern(props){
  return <Button
    borderRadius='20px'
    background={props.background ? props.background : 'brand.blueDark'}
    color={props.color ? props.color : 'white'} 
    margin={props.margin ? props.margin : '.5rem'} 
    height={props.height}
    size='md'
    onClick={props.onClick}
    icon={props.icon}
    marginBottom={props.marginBottom}
    padding={props.padding}

    _hover={{
      background: props.bgHover ? props.bgHover : '#080852'
    }}
    _active={{
      background: props.bgActive ? props.bgActive : 'brand.blueDark'
    }}
    _focus={{
      boxShadow: props.boxShadow ? props.boxShadow :
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    }}
  >
    {props.text}
  </Button>
}
