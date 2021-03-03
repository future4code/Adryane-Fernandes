// Pegando os campos
const post = {
    titulo: document.getElementById('titulo-post'),
    autor: document.getElementById('autor-post'),
    conteudo: document.getElementById('conteudo-post'),
    imagem: document.getElementById('imagem-post')
}



// Colocando valores no array
const arrayObjetos = []

// Funções de postar e apagar
function postar() {
    const arrayObjetos = [post.titulo.value, post.autor.value, post.conteudo.value, post.imagem.value]

    let campoPosts = document.getElementById('container-de-posts')

    campoPosts.innerHTML += `<h3>${arrayObjetos[0]}</h3>
        <h5>${arrayObjetos[1]}</h5>
        <p>${arrayObjetos[2]}</p>`

    if ((arrayObjetos[3].includes('.png') || arrayObjetos[3].includes('.jpg')) && arrayObjetos[3].includes('http')) {
        campoPosts.innerHTML += `<img src="${arrayObjetos[3]}">`
    } else if (arrayObjetos[3] === "") {
        return vazio = 0
    } else {
        alert('Link inválido de imagem inválido.')
    }
}

function apagarCampos() {
    post.titulo.value = ''
    post.autor.value = ''
    post.conteudo.value = ''
}


// Postando
function apertouBtn() {
    postar()
    apagarCampos()
}

function apertouEnter(evento) {
    if (evento.key === 'Enter') {
        postar()
        apagarCampos()
    }
}




//colocando valores em array

