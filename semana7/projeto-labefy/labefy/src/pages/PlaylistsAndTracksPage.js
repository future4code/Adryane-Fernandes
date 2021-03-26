import React from 'react'
import axios from 'axios'
import PlaylistPage from './PlaylistPage'
import CreateTrackPage from './CreateTrackPage'
import { baseUrl, headers } from '../parameters'

export default class PlaylistsAndTracksPage extends React.Component {
  state = {
    // page: 'list',
    playlists: [],
    tracks: [],
    inputName: '',
    inputArtisit: '',
    inputUrl: ''
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value })
  }
  handleArtist = (e) => {
    this.setState({ inputArtisit: e.target.value })
  }
  handleUrl = (e) => {
    this.setState({ inputUrl: e.target.value })
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  // changePage = () => {
  //   if (this.state.page === 'list') {
  //     this.setState({ page: 'details' })
  //   } else {
  //     this.setState({ page: 'list' })
  //   }

  // }

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, headers)
      this.setState({ playlists: response.data.result.list })

    } catch (err) {
      console.log(err.response)
    }
  }

  deletePlaylist = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, headers)

      this.getAllPlaylists()
    } catch (err) {
      console.log(err.response)
    }
  }

  // renderPage = () => {
  //   if (this.state.page === 'list') {
  //     return <PlaylistPage
  //       onClickPlus={this.changePage}

  //     />
  //   } else if (this.state.page === 'details') {
  //     return <CreateTrackPage
  //       onClickBack={this.changePage}
  //     />
  //   }
  // }

  

  getTracks = async(playlistId) => {
    try{
      const response = await axios.get(`${baseUrl}/${playlistId}/tracks`, headers)

      this.setState({tracks: response.data.result.tracks})
      console.log(response.data.result.tracks)
    }catch(err){
      console.log(err.response)
    }
  }
  
  // addTrack = async (id) => {
  //   const body = {
  //     name: this.state.inputName,
  //     artist: this.state.inputArtisit,
  //     url: this.state.url
  //   }
  //   try {
  //     const response = await axios.post(`${baseUrl}`, body, headers)

  //     this.setState({ tracks: response.data.result.list })
  //     console.log(response.data.result.list)
  //   } catch (err) {
  //     console.log(err.response)
  //   }
  // }

  render() {
    const playlistList = this.state.playlists.map((playlist) => {
      return <div key={playlist.id}>
        <p>{playlist.name}</p>

        <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        <button onClick={() => this.getTracks(playlist.id)}>+</button>
      </div>
    })

    const tracksList = this.state.tracks.map((tracks) => {
      return (
        <div>
          <p>{tracks.name}</p>
          <p>{tracks.artists}</p>
          <p>{tracks.url}</p>
        </div>
        
      )
    })

    return (
      <div>
        {playlistList}
        <CreateTrackPage
          addTrackToPlaylist={() => this.addTrack}
        />
        {tracksList}
      </div>
    )
  }
}