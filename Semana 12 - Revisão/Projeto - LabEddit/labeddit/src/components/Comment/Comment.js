import { Container, Name, Text, Likes } from './CommentStyles'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

function Comment(props) {
  return <Container>
    <div>
      <Name>{props.username}</Name>
      <Text>{props.text}</Text>
    </div>
    <Likes>
      <button onClick={props.onClickUp}><ArrowUpIcon /></button>
      {props.votesCount}
      <button onClick={props.onClickLow}><ArrowDownIcon /></button>
    </Likes>
  </Container>
}

export default Comment