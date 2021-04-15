
import styled from 'styled-components'
import background from '../../assents/1781.jpg'

export const Container = styled.div `
  background-image: url(${background});
  background-size: cover;
  background-position: center;


`
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`
export const Tittle = styled.h1 `
  font-size: 4rem;
  font-weight: 900;
  color: white;
`
export const Subtittle = styled.h3 `
  font-size: 2.3rem;
  margin-top: -1rem;
  color: #C5C3BE;
`

