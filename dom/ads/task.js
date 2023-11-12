const baner = document.querySelectorAll(".rotator__case");
const baners = Array.from(baner);

function rotator() {
     
    for(let i = 0; i < baners.length; i++) {
        setTimeout(() => {

            baners[i].classList.add("rotator__case_active");  
            for(let j = 0; j < baners.length; j++) {
                if(j < i) {
                    baners[j].classList.remove("rotator__case_active");
                }
            }
        }, 1000 + (i * 1000))
    }
}

rotator();



