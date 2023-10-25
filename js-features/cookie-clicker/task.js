
    const cookie = document.getElementById("cookie");

    cookie.onclick = function() {

        const clickerCounter = document.getElementById("clicker__counter");
        const value = clickerCounter.textContent;
        const newValue = Number(value) + 1;

        if(newValue %2 !== 0) {
            cookie.width = 300;
        } else {
            cookie.width = 200;
        }
        clickerCounter.textContent = String(newValue);
    }
   