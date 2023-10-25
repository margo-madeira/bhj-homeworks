const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;



for (let index = 1; index < 10; index++) {
    getHole = index => document.getElementById("hole${index}");
    let hole = getHole(index);

    hole.onclick = function() {
        if(hole.className.includes('hole_has-mole')) {
            counterDead++;
            dead.textContent = counterDead;
            } else {
                counterLost++;
                lost.textContent = counterLost;
            }
    }
}


if (counterDead === 10) {
    alert ("Победа!");
    counterDead = 0;
    counterLost = 0;  
}

if (counterLost === 5) {
    alert ("Вы проиграли");
    counterDead = 0;
    counterLost = 0; 
}
