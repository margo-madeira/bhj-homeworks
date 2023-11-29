const closePopup = document.querySelector(".modal__close");
const modal = document.querySelector('.modal');

modal.classList.add("modal_active");
let cookie;

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}

closePopup.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    setCookie('isClose', 'true');
})

window.onload = function() {
    
    getCookie('isClose');
    if(cookie) {
        modal.classList.remove("modal_active");
    } else {
        modal.classList.add("modal_active");
    }
}
