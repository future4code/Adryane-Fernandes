import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import { token } from '../../APIConfig/token'
import Loading from '../../components/Loading/Loading'
import { voteUp, voteLow } from '../../functions/vote'

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


  const allComments = post && post.comments.map((comment) => {

    return <Comment
      key={comment.id}
      username={comment.username}
      text={comment.text}
      votesCount={comment.votesCount}
      onClickUp={() => voteUp(pathParams.id, comment.id)}
      onClickLow={() => voteLow(pathParams.id, comment.id)}
    />
  })

  return <>
    {!post ? <Loading /> :
      <Container>
        <Post
          username={post && post.username}
          title={post && post.title}
          text={post && post.text}
          votesCount={post && post.votesCount}
          commentsCount={post && post.commentsCount}
          onCLickUp={() => voteUp(pathParams.id)}
          onCLickLow={() => voteLow(pathParams.id)}
        />
        <Text>Comentários</Text>
        <Comments>
          {allComments}
        </Comments>
        <Footer />
      </Container>
    }

  </>
}

export default DetailsPostPage