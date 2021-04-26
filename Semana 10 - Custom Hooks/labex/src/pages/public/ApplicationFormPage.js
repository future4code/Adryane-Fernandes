import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import applyToTrip from '../../functions/applyToTrip'
import useForm from '../../hooks/useForm'

import Header from '../../components/Header'
import InputPattern from '../../components/form/InputPattern'
import TextAreaPattern from '../../components/form/TextAreaPattern'
import SelectPattern from '../../components/form/SelectPattern'
import background from '../../assents/backgroundManInMoon.jpg'
import { Form, ContainerForm, Container, Image, ButtonGroup, Phrase, Credit, ContainerPhrase } from '../../styles/page/public/ApplicationFormPage'
import ButtonPattern from '../../components/ButtonPattern'
import Footer from '../../components/Footer'
import { ButtonSend } from '../../styles/component/ButtonSendStyles'


function ApplicationFormPage() {
  const initialState = {
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  }
  const [form, handleInput, resetForm] = useForm(initialState)

  const history = useHistory()
  const tripsList = useRequestData('/trips', {})

  const selectTrips = tripsList.trips && tripsList.trips.map((trip) => {
    return <option value={trip.id}>{trip.name}</option>
  })

  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }

  const submitForm = (event) => {
    event.preventDefault()
    applyToTrip(form.trip, body)
    resetForm()
  }

  return (
    <Container>
      <ContainerForm>
        <Header 
          colorLogo={'red'}
        />
        <Form onSubmit={submitForm}>
          <InputPattern
            label={'Nome'}
            name={'name'}
            placeholder={'Aline Moraes'}
            value={form.name}
            onChange={handleInput}
            type={'text'}
            pattern={'(.*[a-z]){3}'}
            title="Nome deve ter no mínimo 3 letras"
          />
          <InputPattern
            label={'Idade'}
            name={'age'}
            placeholder={'18'}
            value={form.age}
            onChange={handleInput}
            type={'number'}
            min={18}
          />

          <InputPattern
            label={'Profissão'}
            name={'profession'}
            placeholder={'Médico'}
            value={form.profession}
            onChange={handleInput}
            minlength={5}
            title="Nome deve ter no mínimo 5 caracteres"
          />
          <InputPattern
            label={'País'}
            name={'country'}
            placeholder={'Brasil'}
            value={form.country}
            onChange={handleInput}
            pattern={'(.*[a-z]){3}'}
            title="Nome deve ter no mínimo 3 letras"
          />
          <TextAreaPattern
            label={'Motivo'}
            name={'applicationText'}
            placeholder={'Gosto do espaço'}
            value={form.applicationText}
            onChange={handleInput}
            minlength={30}
            title="Nome deve ter no mínimo 3 letras"
          />
          <SelectPattern
            label={'Viagens'}
            name={'trip'}
            value={form.trip}
            onChange={handleInput}
            options={selectTrips}
          />

          <ButtonGroup>
          <ButtonSend>Enviar</ButtonSend>
            <ButtonPattern
              onClick={() => history.push('/trips/list')}
              name={'Voltar'}
              variant={'ghost'}
              color={'black'}
            />
          </ButtonGroup>

        </Form>
        <Footer />
      </ContainerForm>
      <Image img={background}>
        <ContainerPhrase>
          <Phrase>"Um pequeno passo para o homem, um grande salto para a humanidade."</Phrase>
          <Credit>-Neil Armstrong</Credit>
        </ContainerPhrase>
      </Image>
    </Container>
  )
}

export default ApplicationFormPage