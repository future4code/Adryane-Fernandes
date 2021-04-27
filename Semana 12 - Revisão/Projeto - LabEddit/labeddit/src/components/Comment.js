import { Container, Name, Text, Likes } from '../styles/components/CommentStyles'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

function Comment() {
  return <Container>
    <div>
      <Name>Name</Name>
      <Text>asdasdasd</Text>
    </div>
    <Likes>
        <ArrowUpIcon /> 0 <ArrowDownIcon />
      </Likes>
  </Container>
}

export default Comment