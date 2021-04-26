import axios from 'axios'
import { urlApi } from '../apiConfig/axiosConfig'


const login = (history, body) => {
    axios
        .post(
            `${urlApi}/login`,
            body
        )
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            history.push('/admin/trips/list')
        })
        .catch((err) => {
            alert('Usuário não existe')
        });

}

export default login