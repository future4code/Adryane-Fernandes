import { useHistory } from 'react-router-dom'
import { Card, Name, Title, Text, Functionalities, Likes, Comments, CountComments, Infos } from './PostStyles'
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons'
import NewComment from '../NewComment/NewComment'

function Post(props) {
  const history = useHistory()

  const newComment = () => {
    if (history.location.pathname !== '/') {
      return <NewComment />
    }
  } 

  return <Card>
    <Infos onClick={props.onClick}>
      <Name>{props.username}</Name>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Infos>
    <Functionalities>
      <Likes>
        <button onClick={props.onCLickUp}><ArrowUpIcon /> </button>
        {props.votesCount}
        <button onClick={props.onCLickLow}><ArrowDownIcon /></button>
      </Likes>
      <Comments>
        <ChatIcon /> <CountComments>{props.commentsCount} </CountComments> 
      </Comments>
    </Functionalities>
    {newComment()}
  </Card>
}

export default Post