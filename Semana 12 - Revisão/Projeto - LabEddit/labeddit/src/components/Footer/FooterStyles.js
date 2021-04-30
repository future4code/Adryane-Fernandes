import styled from 'styled-components'

export const Container = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;

  background: ${(props => props.background ? props.background : 'white')};
  color: ${(props => props.color ? props.color : 'black')}
`