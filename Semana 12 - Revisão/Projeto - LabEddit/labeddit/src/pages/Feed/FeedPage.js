import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Textarea } from '@chakra-ui/react'
import { InputPattern } from '../../components/InputPattern'
import { ButtonPattern } from '../../components/ButtonPattern'
import { Container, Posts, CreatePost, Title, ButtonContainer, FooterContainer } from './FeedStyles'
import useRequestData from '../../hooks/useRequestData'

function FeedPage() {
  const postsToApi = useRequestData({}, '/posts')

  const postsList = postsToApi && postsToApi
  console.log('posts', postsList)

  // const posts = postsList.map((post) => {
  //   return <Post 
  //     user={post.username}
  //     title={post.title}
  //     text={post.text}
  //     like={post.userVoteDirection}
  //     numberComment={post.commentsCount}
  //   />
  // })
  return <Container>
    <Posts>
      {/* {posts} */}
    </Posts>
    <div>
      <CreatePost>
        <Title>Criar Post</Title>
        <InputPattern
          placeholder={'Título'}
        />
        <Textarea
          placeholder={'O que quer dizer hoje?'}
          borderColor={'black'}
          h={'15rem'}
        />
        <ButtonContainer>
          <ButtonPattern
            text={'Postar'}
          />
        </ButtonContainer>
      </CreatePost>
      <FooterContainer>
        <Footer />
      </FooterContainer>

    </div>
  </Container>
}

export default FeedPage