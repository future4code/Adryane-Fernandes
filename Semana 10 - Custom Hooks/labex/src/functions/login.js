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
            console.log(res.data);
        
        })
        .catch((err) => {
            console.log(err);
            alert('Usuário não existe')
        });
}

export default login