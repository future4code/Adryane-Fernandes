import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://image.freepik.com/vetores-gratis/astronauta-bonito-tocando-guitarra-na-ilustracao-do-icone-dos-desenhos-animados-de-foguete-conceito-de-icone-de-musica-cientifica_138676-2111.jpg'}
          fotoPost={'https://picsum.photos/200/150?n=1'}
        />
        <Post
          nomeUsuario={'Laís'}
          fotoUsuario={'https://image.freepik.com/vetores-gratis/astronauta-bonito-com-ilustracao-de-icone-do-vetor-dos-desenhos-animados-do-copo-de-cafe-icone-de-comida-e-bebida-do-espaco_138676-1989.jpg'}
          fotoPost={'https://picsum.photos/200/150?n=2'}
        />
        <Post
          nomeUsuario={'Amanda'}
          fotoUsuario={'https://image.freepik.com/vetores-gratis/astronauta-bonito-ler-livro-sobre-ilustracao-de-icone-de-desenho-animado-do-planeta-conceito-de-icone-de-tecnologia-de-ciencia-isolado-estilo-flat-cartoon_138676-2091.jpg'}
          fotoPost={'https://picsum.photos/200/150?n=3'}
        />
      </div>
    );
  }
}

export default App;
