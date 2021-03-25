import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// const Container = styled.div `
//   display:flex;
//   align-items: center;
//   justify-content: center;
// `

export default class App extends React.Component {
  state = {
    missions: [],
    oneMission: {
      description: '',
      urlTwitter: '',
      urlSite: '',
      urlWikipedia: ''
    }
  }

  componentDidMount = () => {
    this.getMissions()
  }

  getMissions = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions')

      this.setState({ missions: response.data })

    } catch (err) {
      console.log(err.response)
    }
  }

  getOneMission = async (event) => {
    try {
      const id = event.target.value
      const response = await axios.get(`https://api.spacexdata.com/v3/missions/${id}`)

      this.setState({
        description: response.data.description,
        urlTwitter: response.data.twitter,
        urlSite: response.data.website,
        urlWikipedia: response.data.wikipedia
      })

    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return <option key={mission.mission_id} value={mission.mission_id}>
        {mission.mission_name}
      </option>
    })

    return (
      <div>
        <select onChange={this.getOneMission}>
          <option >-</option>
          {missionsList}
        </select>
        <p>{this.state.description}</p>

        {(this.state.urlTwitter) && <a href={this.state.urlTwitter}>link TT</a>}
        {(this.state.urlTwitter) && <a href={this.state.urlSite}>Link site</a>}
        {(this.state.urlTwitter) && <a href={this.state.urlWikipedia}>Link site</a>}
      </div>
    );
  }
}

