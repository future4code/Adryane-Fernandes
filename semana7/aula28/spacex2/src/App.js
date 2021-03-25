import React from 'react'
import axios from 'axios'
import InfosCards from './components/InfosCards'

export default class App extends React.Component {
  state = {
    missions: [],
  }

  componentDidMount = () => {
    this.getMissions()
  }

  getMissions = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions')

      this.setState({ missions: response.data })
      console.log(response.data)

    } catch (err) {
      console.log(err.response)
    }
  }

  getOneMission = async () => {
    
  }

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return <option onClick={}>{mission.mission_name}</option>
    })

    return (
      <div className="App">
        <select>
          <option >-</option>
          {missionsList}
        </select>
      </div>
    );
  }
}

