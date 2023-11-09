let tab = document.querySelectorAll(".tab");
let arrTab = Array.from(tab);
let content = document.querySelectorAll(".tab__content");
let arrContent = Array.from(content);

    
for(let i = 0; i < arrTab.length; i++) {

    arrTab[i].onclick = function() {

        arrTab[i].classList.add("tab_active");

        arrContent[i].classList.add("tab__content_active");
        
        for(let j = 0; j < arrTab.length; j++) {
            if(j < i || j > i) {
                arrTab[j].classList.remove("tab_active");

                arrContent[j].classList.remove("tab__content_active");

            }
        }
    }
}
