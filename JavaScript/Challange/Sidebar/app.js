let btnClose = document.querySelector(".exit")
let btnOpen = document.querySelector(".menu")
let sidebar = document.querySelector("section")
btnClose.addEventListener('click', function(){
    sidebar.style.display = "none"
})
btnOpen.addEventListener('click', function(){
    sidebar.style.display = "block"
})