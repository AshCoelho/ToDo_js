function addTask() {
    const taskTitle = document.querySelector("#task-title").value;
    if (taskTitle) {
        // clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        
        // adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle;
        
        // remove classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        
        // adiciona tarefa à lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);
        
        // botão de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function() {
            removeTask(this);
        });
        
        // botão de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn");
        doneBtn.addEventListener("click", function() {
            completeTask(this);
        });
        
        // limpar o campo de input
        document.querySelector("#task-title").value = "";
    }
}

// função para remover tarefa
function removeTask(task) {
    task.parentNode.remove();
}

// função para completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addTask();
});
