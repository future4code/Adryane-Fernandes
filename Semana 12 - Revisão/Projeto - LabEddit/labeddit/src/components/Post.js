import { Card, Name, Text, Functionalities, Likes, Coments} from '../styles/components/PostStyles'
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons'

function Post() {
  return <Card>
    <Name>Fulana de Tal</Name>
    <Text>Lorem ipsulom aksdksd</Text>
    <Functionalities>
      <Likes>
        <ArrowUpIcon /> 0 <ArrowDownIcon />
      </Likes>
      <Coments>
        <ChatIcon/> 1
      </Coments>
   </Functionalities>
  </Card>
}

export default Post