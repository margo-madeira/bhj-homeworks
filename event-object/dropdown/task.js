const menu = document.querySelector("ul");
const menuName = document.querySelector(".dropdown__value");
const menuItems = Array.from(document.querySelectorAll(".dropdown__item"));

function openMenu() {
    menu.classList.toggle("dropdown__list_active");
};

function menuClose(event) {
   
    event.preventDefault();
    menu.classList.remove('dropdown__list_active');
    
    const parent = event.target.closest('.dropdown');
    const btn = parent.querySelector('.dropdown__value');
    btn.textContent = event.target.textContent;
    
};
    
menuName.addEventListener("click", openMenu);
menuItems.forEach(e => e.addEventListener("click", menuClose));

