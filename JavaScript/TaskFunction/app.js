//Daxil edilən 5 parametri array formasında return edən funksiya yazın
function array(a,b,c,d,e){
    let x=[a,b,c,d,e]
    console.log(x)
    return x
}
array(undefined, 23, 32, 'hello', 'hi')

//Parametr olaraq array qəbul edən və daxil edilən arrayın ilk elementini return edən funksiya yazın
//const langs = ["English", "Turkish", "Russian", "French"]
function firstElem(g = []){
    let first = g[0]
    console.log(first)
    return first
}
firstElem(['code',543,675])

//1 eded parametr qəbul edib daxil edilən dəyərin 1 artığını return elətdirən funksiya yazın
function plusOne(i){
    console.log(i+=1)
    return i+=1
}
plusOne(65)
