import { useParams } from 'react-router-dom'
import { Container, Comments, Text } from './DetailsPostStyles'
import useProtectedPage from '../../hooks/useProtectedPage'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { voteUp, voteLow } from '../../functions/vote'

function DetailsPostPage() {
  useProtectedPage()
  const pathParams = useParams()
  const infosPost = useRequestData({}, `/posts/${pathParams.id}`)
  const post = infosPost.post

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