import React from 'react'
import styled from 'styled-components'

const GlobalHeader = styled.header `
    background-color: orange;
`

export default class Header extends React.Component{
    render(){
        return (
            <GlobalHeader>
                <h2>Labefy</h2>
                <button onClick={this.props.onClick}>{this.props.button}</button>
            </GlobalHeader>
        )
    }
}