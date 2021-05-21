const btn = document.querySelector('.burger')
btn.addEventListener('click', setTheme)

function setTheme(){
   btn.classList.toggle('block')
}