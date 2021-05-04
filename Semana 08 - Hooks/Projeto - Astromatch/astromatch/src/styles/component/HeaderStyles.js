import styled from 'styled-components'

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  padding: 1rem 0 0.2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);  
`
export const Logo = styled.h1`
  color: #400A14;
  font-size: 3rem;
  font-weight: bold;
`

export const ColorRed = styled.span`
  color: #D90D32;
  font-size: 3rem;
  font-weight: bold;
`

const ButtonChangeScreen = styled.button`
    position: absolute;

    &:hover{
        opacity: 0.8;
        transform: scale(1.2)
    }
     &:active{
       background-color: #f9DBD1;
       transform: scale(1)
    }
`

export const ListMacthes = styled(ButtonChangeScreen)`
  margin-left: 21rem;
`

export const ListProfiles = styled(ButtonChangeScreen)`
  
  margin-right: 21rem;

`
