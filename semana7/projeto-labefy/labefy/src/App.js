import React from 'react'
import CreatePlaylist from './pages/CreatePlaylist'
import PlaylistList from './pages/PlaylistList'

export default class App extends React.Component {
   render(){

    return (
      <div>
        <h1>Labefy</h1>
        <CreatePlaylist />
        <PlaylistList />
      </div>
    );
  }
}
