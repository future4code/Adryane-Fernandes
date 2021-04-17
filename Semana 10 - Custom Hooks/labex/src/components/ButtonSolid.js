import { Button } from "@chakra-ui/react"

function ButtonGhost(props) {
  return (
    <div onClick={props.onClick}>
      <Button
        color='white'
        bg='#FEAE33'
        borderRadius='40px'
        // variant="ghost"
        _hover={{ 
            bg: "#FEAE00"
         }}
        _active={{
          bg: "#",
          transform: "scale(0.98)",
          borderColor: "#",
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

export default ButtonGhost