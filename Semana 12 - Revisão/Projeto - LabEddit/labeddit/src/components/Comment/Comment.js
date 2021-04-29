import { Container, Name, Text, Likes } from './CommentStyles'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

function Comment(props) {
  return <Container>
    <div>
      <Name>{props.username}</Name>
      <Text>{props.text}</Text>
    </div>
    <Likes>
        <ArrowUpIcon /> {props.userVoteDirection} <ArrowDownIcon />
      </Likes>
  </Container>
}

export default Comment