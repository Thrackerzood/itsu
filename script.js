const btn = document.querySelector('.burger')
const list_view = document.querySelector('.list_view')
const subListView = document.querySelector('.sub_list-href')
btn.addEventListener('click', setTheme)
list_view.addEventListener('click', hrefMenu)
const sliderP = document.querySelector('.sub_slider_p')

function setTheme(){
   btn.classList.toggle('block')
}
function hrefMenu(){
   subListView.classList.toggle('view')
   list_view.classList.toggle('target')
}

const arrayPInfo = [
   'ВОЗЛОЖЕНИЕ ЦВЕТОВ К МОНУМЕНТУ М.Т. КАЛАШНИКОВУ',
   'МЕЖДУНАРОДНЫЙ ДЕНЬ ДОБРОВОЛЬЦЕВ В ИЖГТУ',
   'ДЖАЗ СОБИРАЕТ ДРУЗЕЙ',
   'ЦЕРЕМОНИЯ НАГРАЖДЕНИЯ ЛАУРЕАТОВ И ДИПЛОМАНТОВ ВЫСТАВКИ-СЕССИИ'
]
let offset = 0
let i = 0
const subSliderBlock = document.querySelector('.sub_sub_sub-slider')
document.querySelector('.slider-left').addEventListener('click', ()=>{
--i
offset += 455
if(offset > 0){
    offset = -1365
    i = 3
}
console.log(i)
sliderP.textContent = arrayPInfo[i]
subSliderBlock.style.left = offset + 'px'
})
document.querySelector('.slider-right').addEventListener('click', ()=>{
i++   
offset -= 455
if(offset < - 1365){
   offset = 0
   i = 0
}
console.log(i)
sliderP.textContent = arrayPInfo[i]
subSliderBlock.style.left = offset + 'px'
})