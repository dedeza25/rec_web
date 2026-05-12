const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const clearAllBtn = document.querySelector("#clearAllBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCounter = document.querySelector("#taskCounter");

// Atualiza contador
function updateCounter() {
    const total = document.querySelectorAll("li").length;
    const completed = document.querySelectorAll(".completed").length;

    if (total === 0) {
        taskCounter.textContent = "0 tarefas";
    } else {
        taskCounter.textContent = `${completed} de ${total} tarefas concluídas`;
    }
}

// Criar tarefa
function createTask(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Marcar como concluída
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        updateCounter();
    });

    // Botão editar
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";

    editBtn.addEventListener("click", function () {
        const newText = prompt("Editar tarefa:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    taskList.appendChild(li);

    updateCounter();
}

// Adicionar tarefa
taskBtn.addEventListener("click", function () {
    const value = taskInput.value.trim();

    if (value !== "") {
        createTask(value);

        // 1) Limpar input
        taskInput.value = "";
    }
});

// 2) Adicionar com Enter
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        taskBtn.click();
    }
});

// 3) Limpar todas
clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateCounter();
});

// 6) Limpar concluídas
clearCompletedBtn.addEventListener("click", function () {
    const completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach(task => {
        task.parentElement.remove();
    });

    updateCounter();
});