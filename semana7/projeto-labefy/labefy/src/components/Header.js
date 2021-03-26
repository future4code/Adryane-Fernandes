import React from 'react'
import styled from 'styled-components'

const GlobalHeader = styled.header `
    background-color: orange;

    display: flex;
    justify-content: space-between;
`

const ChangePage = styled.button `
    /* height: 50%; */
`

export default class Header extends React.Component{
    render(){
        return (
            <GlobalHeader>
                <h2>Labefy</h2>
                <ChangePage onClick={this.props.onClick}>{this.props.button}</ChangePage>
            </GlobalHeader>
        )
    }
}