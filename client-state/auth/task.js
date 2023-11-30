const form = document.getElementById("signin__form");
const arrInputs = Array.from(document.querySelectorAll('.control'));

const text = document.querySelector('.welcome');
const id = document.getElementById("user_id");
const signin = document.getElementById("signin");
const storedId = localStorage.getItem('id');

signin.classList.add("signin_active");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(arrInputs[0].value.trim() && arrInputs[1].value.trim()) {

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.send(formData);

        xhr.addEventListener('load', () => {
    
            const answer = JSON.parse(xhr.responseText);
            if(storedId === answer.user_id) {
                text.classList.add('welcome_active');
                id.textContent = answer.user_id;
            } 
        
            if(answer.success === true) {
                localStorage.setItem("id", answer.user_id);
                text.classList.add('welcome_active');
                id.textContent = answer.user_id;
            }
        
            if(answer.success === false){
                alert("Неверный логин/пароль");
            }        
        })
    }
})


