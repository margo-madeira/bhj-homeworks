const progress = document.getElementById('progress'),
      file = document.getElementById('file'),
      form = document.querySelector("form"),
      fileName = document.querySelector('.input__wrapper-desc')
      xhr = new XMLHttpRequest();

file.addEventListener('change', () => { fileName.textContent = file.value; progress.value = 0 });

form.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.upload.onprogress = (e) => {progress.value = e.total / e.loaded;}
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(new FormData(form));
})