import styled from 'styled-components'
import background from '../../assents/backgroundLogin.jpg'

export const Container = styled.main `
  display: grid;
  grid-template-rows: 92vh 30px;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
`

export const Card = styled.div `
  height: 25rem;
  width: 22rem;
  box-shadow: 2px 2px 5px gray;
  border-radius: 20px;
  padding:  0 1rem;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.p `
  font-weight: bold;
  font-size: 2rem;
  color: #050533;
  margin-bottom: 2rem;
`

export const Text = styled.p `
  font-size: .7rem;
  color: #050533;
  font-weight: 600;
  margin-top: 1.8rem;
` 

export const ButtonRegister = styled.button `
  font-size: .7rem;
  color: #0D698B;
  font-weight: 600;

  outline: none;
  border: 0 none;
  box-shadow: 0 0 0 0;

  &:active{
    color: #0D508B;
  }
`