let slider = document.querySelector(".images")
let bigImage = document.querySelector(".big-image")
let btnUp = document.querySelector(".btn-up")
let btnDown = document.querySelector(".btn-down")
let textHeader = document.querySelector("h2")
let smallImage = document.querySelector(".image")
const images = [
    "images/johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
    "images/pexels-aleksandar-pasaric-2341830.jpg",
    "images/pexels-donald-tong-55787.jpg",
    "images/pexels-felix-mittermeier-956981.jpg",
    "images/pexels-john-nail-1448136.jpg"
]
let pos = 0
let index = 0
let imgCount = images.length
function up(){
    pos += 100
    slider.style.top = `${pos}vh`
}
function down(){
    pos -= 100
    slider.style.top = `${pos}vh`
}
btnDown.addEventListener('click', function(){
    index--;
    showImg()
})
btnUp.addEventListener('click', function(){
    index++;
    showImg()
})
function showImg(){
    for(let i=0; i<imgCount; i++){
    smallImage.setAttribute('src', images[i])
}
}