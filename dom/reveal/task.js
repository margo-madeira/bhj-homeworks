const reveal = document.querySelectorAll(".reveal");
const arr = Array.from(reveal);

document.addEventListener("scroll", function() {

    for(let i = 0; i < arr.length; i++) {

        const revealTop = arr[i].getBoundingClientRect().top;

        const revealBottom = arr[i].getBoundingClientRect().bottom;

        if((revealTop < window.innerHeight) && (revealBottom > 0)) {
            arr[i].classList.add("reveal_active");
        }
    }
});