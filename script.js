let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector(" #app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];


function renderTarefas() {
	listElement.innerHTML = "";

	tarefas.map((item) => {
		let liElement = document.createElement("li");
		let tarefaText = document.createTextNode(item);

		let linkElement = document.createElement("a");
		linkElement.setAttribute("href", "#");

		let linkText = document.createTextNode("Delete");
		linkElement.appendChild(linkText);


		let posicao = tarefas.indexOf(item);

		linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)


		liElement.appendChild(tarefaText);
		liElement.appendChild(linkElement);
		listElement.appendChild(liElement);
	})
}

renderTarefas();


function AddTarefas() {
	if (inputElement.value === '') {
		alert("Please enter a task");
		return false;
	} else {
		let novaTarefa = inputElement.value;

		tarefas.push(novaTarefa);
		inputElement.value = '';

		renderTarefas();
		salvarDados();

	}
}

buttonElement.onclick = AddTarefas;

function deletarTarefa(posicao) {
	tarefas.splice(posicao, 1);
	renderTarefas();
	salvarDados();
}


function salvarDados() {
	localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}

