let menu = document.querySelector("#sidebar-menu")
let menuIcon = document.querySelector(".menu-icon")
menu.style.display="none"
menuIcon.addEventListener('click', function(){
    menu.style.display = "block"
})