import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import useRequestData from '../../hooks/useRequestData'
import { token } from '../../APIConfig/token'


function DetailsPostPage() {
  const pathParams = useParams()
  const post = useRequestData('', `/posts/${pathParams.id}`)

  console.log(post)

  const history = useHistory()
  useEffect(() => {
    if (!token){
      history.push('/login')
    }
  })
  return <Container>
    <Post />
    <Text>Comentários</Text>
    <Comments>
      <Comment />
    </Comments>
  </Container>
}

export default DetailsPostPage