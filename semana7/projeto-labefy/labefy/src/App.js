import React from 'react'
import Header from './components/Header'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import PlaylistListPage from './pages/PlaylistListPage'

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


  render() {

    const phraseButton = () => {
      if (this.state.page === 'create') {
        return 'Playlists'

      } else if (this.state.page === 'playlists') {
        return 'Criar playlist'

      }
    }
    const renderPage = () => {
      if (this.state.page === 'create') {
        // phraseButton = 'Playlists'
        return <CreatePlaylistPage />

      } else if (this.state.page === 'playlists') {
        // phraseButton = 'Criar playlist'
        return <PlaylistListPage />
      }
    }
    return (
      <div>
        <Header
          button={phraseButton()}
          onClick={this.changePage}
        />
        {renderPage()}
      </div>
    );
  }
}
