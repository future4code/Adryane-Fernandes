import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`
export const ContainerForm = styled.div`
  width: 60%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  height: 82%;

  justify-content: center;
`
export const ButtonGroup = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const ContainerPhrase = styled.div`
  color: white;
  font-weight: 800;
  width: 62%;
  text-shadow: 1px 1px 5px black;
`

export const Phrase = styled.p`
  font-size: 3rem;
  text-align: center;
`

export const Credit = styled.p`
  text-align: right;
  font-size: 1.5rem;
  text-shadow: 1px 1px 15px black;
`
