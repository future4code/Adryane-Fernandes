import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import FeedForm from './FeedForm'
import { Container, FooterContainer } from './FeedStyles'
import { voteUp, voteLow } from '../../functions/vote'
import useProtectedPage from '../../hooks/useProtectedPage'

function FeedPage() {
  useProtectedPage()
  const history = useHistory()
  const apiPosts = useRequestData([], '/posts')

  const goToPostDetails = (id) => {
    history.push(`/post/${id}`)
  }

  const posts = apiPosts.posts && apiPosts.posts.map((post) => {
    return <Post
      key={post.id}
      username={post.username}
      title={post.title}
      text={post.text}
      votesCount={post.votesCount}
      commentsCount={post.commentsCount}
      onClick={() => goToPostDetails(post.id)}
      onCLickUp={() => voteUp(post.id)}
      onCLickLow={() => voteLow(post.id)}
    />
  })

  return <>
    {!apiPosts.posts ? <Loading /> :
      <Container>
        <section>
          {posts}
        </section>
        <div>
          <FeedForm />
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </div>
      </Container >
    }
  </>


}

export default FeedPage