import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  height: 100vh;
  border: 1px solid black;
  padding: 1rem;
`

const ContainerLinks = styled.div`
margin-top: 1rem;
`

const Link = styled.a`
  border: 1px solid black;
  padding: 1rem;
  margin: 0 1rem;
`

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
      // console.log(response.data)

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
      <Container>
      <h1>About SpaceX missions</h1>
        <select onChange={this.getOneMission}>
          <option>Choose a mission</option>
          {missionsList}
        </select>

        <p>{this.state.description}</p>

        <ContainerLinks>
          {(this.state.urlTwitter) &&
            <Link href={this.state.urlTwitter}>Twitter</Link>}
          {(this.state.urlTwitter) &&
            <Link href={this.state.urlSite}>Site</Link>}
          {(this.state.urlTwitter) &&
            <Link href={this.state.urlWikipedia}>Wikipedia</Link>}
        </ContainerLinks>
      </Container>
    );
  }
}

