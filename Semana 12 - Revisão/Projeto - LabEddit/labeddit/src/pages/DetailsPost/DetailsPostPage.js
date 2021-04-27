import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'


function DetailsPostPage() {
  return <Container>
    <Post />
    <Text>Comentários</Text>
    <Comments> 
      <Comment />
    </Comments>
    </Container>
}

export default DetailsPostPage