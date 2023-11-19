const inputText = document.querySelector(".tasks__input");
const btnAdd = document.querySelector(".tasks__add");
const list = document.querySelector(".tasks__list");

const task = document.createElement('div');
const taskTitle = document.createElement('div');
const taskRemove = document.createElement('a');

task.classList.add("task");
taskTitle.classList.add("task__title");
taskRemove.classList.add("task__remove");
taskRemove.setAttribute("href", "#");
taskRemove.innerHTML = "&times;";

function newTask() {
    
    list.appendChild(task);
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskTitle.textContent = inputText.value.trim();
}

btnAdd.addEventListener("click", () => {
    if(inputText.value) {
        newTask();
    }
})

inputText.addEventListener("keydown", (e) => {
    if(e.code === "Enter" && inputText.value === true) {
        newTask(); 
    }
});

function removeTask() {
    task.remove();
}

taskRemove.addEventListener("click", removeTask);




