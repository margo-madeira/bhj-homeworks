
const basket = document.querySelector(".cart__products");
const products = document.querySelector(".products");
const product = Array.from(document.querySelectorAll(".product"));
const img = Array.from(document.querySelectorAll("img"));
const minus = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const plus = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const counter = Array.from(document.querySelectorAll(".product__quantity-value"));
const btnAdd = Array.from(document.querySelectorAll(".product__add"));

for(let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        counter[i].textContent++; 
    })
}
for(let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        if(counter[i].textContent > 1) {
            counter[i].textContent--; 
        } 
    })
}

for(let i = 0; i < btnAdd.length; i++) {

    btnAdd[i].addEventListener('click', () => {
        let arrCartProduct = Array.from(document.querySelectorAll(".cart__product"));
        let indProduct = arrCartProduct.findIndex(el => el.dataset.id === product[i].dataset.id);

        if(indProduct >= 0) {
            arrCartProduct[indProduct].lastElementChild.textContent = Number(arrCartProduct[indProduct].lastElementChild.textContent) + Number(counter[i].textContent);
        } else {

            basket.insertAdjacentHTML("afterbegin", `<div class="cart__product" data-id=${product[i].dataset.id}>
                <img class="cart__product-image" src="${img[i].getAttribute("src")}">
                <div class="cart__product-count">${counter[i].textContent}</div>
            </div>`);
        }
        
    })
}

//Вы циклом проходитесь по всем элементам и для каждого добавляете новые обработчики событий. Таким образом вы добавляете их даже на те элементы, на которых они уже есть и они добавляются новые. Следовательно, функция обработчик у вас будет вызываться несколько раз. Вам же нужно добавлять слушатель события только на добавляемый элемент, так как на остальных уже есть слушатель события.