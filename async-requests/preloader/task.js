const items = document.querySelector(".items");
const item = document.querySelector(".item");
const img = document.querySelector("img");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {

        const resp = xhr.responseText;
        const answer = JSON.parse(resp);

        for(let i = 0; i < answer.response.Valute.length; i++) {

            item.insertAdjacentHTML("afterbegin", `<div class="item__code">${answer.response.Valute[i].CharCode}</div>
                <div class="item__value">${answer.response.Valute[i].Value}</div>
                <div class="item__currency">руб.</div>`);
        }

        img.classList.remove("loader_active");
    }
})



