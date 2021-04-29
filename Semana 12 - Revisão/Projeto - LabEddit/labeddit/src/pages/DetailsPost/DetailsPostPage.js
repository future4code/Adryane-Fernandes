import { useParams } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import useRequestData from '../../hooks/useRequestData'


function DetailsPostPage() {
  const pathParams = useParams()
  console.log(pathParams.id)
  const post = useRequestData('', `/posts/${pathParams.id}`)

  console.log(post)

  return <Container>
    <Post />
    <Text>Comentários</Text>
    <Comments>
      <Comment />
    </Comments>
  </Container>
}

export default DetailsPostPage