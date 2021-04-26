import styled from 'styled-components'

export const Container = styled.div `
  width: 100vw;
  display: flex;
`

export const ContainerForm = styled.div `
  width: 30%;
  height: 100vh;
  display: grid;
  grid-template-rows: 3fr .25fr;
  box-shadow: 1px 1px 10px black;
  background: white;
`

export const Form = styled.form ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`
export const Image = styled.img `
  z-index: -1;
  height: 100%;
  position: absolute;
`

export const ContainerPhrase = styled.div `
  padding: 2rem 2.5rem;
  width: 50%;

`

const Phrases = styled.p `
  color: white;
  font-size: 3rem;
  font-weight: 900;
`
export const Phrase = styled(Phrases) `
  
`
export const Phrase2 = styled(Phrases) `
  margin-top: -1.5rem;
  font-size: 4rem;
`