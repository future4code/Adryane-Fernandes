import { useHistory } from 'react-router-dom'
import { Card, Name, Title, Text, Functionalities, Likes, Comments } from './PostStyles'
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
    <div onClick={props.onClick}>
      <Name>{props.user}</Name>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </div>
    <Functionalities>
      <Likes>
        <ArrowUpIcon /> {props.like} <ArrowDownIcon />
      </Likes>
      <Comments>
        <ChatIcon /> {props.numberComment}
      </Comments>
    </Functionalities>
    {newComment()}
  </Card>
}

export default Post