import styled from 'styled-components'

export const Card = styled.div `
  background: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`

export const Name = styled.p `
  font-size: 1.3rem;
  font-weight: 500;
  color: #0D698B;
  margin-bottom: .5rem;
`

export const Text = styled.p `
  margin-bottom: .8rem;
`

export const Functionalities = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid gray;
  padding-top: .5rem;
`

const LikesAndComents = styled.div `
  display: flex;
  align-items: center;
` 
export const Likes = styled(LikesAndComents) ``
export const Coments = styled(LikesAndComents) ``
