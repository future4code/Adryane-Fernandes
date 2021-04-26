export const urlApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/adryane-fernandes-cruz' 

export const token = window.localStorage.getItem('token')

export const headersConfig = {
    headers: {
        auth: token
    }
}

    