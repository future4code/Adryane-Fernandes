import React from 'react'

export default class CreateTrackPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar musica à playlist</h2>
        <input
          placeholder='Nome da música'
          value={this.props.valueName}
          onChange={this.props.onChangeName}
        />
        <input
          placeholder='Artista'
          value={this.props.valueArtist}
          onChange={this.props.onChangeArtist}
        />
        <input
          placeholder='Url da música'
          value={this.props.valueUrl}
          onChange={this.props.onChangeUrl}
        />
        <button onClick={this.props.addTrackToPlaylist}>Adicionar</button>
        <button onClick={this.props.onClickBack} >Voltar à lista</button>
      </div>
    )
  }
}