import Post from '../../components/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Textarea } from '@chakra-ui/react'
import { InputPattern } from '../../components/InputPattern'
import { ButtonPattern } from '../../components/ButtonPattern'
import { Container, Posts, CreatePost, Title, ButtonContainer, FooterContainer } from './FeedStyles'

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