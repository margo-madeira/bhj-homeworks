
const basket = document.querySelector(".cart__products");
const products = document.querySelector(".products");
const product = Array.from(document.querySelectorAll(".product"));
const img = Array.from(document.querySelectorAll("img"));
const minus = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const plus = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const counter = Array.from(document.querySelectorAll(".product__quantity-value"));
const btnAdd = Array.from(document.querySelectorAll(".product__add"));

basket.insertAdjacentHTML("afterbegin", "<div><img><div></div></div>");
const cartProduct = basket.firstElementChild;
const imgBasket = cartProduct.firstElementChild;
let countInBasket = cartProduct.lastElementChild;

const arrCartProduct = Array.from(document.querySelectorAll(".cart__Product"));

for(let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        counter[i].textContent++; 
    })
}
for(let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        if(counter[i].textContent > 1) {
            counter[i].textContent--; 
        } else return;
    })
}

for(let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', () => {

        const imgAttr = img[i].getAttribute("src");
        const idAttr = product[i].dataset.id;
        for(let j = 0; j < arrCartProduct.length; j++) {
            if(arrCartProduct[j].dataset.id !== idAttr) {

                cartProduct.classList.add(".cart__product");
                imgBasket.classList.add("cart__product-image");
                imgBasket.setAttribute("src", imgAttr);
                countInBasket.classList.add(".cart__product-count"); 
                countInBasket.textContent = counter[i].textContent;
                cartProduct.dataset.id = idAttr;
        
            } else {
                countInBasket = countInBasket + counter[i];
            }
        }
    })
}
