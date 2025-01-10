let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // Converter de JSON para ARRAY 

function adicionarTarefas() {
    if(inputElement.value === '') {
        alert("Digite alguma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa)
        inputElement.value = '';
        
        renderTarefas();
        salvaDados();
    }
}

renderTarefas();


function renderTarefas() {
    listElement.innerHTML = "";

    // Percorrer o array
    tarefas.map((tarefa) => { 
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        
        let linkText = document.createTextNode("Deletar");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);
        liElement.appendChild(linkElement);

    })
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvaDados();
}


// LOCALSTORAGE
function salvaDados() {

    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)); // Convertendo de ARRAY para JSON.

}