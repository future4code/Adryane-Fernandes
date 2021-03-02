function adicionarTarefa() {
    // Pegando os valores e areas do planner
    const tarefa = document.getElementById('tarefa')
    const opcaoDias = document.getElementById('dias-semana')

    const domingo = document.getElementById('domingo')
    const segunda = document.getElementById('segunda')
    const terca = document.getElementById('terca')
    const quarta = document.getElementById('quarta')
    const quinta = document.getElementById('quinta')
    const sexta = document.getElementById('sexta')
    const sabado = document.getElementById('sabado')

    // Verificando se esta vazio e colocando as tarefas
    // if (tarefa !== "") {
    switch (opcaoDias.value) {
        case 'domingo':
            domingo.innerHTML = `<p>${tarefa.value}</p>`
            break;

        case 'segunda':
            segunda.innerHTML = `<p> ${tarefa.value} </p>`
            break;
        
        case 'terca':
            terca.innerHTML = `<p> ${tarefa.value} </p>`
            break;
        
        case 'quarta':
            quarta.innerHTML = `<p> ${tarefa.value} </p>`
            break;

        case 'quinta':
            quinta.innerHTML = `<p> ${tarefa.value} </p>`
            break;
        
        case 'sexta':
            sexta.innerHTML = `<p> ${tarefa.value} </p>`
            break;
        
        case 'sabado':
            sabado.innerHTML = `<p> ${tarefa.value} </p>`
            break;
    }

    tarefa.value = ''

    // }
}