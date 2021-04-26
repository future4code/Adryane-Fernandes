import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const ProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(min(3), 1fr);

  gap: 0.5rem 0.8rem;
  margin-top: 0.5rem; 
  padding: 0.5rem 0;
  width: 100%;
`

export const ContainerProfile = styled.div`
  margin: auto;
  padding: 0.5rem;

  &:hover{
    background: rgba(0, 0, 0, .18);
    cursor: pointer;
    border-radius: 2px;
  }
`

export const Name = styled.p`
  max-width: 6rem;
  font-weight: bold;

  text-align: center;
  margin-top: .5rem;
`

export const ContainerButton = styled.div`
  margin: 1rem;
`

export const ContainerMessage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: .25;
  width: 60%;
  text-align: center;
  margin-top: 8rem;

`
export const PhraseMessage = styled.p `
  font-size: 1.5rem;
  font-weight: 600;

`