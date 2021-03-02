function adicionarTarefa() {
    // Pegando os valores e areas do planner
    const tarefa = document.getElementById('tarefa')
    const opcaoDias = document.getElementById('dias-semana')
    const horas = document.getElementById('horas')

    const domingo = document.getElementById('domingo')
    const segunda = document.getElementById('segunda')
    const terca = document.getElementById('terca')
    const quarta = document.getElementById('quarta')
    const quinta = document.getElementById('quinta')
    const sexta = document.getElementById('sexta')
    const sabado = document.getElementById('sabado')

    const horaEscolhida = horas.value
    // Verificando se esta vazio e colocando as tarefas no planner
    if (tarefa.value !== '') {
        switch (opcaoDias.value) {
            case 'domingo':
                domingo.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'segunda':
                segunda.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'terca':
                terca.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'quarta':
                quarta.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'quinta':
                quinta.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'sexta':
                sexta.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;

            case 'sabado':
                sabado.innerHTML += `<p class="p-hora">${horaEscolhida}h</p> <p class='itemTarefa' onclick='tarefaConcluida()'>${tarefa.value}</p>`
                break;
        }

        tarefa.value = ''
    } else {
        alert('Campo vazio. \nPor favor, adicione uma tarefa.')
    }
}

// Riscando o nome ao clicar
function tarefaConcluida() {
    document.querySelector('.div-item').classList.add('concluida')
}

// Limpando a lista
function limparLista() {
    const lista = document.getElementsByClassName('div-itens')

    for (const item of lista) {
        item.innerHTML = ''
    }
}