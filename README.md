# Lista de Tarefas Simples 📝

Este é um projeto de lista de tarefas desenvolvido com **HTML**, **CSS** e **JavaScript puro**. A aplicação permite ao usuário adicionar, marcar como concluída e remover tarefas de forma simples e intuitiva.

## 🔍 Visão Geral

A interface é intuitiva, com um input para digitar uma nova tarefa e botões para adicionar, completar ou remover tarefas.

![Descrição da imagem](img/Captura%20de%20Tela%20(110).png)

## 🚀 Funcionalidades

- ✅ Adicionar uma nova tarefa
- ✔️ Marcar tarefa como concluída
- ❌ Remover tarefa
- 🧼 Limpeza automática do campo após adicionar


##  💡 Tecnologias Utilizadas

- HTML5
- CSS3 (com gradiente e sombras para estilo moderno)
- JavaScript (sem bibliotecas/frameworks)

##  ✨ Visual
O fundo usa um gradiente roxo moderno e o conteúdo está centralizado com sombras para destacar a caixa de tarefas.

##  🤝 Contribuição
Fique à vontade para abrir issues ou pull requests com melhorias ou sugestões.

## 🧠 Lógica Principal (JavaScript)
``` javascript
    function addTask() {
        const taskTitle = document.querySelector("#task-title").value;
        if (taskTitle) {
            const template = document.querySelector(".template");
            const newTask = template.cloneNode(true);
            newTask.querySelector(".task-title").textContent = taskTitle;
            newTask.classList.remove("template", "hide");
            document.querySelector("#task-list").appendChild(newTask);
            newTask.querySelector(".remove-btn").addEventListener("click", function() {
                removeTask(this);
            });
            newTask.querySelector(".done-btn").addEventListener("click", function() {
                completeTask(this);
            });
            document.querySelector("#task-title").value = "";
        }
    }
    function removeTask(task) {
        task.parentNode.remove();
    }
    function completeTask(task) {
        const taskToComplete = task.parentNode;
        taskToComplete.classList.toggle("done");
    }
    document.querySelector("#add-btn").addEventListener("click", function(e) {
        e.preventDefault();
        addTask();
    });


