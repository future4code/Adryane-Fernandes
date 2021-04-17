import { Button } from "@chakra-ui/react"

function ButtonPattern(props) {
  let bgPattern, colorHoverPattern
  if(!props.variant){
    bgPattern = '#FEAE33'
    colorHoverPattern = '#ddAE33'
  }else{
    bgPattern = ''
    colorHoverPattern = 'rgba(0, 0, 0, 0.15)'
  }
  return (
    <div onClick={props.onClick}>
      <Button
        color={props.color ? props.color : 'white'}
        variant={props.variant ? props.variant : 'solid'}
        bg= {props.bg ? props.bg : bgPattern}
        borderRadius='40px'
        margin={props.margin}
        _hover={{ 
            bg: props.colorHover ? props.colorHover : colorHoverPattern
         }}
        _active={{
          bg: "",
          transform: "scale(0.98)",
        }}
        _focus={{
          boxShadow:
            "",
        }}
        
      >
        {props.name}
      </Button>
    </div>
  )
}

export default ButtonPattern