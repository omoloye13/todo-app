const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
	todoList.innerHTML = "";
	for (let i = todos.length - 1; i >= 0; i--) {
		const li = document.createElement("li");
		li.textContent = todos[i];
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", () => {
			todos.splice(i, 1);
			localStorage.setItem("todos", JSON.stringify(todos));
			renderTodos();
		});
		li.appendChild(deleteBtn);
		todoList.appendChild(li);
	}
}

renderTodos();

addBtn.addEventListener("click", () => {
	const todoText = todoInput.value.trim();
	if (todoText) {
		todos.push(todoText);
		localStorage.setItem("todos", JSON.stringify(todos));
		renderTodos();
		todoInput.value = "";
	}
});
