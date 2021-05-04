import styled from 'styled-components'

export const CardTest = styled.div `
  background: red;
  padding: 1rem;
`
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

export const ContainerButtonClean = styled.div`
  position: fixed;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  width: 61%;
`
