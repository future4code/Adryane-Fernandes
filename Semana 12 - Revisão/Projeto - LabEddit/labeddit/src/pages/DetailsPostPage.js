import { Container, Comments, Text } from '../styles/pages/DetailsPostStyles'
import Post from '../components/Post'
import Comment from '../components/Comment'


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