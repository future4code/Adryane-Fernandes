import { Input } from '@chakra-ui/react'
import { Label } from '../../styles/component/LabelStyles'

function InputPattern(props) {

  return <>
    <Label>{props.label}</Label>
    <Input
      required
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      pattern={props.pattern}
      title={props.title}

      variant="flushed"
      borderColor='gray'
      boxShadow='1px 1px 4px rgba(0, 0, 0, .5)'
      borderRadius='10px'
      padding='.5rem'
      marginBottom='1rem'
      marginTop='-.4rem;'
    />
  </>
}

export default InputPattern