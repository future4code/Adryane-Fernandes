import React from 'react'
import styled from 'styled-components'

const GlobalHeader = styled.header `
    background-color: black;


    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
`

const ChangePage = styled.button `
    /* height: 50%; */
`

const Logo = styled.h2`
    color: white;
`

export default class Header extends React.Component{
    render(){
        return (
            <GlobalHeader>
                <Logo>Labefy</Logo>
                <ChangePage onClick={this.props.onClick}>{this.props.button}</ChangePage>
            </GlobalHeader>
        )
    }
}