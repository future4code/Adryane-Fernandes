import { Card, Name, Text, Functionalities, Likes, comments } from '../styles/components/PostStyles'
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons'
import NewComment from '../components/NewComment'


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