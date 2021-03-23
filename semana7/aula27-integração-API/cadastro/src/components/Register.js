import React from 'react'

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <input
                    placehoder={'Nome'}
                    value={this.props.valueName}
                    onChange={this.props.onChangeName}
                />
                <input
                    type='email'
                    placehoder={'Email'}
                    value={this.props.valueEmail}
                    onChange={this.props.onChangeEmail}
                />

                <button onClick={this.props.onClickAdd}>Adicionar</button>
                <button onClick={this.props.onClickNext}>Tela de usuários</button>
            </div>
        )
    }
}