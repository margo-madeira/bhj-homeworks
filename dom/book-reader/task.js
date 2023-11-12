const link = document.querySelectorAll(".font-size");
const arrLink = Array.from(link);
const content = document.getElementById("book");

let sizeValue;

arrLink.forEach(value => {
    value.addEventListener("click", selectLink);
})

function selectLink(event) {

    arrLink.forEach(value => {
        value.classList.remove("font-size_active");
    })


    this.classList.add("font-size_active");
    sizeValue = this.getAttribute("data-size");

    if(sizeValue === "small") {
        content.classList.add("book_fs-small");
    }
    if(sizeValue === "big") {
        content.classList.add("book_fs-big");
    } 
    if(sizeValue === null) {
        content.classList.remove("book_fs-small");
        content.classList.remove("book_fs-big");
    } 

event.preventDefault();
}