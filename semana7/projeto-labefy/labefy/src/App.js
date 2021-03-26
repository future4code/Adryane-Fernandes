import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import PlaylistsAndTracksPage from './pages/PlaylistsAndTracksPage'

const ContainerPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 90vh;
`

export default class App extends React.Component {
  state = {
    page: 'create'
  }

  changePage = () => {
    if (this.state.page === 'create') {
      this.setState({ page: 'playlists' })
    } else if (this.state.page === 'playlists') {
      this.setState({ page: 'create' })
    }
  }

  phraseButton = () => {
    if (this.state.page === 'create') {
      return 'Playlists'

    } else if (this.state.page === 'playlists') {
      return 'Criar playlist'
    }
  }

  renderPage = () => {
    if (this.state.page === 'create') {
      return <ContainerPage>
        <CreatePlaylistPage />
      </ContainerPage>

    } else if (this.state.page === 'playlists') {
      return <ContainerPage>
        <PlaylistsAndTracksPage/>
      </ContainerPage>
    }
  }
  render() {
    return (
      <div>
        <Header
          button={this.phraseButton()}
          onClick={this.changePage}
        />
        {this.renderPage()}
      </div>
    );
  }
}
