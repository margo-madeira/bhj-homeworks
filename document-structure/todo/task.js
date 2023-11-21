const inputText = document.querySelector(".tasks__input");
const btnAdd = document.querySelector(".tasks__add");
const list = document.querySelector(".tasks__list");
const form = document.querySelector("form");

function newTask() {

    
    list.insertAdjacentHTML("afterbegin", "<div><div></div><a></a></div>");
    const task = list.firstElementChild;
    const taskTitle = task.firstElementChild;
    const taskRemove = task.lastElementChild;

    task.classList.add("task");
    taskTitle.classList.add("task__title");
    taskRemove.classList.add("task__remove");
    taskRemove.setAttribute("href", "#");
    taskRemove.innerHTML = "&times;";
    taskTitle.textContent = inputText.value.trim();

    taskRemove.addEventListener("click", () => {
        task.remove();
    });
}

btnAdd.addEventListener("click", (event) => {
    if(inputText.value.trim()) {
        newTask();
    }
    event.preventDefault();
    form.reset();
})







