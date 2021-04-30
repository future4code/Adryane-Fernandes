import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import { token } from '../../APIConfig/token'
import vote from '../../requests/vote'

function DetailsPostPage() {
  const pathParams = useParams()
  const infosPost = useRequestData({}, `/posts/${pathParams.id}`)
  const post = infosPost.post

  const history = useHistory()

  useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  }, [history])

  const oneComment = post && post.comments.map((post) => {
    return <Comment 
      username={post.username}
      text={post.text}
      userVoteDirection={post.userVoteDirection}
    />
  })

  const voteUp = (id) => {
    vote(pathParams.id, {direction: +1})
  }
  const voteLow = (id) => {
    vote(pathParams.id, {direction: -1})
  }

  return <Container>
    <Post
      username={post && post.username}
      title={post && post.title}
      text={post && post.text}
      votesCount={post && post.votesCount}
      commentsCount={post && post.commentsCount}
      onCLickUp={() => voteUp(post.id)}
      onCLickLow={() => voteLow(post.id)}
    />
    <Text>Comentários</Text>
    <Comments>
      {oneComment}
    </Comments>
    <Footer />
  </Container>
}

export default DetailsPostPage