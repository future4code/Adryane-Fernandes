import { Button } from "@chakra-ui/react"

function ButtonGhost(props) {
  return (
    <div onClick={props.onClick}>
      <Button
        color={props.color}
        variant="ghost"
        _hover={{ bg: "rgba(255, 255, 255, .1)" }}
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