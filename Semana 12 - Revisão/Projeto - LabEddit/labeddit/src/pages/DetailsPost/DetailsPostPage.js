import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import { token } from '../../APIConfig/token'
import vote from '../../requests/vote'
import voteComment from '../../requests/voteComment'
import Loading from '../../components/Loading/Loading'

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
  }, [history])



  const voteUp = () => {
    vote(pathParams.id, { direction: 1 })
  }
  const voteLow = () => {
    vote(pathParams.id, { direction: -1 })
  }
  const voteUpComment = (idComment) => {
    voteComment(pathParams.id, idComment, { direction: 1 })
  }
  const voteLowComment = (idComment) => {
    voteComment(pathParams.id, idComment, { direction: -1 })
  }

  const oneComment = post && post.comments.map((comment) => {
    return <Comment
      username={comment.username}
      text={comment.text}
      votesCount={comment.votesCount}
      onClickUp={() => voteUpComment(comment.id)}
      onClickLow={() => voteLowComment(comment.id)}
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
          onCLickUp={voteUp}
          onCLickLow={voteLow}
        />
        <Text>Comentários</Text>
        <Comments>
          {oneComment}
        </Comments>
        <Footer />
      </Container>
    }

  </>
}

export default DetailsPostPage