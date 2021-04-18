import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import createTrip from '../../functions/createTrip'
import InputPattern from '../../components/form/InputPattern'
import SelectPattern from '../../components/form/SelectPattern'
import TextAreaPattern from '../../components/form/TextAreaPattern'
import ButtonPattern from '../../components/ButtonPattern'
import { ButtonGroup, Container, Form, Image, ContainerForm, Phrase } from '../../styles/page/private/CreateTripPageStyles'
import Footer from '../../components/Footer'
import background from '../../assents/backgroundCreateTrip.jpg'



function CreateTripPage() {
  useProtectedPage()

  const history = useHistory()

  const initialState = {
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0,
  }

  const [form, handleInput] = useForm(initialState)

  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTrip(body)
  }

  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

  const optionsSelect = planets.map((item) => {
    return <option value={item}>{item}</option>
  })

  let dateNow = new Date().toLocaleDateString()
  const yearNow = dateNow.substring(6)
  const monthNow = dateNow.substring(3, 5)
  const dayNow = dateNow.substring(0, 2)

  console.log(yearNow, monthNow, dayNow)
  return (
    <Container>

      <ContainerForm>
        <Header colorLogo={'red'} />
        <Form onSubmit={handleSubmit}>
          <InputPattern
            label={'Nome'}
            placeholder={'Viagem a marte'}
            name={'name'}
            value={form.name}
            onChange={handleInput}
            type={'text'}
            pattern={'(.*[a-z]){5}'}
            title={"Nome deve ter no mínimo 5 letras"}
          />

          <SelectPattern
            label={'Planeta de destino'}
            name={'planet'}
            value={form.planet}
            onChange={handleInput}
            options={optionsSelect}
          />
          <InputPattern
            label={'Data'}
            placeholder='Data'
            name={'date'}
            value={form.date}
            onChange={handleInput}
            type={'date'}
            min={`${yearNow}-${monthNow}-${dayNow}`}
          />
          <TextAreaPattern
            label={'Descrição'}
            placeholder='Descrição'
            name={'description'}
            value={form.description}
            onChange={handleInput}
            type={'text'}
            minLength={'30'}
            title="Texto deve ter no mínimo 30 letras"
          />
          <InputPattern
            label={'Duração em dias'}
            placeholder='Duração'
            name={'durationInDays'}
            min={50}
            value={form.durationInDays}
            onChange={handleInput}
            type={'number'}
          />
          <ButtonGroup>
            <ButtonPattern
              name={'Criar'}
            />
            <ButtonPattern
              onClick={() => history.push('/admin/trips/list')}
              name={'Voltar'}
              variant={'ghost'}
              color={'black'}
            />
          </ButtonGroup>
        </Form>
        <Footer />
      </ContainerForm>
      <Image
        img={background}
      >
        <Phrase>Qual o próximo destino, comandante?</Phrase>
      </Image>

    </Container>
  )
}

export default CreateTripPage