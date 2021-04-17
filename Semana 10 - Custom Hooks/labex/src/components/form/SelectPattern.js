import { Select } from '@chakra-ui/react'
import { Label } from '../../styles/component/LabelStyles'


function SelectPattern(props) {
  return <>
  <Label>{props.label}</Label>
    <Select
      required
      name={props.name}
      value={props.value}
      onChange={props.onChange}

      variant="flushed"
      borderColor='gray'
      boxShadow='1px 1px 4px rgba(0, 0, 0, .5)'
      borderRadius='5px'
    >
      <option defaultValue> Escolha uma opção </option>
      {props.options}
    </Select>
  </>
}

export default SelectPattern