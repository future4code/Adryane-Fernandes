import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from '../parameters'

export default class Playlist extends React.Component {
    state = {
        playlists: []
    }
    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try {
            const response = await axios.get(baseUrl, headers)
            this.setState({ playlists: response.data.result.list })
            console.log(response.data.result.list)
        } catch (err) {
            console.log(err.response)
        }
    }

    deletePlaylist = async (id) => {
        try{
            const response = await axios.delete(`${baseUrl}/${id}`, headers)

            this.getAllPlaylists()
        } catch(err) {
            console.log(err.response)
        }
    }

    render() {
        const playlistList = this.state.playlists.map((playlist) => {
            return <div>
                <p>{playlist.name}</p>
                <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
            </div>
        })

        return (
            <div>
                {playlistList}
            </div>

        )
    }
}