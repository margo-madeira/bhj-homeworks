const startTime = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;

    if(Number(timer.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(counter);
    }
    }
    let counter = setInterval(startTime, 1000);
    
