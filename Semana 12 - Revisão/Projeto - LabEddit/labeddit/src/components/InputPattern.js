import { Input } from "@chakra-ui/react"

export function InputPattern(props) {
  return <Input
    required
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    type={props.type}
    pattern={props.pattern}
    title={props.title}
    min={props.min}

    size='md'
    margin='.5rem 0'
    variant="flushed"
    borderBottomColor='black'
    borderRadius='5px'
    padding='0 .5rem'
  />
}