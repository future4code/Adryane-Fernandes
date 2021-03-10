import React from 'react'
import './Post.css'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvoCinza from '../../img/nao-salvo.png'
import iconeSalvoPreto from '../../img/salvo.png'
import iconeCompartilhar from '../../img/compartilhar.svg'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickSalvo = () => {
    if (!this.state.salvo) {
      this.setState({
        salvo: true
      })
    } else {
      this.setState({
        salvo: false
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    if (!this.state.compartilhando) {
      this.setState({
        compartilhando: true
      })
    } else {
      this.setState({
        compartilhando: true
      })
    }

  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo
    if (!this.state.salvo) {
      iconeSalvo = iconeSalvoCinza
    } else {
      iconeSalvo = iconeSalvoPreto
    }

    let componenteComentario
    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <div className={'infos-usuario'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </div>
        <IconeSemContador
          imagem={iconeSalvo}
          onClickIcone={this.onClickSalvo}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div >
  }
}

export default Post