
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

            const cartProduct = document.createElement("div");
            const imgBasket = document.createElement("img");
            const countInBasket = document.createElement("div");
            cartProduct.classList.add("cart__product");
            imgBasket.classList.add("cart__product-image");
            countInBasket.classList.add("cart__product-count");
            
            cartProduct.dataset.id = product[i].dataset.id;
            imgBasket.setAttribute("src", img[i].getAttribute("src"));
            countInBasket.textContent = counter[i].textContent;

            basket.appendChild(cartProduct);
            cartProduct.appendChild(imgBasket);
            cartProduct.appendChild(countInBasket);
        }
    })
}