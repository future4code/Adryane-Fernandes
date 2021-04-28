import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Container, Posts, FooterContainer } from './FeedStyles'
import useRequestData from '../../hooks/useRequestData'

import FeedForm from './FeedForm'

function FeedPage() {
  const postsToApi = useRequestData([], '/posts')

  const posts = postsToApi && postsToApi.map((post) => {
    return <Post
      user={post.username}
      title={post.title}
      text={post.text}
      like={post.userVoteDirection}
      numberComment={post.commentsCount}
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