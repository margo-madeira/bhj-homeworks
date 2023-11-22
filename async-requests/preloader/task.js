const items = document.querySelector(".items");
const item = document.querySelectorAll(".item");
const arrItem = Array.from(item);
const img = document.querySelector("img");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

item.insertAdjacentHTML("afterbegin", "<div></div><div></div><div></div>");
const code = item.children;
const value = item.children;
const currency = item.children;

code.classList.add("item__code");
value.classList.add("item__value");
currency.classList.add("item__currency");

