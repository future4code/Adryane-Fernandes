import './App.css';
import logo from './imagens/originais-labenu.png';
import iconeMenu from './imagens/botao-de-menu.png'
import iconeInicio from './imagens/casa-inicio.png'
import iconeFogo from './imagens/fogo.png'
import iconePlay from './imagens/botao-play.png'
import iconeHistorico from './imagens/historico.png'
import iconeLupa from './imagens/lupa.png'
import perfilUsuario from './imagens/usuario-de-perfil.png'
import logoLabenu from './imagens/logo-labenu.png'

function App() {

  const titulo = 'Título do vídeo'
  const subtitulo = 'Criador do vídeo'

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  function abrirLink() {
    alert("Em desenvolvimento.")
  }

  return (
    <div className="App">
      <div className="tela-inteira">

        <header>
          <a onClick={abrirLink} id='logo'>
            <img src={logoLabenu} />
            <h1> LabTube</h1>
          </a>

          <div id='campo-pesquisa'>
            <input type="text" placeholder="Busca" id="input-pesquisa" />
            <a onClick={abrirLink}>
              <button type='submit'><img src={iconeLupa} alt='icone lupa' id='lupa-pesquisa' /></button>
            </a>
          </div>

          <a onClick={abrirLink}><img src={perfilUsuario} id='imagem-perfil' /></a>
        </header>

        <nav className="menu-vertical">

          <div className='divs-menu'>
            <a>
              <img src={iconeMenu} alt='ícone menu' className='icones-menu' id='img-abrir-menu' />
            </a>
          </div>

          <div className='divs-menu'>
            <a onClick={abrirLink}>
              <img src={iconeInicio} alt='ícone inicio' className='icones-menu' />
              <span>Início</span>
            </a>
          </div>

          <div className='divs-menu'>
            <a onClick={abrirLink}>
              <img src={iconeFogo} alt='ícone fogo' className='icones-menu' />
              <span>Em alta</span>
            </a>
          </div>

          <div className='divs-menu'>
            <a onClick={abrirLink}>
              <img src={iconePlay} alt='ícone play' className='icones-menu' />
              <span>Inscrições</span>
            </a>
          </div>

          <hr />

          <div className='divs-menu'>
            <a onClick={abrirLink}>
              <img src={logo} alt='ícone inicio' className='icones-menu' />
              <span>Originais</span>
            </a>
          </div>

          <div className='divs-menu'>
            <a onClick={abrirLink}>
              <img src={iconeHistorico} alt='ícone historico' className='icones-menu' />
              <span>Histórico</span>
            </a>
          </div>
        </nav>

        <main>
          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>

            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
              <p>{subtitulo}</p>
            </div>
          </section>
        </main>

        {/* <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer> */}
      </div>
    </div >
  );
}

export default App;
