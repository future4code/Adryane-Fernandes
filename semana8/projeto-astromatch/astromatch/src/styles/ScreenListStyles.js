import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const IconMatchs = styled.button`
  position: absolute;
  margin: -3.5rem 21rem 0 0;

  &:hover{
    opacity: 0.8;
    transform: scale(1.2)
  }
  &:active{
    background-color: #f9DBD1;
    transform: scale(1)
  }
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