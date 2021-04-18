import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestDataAuth from '../../hooks/useRequestDataAuth'
import decideCandidate from '../../functions/decideCandidate'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Card, Titles, Description, Infos, Tag, InfosGroup, TitleCard, Approved, CardCandidates, Candidate, TitleCardCandidates, NameCandidate, InfosCandidate, InfoCandidate, ButtonGroup, Main } from '../../styles/page/private/TripDetailsPageStyles'
import ButtonPattern from '../../components/ButtonPattern'
import Loading from '../../components/Loading'


function TripDetailsPage() {
  useProtectedPage()

  const history = useHistory()
  const params = useParams()
  const tripDetails = useRequestDataAuth(`/trip/${params.id}`, {})

  console.log(tripDetails.trip)

  const decision = (result, candidateId) => {
    const body = {
      approve: result
    }

    decideCandidate(body, params.id, candidateId)
  }

  const candidates = tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return (
      <Candidate key={candidate.id}>
        <NameCandidate>{candidate.name}</NameCandidate>
        <InfosCandidate>
          <Tag>Idade</Tag><InfoCandidate>{candidate.age}</InfoCandidate>
        </InfosCandidate>
        <InfosCandidate>
          <Tag>Profissão</Tag><InfoCandidate>{candidate.profession}</InfoCandidate>
        </InfosCandidate>
        <InfosCandidate>
          <Tag>País</Tag><InfoCandidate>{candidate.country}</InfoCandidate>
        </InfosCandidate>
        <InfosCandidate>
          <Tag>Motivo</Tag><InfoCandidate>{candidate.applicationText}</InfoCandidate>
        </InfosCandidate>

        <ButtonGroup>
          <ButtonPattern
            onClick={() => decision(true, candidate.id)}
            name={'Aprovar'}
          />
          <ButtonPattern
            onClick={() => decision(false, candidate.id)}
            name={'Reprovar'}
            variant={'ghost'}
            color={'black'}
          />
        </ButtonGroup>
      </Candidate>
    )
  })

  const approved = tripDetails.trip && tripDetails.trip.approved.map((candidate) => {
    return <Approved>{candidate.name}</Approved>
  })

  const date = () => {
    let dateNow = tripDetails.trip && tripDetails.trip.date
    const yearNow = dateNow.substring(0, 4)
    const monthNow = dateNow.substring(5, 7)
    const dayNow = dateNow.substring(8)

    const newDate =  dayNow + '/' +  monthNow + '/' +  yearNow
    return newDate
  }


  return (
    <Container>
      <Header colorLogo={'red'} />
      {tripDetails.trip && tripDetails.trip.name ?
        <Main>
          <Card>
            <Titles>{tripDetails.trip && tripDetails.trip.name}</Titles>
            <Description>{tripDetails.trip && tripDetails.trip.description}</Description>
            <InfosGroup>
              <Infos>
                <Tag>Data</Tag>
                {date()}
              </Infos>
              <Infos>
                <Tag>Dias</Tag>
                {tripDetails.trip && tripDetails.trip.durationInDays} dias
         </Infos>
              <Infos>
                <Tag>Planeta</Tag>
                {tripDetails.trip && tripDetails.trip.planet}
              </Infos>
            </InfosGroup>
            <ButtonPattern
              onClick={() => history.push('/admin/trips/list')}
              name={'Voltar'}
              margin={'1rem'}
            />
          </Card>
          <Card>
            <TitleCard>Aprovados</TitleCard>
            {approved}
          </Card>
          <CardCandidates>
            <TitleCardCandidates>Candidatos</TitleCardCandidates>
            {candidates}
          </CardCandidates>
        </Main>
        :
        <Loading />}

      <Footer />
    </Container >
  )

}

export default TripDetailsPage