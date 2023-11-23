const poll = document.querySelector(".poll");
const title = document.querySelector(".poll__title");
const answers = document.querySelector(".poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {

        const resp = xhr.responseText;
        const text = JSON.parse(resp);
        title.textContent = text.data.title;
        answers.classList.add("poll__answers_active");

        for(let i = 0; i < text.data.answers.length; i++) {

        const btn = document.createElement("button");
        btn.classList.add("poll__answer");
        answers.appendChild(btn);
        btn.textContent = text.data.answers[i];


        }

    }
    })

    const arrBtn = Array.from(document.querySelectorAll(".poll__answer"));
    for(let i = 0; i < arrBtn.length; i++) {
        arrBtn[i].addEventListener("click", (event) => {
            event.preventDefault();
            alert("Спасибо, ваш голос засчитан!");
        })
    }