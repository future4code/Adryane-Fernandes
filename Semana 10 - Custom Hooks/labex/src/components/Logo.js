import logoBlack from '../assents/logoBlack.png'
import logoRed from '../assents/logoRed.png'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: 6rem;
`

function Logo(props) {
  let image
  if(props.color === 'black'){
    image = logoBlack
  } else if (props.color === 'red'){
    image = logoRed
  }

  return <LogoImg src={image} alt={'Logo labex'} />
}

export default Logo