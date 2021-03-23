import React from 'react'

export default class Users extends React.Component {
    render() {
        return (
            <div>
                <ul>{this.props.list}</ul>
                <button onClick={this.props.onClick}>Voltar</button> 
            </div>
        )
    }
}