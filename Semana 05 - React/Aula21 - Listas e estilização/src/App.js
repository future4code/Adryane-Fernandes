import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
    width: 290px;
    border: 1px solid gray;
    margin-bottom: 10px 
  `
const Campo = styled.input`
    margin: 2px;
    width: 95%;
`
const Botao = styled.button`
    width: 200px;
    background-color: rgb(49, 181, 243);
    margin-top: 5px;
`
class App extends React.Component {
  state = {
    posts: [
      {
        nome: 'Caio',
        fotoUsuario: 'https://image.freepik.com/vetores-gratis/astronauta-bonito-tocando-guitarra-na-ilustracao-do-icone-dos-desenhos-animados-de-foguete-conceito-de-icone-de-musica-cientifica_138676-2111.jpg',
        fotoPost: 'https://picsum.photos/200/150?n=1'
      },
      {
        nome: 'Laís',
        fotoUsuario: 'https://image.freepik.com/vetores-gratis/astronauta-bonito-com-ilustracao-de-icone-do-vetor-dos-desenhos-animados-do-copo-de-cafe-icone-de-comida-e-bebida-do-espaco_138676-1989.jpg',
        fotoPost: 'https://picsum.photos/200/150?n=2'
      },
      {
        nome: 'Amanda',
        fotoUsuario: 'https://image.freepik.com/vetores-gratis/astronauta-bonito-ler-livro-sobre-ilustracao-de-icone-de-desenho-animado-do-planeta-conceito-de-icone-de-tecnologia-de-ciencia-isolado-estilo-flat-cartoon_138676-2091.jpg',
        fotoPost: 'https://picsum.photos/200/150?n=3'
      }],
    valorInputNome: '',
    valorInputFotoUsuario: '',
    valorinputFotoPost: ''
  }

  handleNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }
  handleFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }
  handleFotoPost = (event) => {
    this.setState({ valorinputFotoPost: event.target.value })
  }

  onClickPostar = () => {
    const novaPostagem = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorinputFotoPost
    }

    const feed = [...this.state.posts, novaPostagem]
    this.setState({ posts: feed, valorInputFotoUsuario: '', valorInputNome: '', valorinputFotoPost: '' })
  }

  render() {
    const post = this.state.posts.map((item) => {
      return (
        <Post key={item.nome}
          nomeUsuario={item.nome}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <Formulario>
          <Campo placeholder={"Nome de usuário"} value={this.state.valorInputNome} onChange={this.handleNome} />
          <Campo placeholder={"Url da foto de usuário"} value={this.state.valorInputFotoUsuario} onChange={this.handleFotoUsuario} />
          <Campo placeholder={"Url da foto a ser postada"} value={this.state.valorinputFotoPost} onChange={this.handleFotoPost} />
          <Botao onClick={this.onClickPostar}>Postar</Botao>
        </Formulario>
        {post}
      </div>
    );
  }
}

export default App;
