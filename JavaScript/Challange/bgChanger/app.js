//Background Changer - buttona clickləyəndə arxa fonun rəngi dəyişsin və həmin rəngin adı buttonun üstündə yazılsın
let bodyColor = document.querySelector("body")
let colorName = document.querySelector("span")
function changeColor(){
    bodyColor.style.backgroundColor = 
    'rgb('+Math.round(Math.random()*255)+','
    + Math.round(Math.random()*255)+','
    + Math.round(Math.random()*255)+')'
    colorName.innerText =   `Background Color: ${bodyColor.style.backgroundColor}` 

}