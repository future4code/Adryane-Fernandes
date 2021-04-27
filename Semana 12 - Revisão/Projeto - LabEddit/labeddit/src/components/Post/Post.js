import { Card, Name, Text, Functionalities, Likes, comments } from './PostStyles'
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons'
import NewComment from '../NewComment/NewComment'


function Post(props) {
  return <Card>
    <Name>Fulana de Tal</Name>
    <Text>Lorem ipsulom aksdksd</Text>
    <Functionalities>
      <Likes>
        <ArrowUpIcon /> 0 <ArrowDownIcon />
      </Likes>
      <comments>
        <ChatIcon /> 1
      </comments>
    </Functionalities>
    <NewComment />
  </Card>
}

export default Post