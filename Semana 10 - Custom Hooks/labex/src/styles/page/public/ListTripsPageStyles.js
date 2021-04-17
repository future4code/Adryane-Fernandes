import styled from 'styled-components'

export const Container = styled.main `
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const MessageAndButton = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 5rem;
`
export const Message = styled.p`
  color: #FEAE33;
  font-size: 2rem;
  font-weight: 800;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerCards = styled.section`
  display: grid;
  grid-template-rows: repeat(min(6), 1fr);

  gap: 1rem;
  margin-top: 1rem;
`

export const Card = styled.div`
  padding: 1rem 2rem;
  background: rgba(200,200,180, .5);
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2rem;
  min-width: 20rem;
`

export const Tittle = styled.p`
  color: #DD6847;
  font-size: 2rem;
  font-weight: 700;
`

export const Description = styled.p`
  text-align: justify;
  color: #333;
`

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
`

export const ContainerDateDuraction = styled.div `
  display: flex;
  width: 45%;
  justify-content: space-between;
`

export const Infos = styled.div`
  text-align: center;
  margin:.5rem;
`
export const TittleInfos = styled.p`
  color:#DD6847;
  font-size: .8rem;
`