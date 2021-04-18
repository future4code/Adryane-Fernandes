import styled from 'styled-components'

export const Container = styled.div `
  display: grid;
  grid-template-rows: .5fr 3fr .25fr;

`

export const Main = styled.main `
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 1fr;

  gap: 0.5rem;

`

export const Card = styled.div `
  background: #F0EBE1;
  box-shadow: 1px 1px 5px gray;
  padding: 2rem 1rem;
  border-radius: 10px;
  text-align: center;
  overflow-y: auto;
`

export const Titles = styled.p `
  color: #DD6847;
  font-weight: 500;
  font-size: 2rem;
`
export const Description = styled.span `
  font-weight: 300;
  font-size: 1.5rem;
  padding: .2rem;
  text-align: justify;
`
export const Infos = styled.div `
  display: flex;
  flex-direction: column;
`

export const Tag = styled.span `
  color: #DD6847;
`
export const InfosGroup = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`
export const TitleCard = styled.p `
  color: #DD6847;
  font-weight: 300;
  font-size: 1.5rem;
`
export const Approved = styled.p `
  text-align: left; 
  padding: .5rem;
  border-bottom: 1px solid gray;
`
export const TitleCardCandidates = styled(TitleCard)`
  grid-column: 1 / -1;
`
export const CardCandidates = styled(Card) `
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: .25fr repeat(min(1), 2fr);

  overflow-y: auto;
`
export const Candidate = styled.div ` 
  border: 1px solid gray;
  margin: 1rem;
  border-radius: 10px;  
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: auto;
`
export const NameCandidate = styled.p`
  font-size: 2rem;
  padding: .5rem;
  font-weight: 700;
  color: #DD6847;
`

export const InfosCandidate = styled.p`
  text-align: left;
`
export const InfoCandidate = styled.span ` 
  padding: 0 .5rem;
  font-size: 1.3rem;
  font-weight: 400;
`
export const ButtonGroup = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 1rem; 
 `

// export const InfoCandidate = styled.div ` `