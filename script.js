let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function adicionarTarefas() {
    if(inputElement.value === '') {
        alert("Digite alguma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa)
        inputElement.value = '';
        
        renderTarefas();
    }
}


function renderTarefas() {
    listElement.innerHTML = "";


    // Percorrer o array
    tarefas.map((tarefa) => { 
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);

        listElement.appendChild(liElement);
        liElement.appendChild(tarefaText);
        
    })
}


buttonElement.onclick = adicionarTarefas;