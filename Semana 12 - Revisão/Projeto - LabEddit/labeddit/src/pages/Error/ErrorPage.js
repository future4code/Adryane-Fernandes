import imageBackground from '../../assents/backgroundError.jpg'
import {Image} from './ErroStyles'

function ErrorPage() {
  return <div>
   <Image src={imageBackground} alt={'Aviso de erro'} />
  </div>
}

export default ErrorPage