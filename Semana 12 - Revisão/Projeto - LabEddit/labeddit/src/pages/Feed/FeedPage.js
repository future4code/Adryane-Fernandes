import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Container, Posts, FooterContainer } from './FeedStyles'
import useRequestData from '../../hooks/useRequestData'
import FeedForm from './FeedForm'
import { token } from '../../APIConfig/token'
import vote from '../../requests/vote'


function FeedPage() {
  const history = useHistory()
  const apiPosts = useRequestData([], '/posts')

  const goToPostDetails = (id) => {
    history.push(`/post/${id}`)
  }
  useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  }, [history])

  
  const voteUp = (id) => {
    vote(id, {direction: +1})
  }
  const voteLow = (id) => {
    vote(id, {direction: -1})
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

  return <Container>
    <Posts>
      {posts}
    </Posts>
    <div>
      <FeedForm />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  </Container >
}

export default FeedPage