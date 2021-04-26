import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;

  height: 100vh;
`
export const ContainerForm = styled.div`
  display: grid;
  grid-template-rows: .25fr 2fr .25fr;
  height: 100%;
`
export const Form = styled.form`
  padding: 0 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 50% 0;

  display: flex;
  align-items: center;
`

export const Phrase = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  text-shadow: 1px 1px 5px black;
`
