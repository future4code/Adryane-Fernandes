import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestDataAuth from '../../hooks/useRequestDataAuth'
import {Button} from '@chakra-ui/react'
import {Candidate} from '../../styles/page/TripDetailsPageStyles'
import decideCandidate from '../../functions/decideCandidate'


function TripDetailsPage() {
  useProtectedPage()

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
        <p>{candidate.name}</p>
        <p>{candidate.country}</p>
        <Button onClick={() => decision(true, candidate.id)}>Aprovar</Button>
        <Button onClick={() => decision(false, candidate.id)}>Reprovar</Button>
      </Candidate>
    )
  })

  const approved = tripDetails.trip && tripDetails.trip.approved.map((candidate) => {
    return (
      <div>
        <p>{candidate.name}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Trip</h1>
      <p>{tripDetails.trip && tripDetails.trip.name}</p>
      {candidates && candidates}

      <div>
        <h1>Aprovados</h1>
        {approved}
        </div>
    </div>
  )

}

export default TripDetailsPage