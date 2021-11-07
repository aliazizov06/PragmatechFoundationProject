let text = document.querySelector("h1")
let letter = "I want to be a web developer"
let index = 1
setInterval(write, 100)
function write(){
    text.innerText = letter.slice(0, index)
    index++
    if(index>letter.length){
    index = 1
}
}
