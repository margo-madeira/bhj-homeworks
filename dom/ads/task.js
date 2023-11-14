const baner = document.querySelectorAll(".rotator__case");
const baners = Array.from(baner);

let indOfBaners = 0;
setInterval(() => {
    
    baners[indOfBaners].classList.remove("rotator__case_active");
    indOfBaners += 1;
    
    baners[indOfBaners].classList.add("rotator__case_active");
    
    if(indOfBaners === baners.length - 1) {
        baners[indOfBaners].classList.remove("rotator__case_active");
        indOfBaners = 0;
        baners[indOfBaners].classList.add("rotator__case_active");
    }
}, 1000)