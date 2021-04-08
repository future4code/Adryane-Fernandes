import styled from 'styled-components'

export const CardContent = styled.div`
  background: white;
  height: 42rem;
  width: 26rem;
  border-radius: 40px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  /* overflow-y: auto; */
`
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

export const ContainerButtonClean = styled.div`
  position: fixed;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  width: 61%;
`
