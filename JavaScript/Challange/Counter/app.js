//Counter- 3 button var 1ci button rəqəmimizi bir ədəd olaraq artırır( hər clickləyəndə) 2ci button resetdəyir 3cu button isə 1 ədəd azaldır
let increment = document.querySelector(".btn-inc")
let decrement = document.querySelector(".btn-dec")
let reset = document.querySelector(".btn-rst")
let number = document.querySelector("p")
let int = 0 
increment.addEventListener('click', function(){
    int+=1
    number.innerHTML = int
})
decrement.addEventListener('click', function(){
    int-=1
    number.innerHTML = int
})
reset.addEventListener('click', function(){
    int=0
    number.innerHTML = int
})


