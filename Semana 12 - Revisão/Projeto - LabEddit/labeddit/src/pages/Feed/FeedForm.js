import { Textarea } from '@chakra-ui/react'
import { InputPattern } from '../../components/InputPattern'
import { CreatePost, Title} from './FeedStyles'
import { Button, ContainerButton } from '../../styles/ButtonFormStyles'
import useForm from '../../hooks/useForm'
import createPost from '../../requests/createPost'

function FeedForm(){
  const initialState = {
    text: '',
    title: ''
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const bodyApi = {
    text: form.text,
    title: form.title
  }
  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(bodyApi)

    resetForm()
  }
  return <form onSubmit={onSubmitForm}>
  <CreatePost>
    <Title>Criar Post</Title>
    <InputPattern
      placeholder={'Título'}
      name={'title'}
      value={form.title}
      onChange={onChange}
    />
    <Textarea
      placeholder={'O que quer dizer hoje?'}
      borderColor={'black'}
      h={'15rem'}
      name={'text'}
      value={form.text}
      onChange={onChange}
    />
    <ContainerButton>
      <Button type={'submit'}>Postar</Button>      
    </ContainerButton>
  </CreatePost>
  
</form>
}

export default FeedForm