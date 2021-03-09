import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

import fotoPerfil from './imagens/foto-perfil.jpeg'
import tids from './imagens/tids.jpg'
import iconeEndereco from './imagens/casa.png'
import iconeEmail from './imagens/o-email.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Adryane Fernandes" 
          descricao="Olá humano, meu nome é esse ai em cima, tenho 20 anos e sou amaldiçoada -ou abençoada- pelo amor a programação. Minha jornada ainda é curta pra contar, mas no momento estou construindo a minha história nessa área."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
          imagemEmail = {iconeEmail}
          imagemEndereco = {iconeEndereco}
          email = 'adrycristine03@gmail.com'
          endereco = 'Rua Cianita'
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={tids}
          nome="Tid's" 
          descricao="Atendimento ao consumidor" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
