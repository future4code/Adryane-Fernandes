import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import PlaylistPage from './PlaylistPage'
// import CreateTrackPage from './CreateTrackPage'
import { baseUrl, headers } from '../parameters'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
`
const ContainerPlaylists = styled.div`
  border-radius: 3px;
  padding: 0.3rem 0.8rem;

  background: black;
  color: white;

  width: 400px;

`

const ItemPl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #191919;
  margin: .5rem 0 ;
  border-radius: 5px;
  padding: 0.5rem;
`

const Buttons = styled.button` 
  background: #191919;
  color: white;
  border: none;
  margin: 0 0.2rem;
  padding: 0.5rem;

  cursor: pointer;

  &:hover{
    /* opacity: 0.2; */
    background: #333;
    border-radius: 3px;
  }

  &:focus{
    outline: none;
    border: 0 none;
    box-shadow: 0 0 0 0;
  }
`
const ButtonX = styled(Buttons)``
const ButtonPlus = styled(Buttons) `
  font-size: 1rem;
`

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



  getTracks = async (playlistId) => {
    try {
      const response = await axios.get(`${baseUrl}/${playlistId}/tracks`, headers)

      this.setState({ tracks: response.data.result.tracks })
      console.log(response.data.result.tracks)
    } catch (err) {
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
      return <ItemPl key={playlist.id}>
        <span>{playlist.name}</span>

        <div>
          <ButtonPlus onClick={() => this.getTracks(playlist.id)}>+</ButtonPlus>
          <ButtonX onClick={() => this.deletePlaylist(playlist.id)}>X</ButtonX>
        </div>
      </ItemPl>
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
      <Container>
        <ContainerPlaylists>
          {playlistList}
        </ContainerPlaylists>

        {/* <CreateTrackPage
          addTrackToPlaylist={() => this.addTrack}
        />
        {tracksList} */}
      </Container>
    )
  }
}