const text = document.getElementById('editor');

function restoreText(key) {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return null;
    }
}

text.addEventListener('input', () => {
    if(text.value.trim()) {
        localStorage.setItem('text', JSON.stringify(text));
    }
})
window.addEventListener('load', () => {
    restoreText('text');
  });