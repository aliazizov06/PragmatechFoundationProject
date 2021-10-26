let sliderWidth = document.querySelector('section').clientWidth;
let slides = document.querySelector('.slider-container');
let slidesCount = slides.childElementCount;
for(let i=0;i<slidesCount;i++){
    slides.children[i].style.width = `${sliderWidth/3}px`
}
slides.style.gridTemplateColumns=`repeat(${slidesCount}, 1fr)`
let pos = 0;

function next(){
    pos -= (sliderWidth/3+10)*4
    slides.style.left = `${pos}px`
}
function prev(){
    pos += (sliderWidth/3+10)*4
    slides.style.left = `${pos}px`
}