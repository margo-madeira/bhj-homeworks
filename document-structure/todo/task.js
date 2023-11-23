const inputText = document.querySelector(".tasks__input");
const btnAdd = document.querySelector(".tasks__add");
const list = document.querySelector(".tasks__list");
const form = document.querySelector("form");

function newTask() {

    list.insertAdjacentHTML("afterbegin", `<div class="task">
            <div class="task__title">${inputText.value.trim()}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    const task = Array.from(document.querySelectorAll(".task"));
    const taskRemove = Array.from(document.querySelectorAll(".task__remove"));

    for(let i = 0; i < taskRemove.length; i++) {
        taskRemove[i].addEventListener("click", () => {
            task[i].remove();
        });
    }
}

btnAdd.addEventListener("click", (event) => {
    if(inputText.value.trim()) {
        newTask();
    }
    event.preventDefault();
    form.reset();
})







