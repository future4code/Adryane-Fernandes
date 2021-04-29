import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Container, Posts, FooterContainer } from './FeedStyles'
import useRequestData from '../../hooks/useRequestData'
import FeedForm from './FeedForm'
import { token } from '../../APIConfig/token'


function FeedPage() {
  const history = useHistory()
  const apiPosts = useRequestData([], '/posts')

  const goToPostDetails = (id) => {
    history.push(`/post/${id}`)
  }
  useEffect(() => {
    if (!token){
      history.push('/login')
    }
  })


  const posts = apiPosts.posts && apiPosts.posts.map((post) => {
    return <Post
      key={post.id}
      username={post.username}
      title={post.title}
      text={post.text}
      userVoteDirection={post.userVoteDirection}
      commentsCount={post.commentsCount}
      onClick={() => goToPostDetails(post.id)}
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