import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import useRequestData from '../../hooks/useRequestData'
import { token } from '../../APIConfig/token'

function DetailsPostPage() {
  const pathParams = useParams()
  const infosPost = useRequestData({}, `/posts/${pathParams.id}`)
  const post = infosPost.post
  console.log(post)

  const history = useHistory()
  useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  })

  const oneComment = post && post.comments.map((post) => {
    return <Comment 
      username={post.username}
      text={post.text}
      userVoteDirection={post.userVoteDirection}
    />
  })
  // console.log(comments)

  return <Container>
    <Post
      username={post && post.username}
      title={post && post.title}
      text={post && post.text}
      userVoteDirection={post && post.userVoteDirection}
      commentsCount={post && post.commentsCount}
    />
    <Text>Comentários</Text>
    <Comments>
      {oneComment}
    </Comments>
  </Container>
}

export default DetailsPostPage