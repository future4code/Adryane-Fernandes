import React from 'react'
import styled from 'styled-components'

const GlobalHeader = styled.header`
    background-color: black;


    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
`

const Menu = styled.div`
    display: flez;
    align-items: center;
`

export const ButtonChangePage = styled.button`
    background-color: #60d1c1;
  font-weight:600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;

  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  &:focus{
    outline: none;
    border: 0 none;
    box-shadow: 0 0 0 0;
  }

`

const Logo = styled.h1`
    color: white;
`

export default class Header extends React.Component {
    render() {
        return (
            <GlobalHeader>
                <Logo>Labefy</Logo>
                <Menu>
                    <ButtonChangePage onClick={this.props.onClick}>{this.props.button}</ButtonChangePage>
                </Menu>
            </GlobalHeader>
        )
    }
}