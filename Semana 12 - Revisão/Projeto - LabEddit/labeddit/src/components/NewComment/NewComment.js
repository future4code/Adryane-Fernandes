import { useParams } from 'react-router-dom' 
import { Textarea, Icon } from '@chakra-ui/react'
import { Container, ContainerIcon, Button } from './NewCommentStyles'
import { RiSendPlane2Fill } from 'react-icons/ri'
import useForm from '../../hooks/useForm'
import createComment from '../../requests/createComment'

function NewComment() {
  const params = useParams()

  const [form, onChange, resetForm] = useForm({text: ''})

  const bodyApi = {
    text: form.text
  }
  const onSubmitForm = (event) => {
    event.preventDefault()

    createComment(bodyApi, params.id)
    resetForm()
  }
  return <Container>
    <form onSubmit={onSubmitForm}>
      <Textarea
        placeholder={'Faça um comentário sobre isso'}
        value={form.text}
        name={'text'}
        onChange={onChange}

        border='none'
      />
      <ContainerIcon>
        <Button type={'submit'}>
          <Icon as={RiSendPlane2Fill} h={6} w={6} />
        </Button>
      </ContainerIcon>
    </form>
  </Container>
}

export default NewComment