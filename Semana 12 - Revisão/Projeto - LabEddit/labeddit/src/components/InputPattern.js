import { Input } from "@chakra-ui/react"

export function InputPattern(props) {
  return <Input
    placeholder={props.placeholder}
    size='md'
    margin='.5rem 0'
    name={props.name}
    type={props.type}
    onChange={props.onChange}
    variant="flushed"
    borderBottomColor='black'
    borderRadius='5px'
    padding='0 .5rem'
  />}