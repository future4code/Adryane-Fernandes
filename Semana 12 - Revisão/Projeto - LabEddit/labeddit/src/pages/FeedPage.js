import Post from '../components/Post'
import Footer from '../components/Footer'
import { Textarea } from '@chakra-ui/react'
import { InputPattern } from '../components/InputPattern'
import { ButtonPattern } from '../components/ButtonPattern'
import { Container, Posts, CreatePost, Title, ButtonContainer, FooterContainer } from '../styles/pages/FeedStyles'

function FeedPage() {
  return <Container>
    <Posts>
      <Post />
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