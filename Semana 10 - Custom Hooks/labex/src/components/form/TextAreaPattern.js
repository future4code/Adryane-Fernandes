import { Textarea } from '@chakra-ui/react'
import { Label } from '../../styles/component/LabelStyles'

function TextAreaPattern(props) {
  return <>
    <Label>{props.label}</Label>
    <Textarea
      required
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      minlength={props.minlength}
      title={props.title}

      // borderColor={'brand.orange'}
      variant="flushed"
      borderColor='gray'
      boxShadow='1px 1px 4px rgba(0, 0, 0, .5)'
      borderRadius='10px'
      padding='.5rem'
      marginBottom='1rem'
    />
  </>
}

export default TextAreaPattern