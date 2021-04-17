
import styled from 'styled-components'
import background from '../../../assents/backgroundHome.jpg'

export const Container = styled.div `
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;

`
export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 82%;
`
export const Tittle = styled.h1 `
  font-size: 4rem;
  font-weight: 900;
  color: rgb(0, 0, 0);
  margin-top: 18%;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
`
export const Subtittle = styled.h3 `
  font-size: 2.3rem;
  margin-top: -1.8rem;
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);


`