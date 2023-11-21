
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
        let arrCartProduct = Array.from(document.querySelectorAll(".cart__Product"));
        const productInCard = arrCartProduct.find(el => el.dataset.id === product[i].dataset.id);

        if(productInCard) {
            countInBasket = countInBasket + counter[i];
        } else {
  
            basket.insertAdjacentHTML("afterbegin", "<div><img><div></div></div>");
            const cartProduct = basket.firstElementChild;
            const imgBasket = cartProduct.firstElementChild;
            let countInBasket = cartProduct.lastElementChild;

            cartProduct.classList.add(".cart__product");
            imgBasket.classList.add("cart__product-image");
            const imgAttr = img[i].getAttribute("src");
            imgBasket.setAttribute("src", imgAttr);
            countInBasket.classList.add(".cart__product-count"); 
            countInBasket.textContent = counter[i].textContent;
        }
    })
}