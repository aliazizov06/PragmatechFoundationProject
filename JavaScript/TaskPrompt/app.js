let ad = prompt("Adinizi qeyd edin");
let soyad = prompt("Soyadinizi qeyd edin");
for(i=0; i<2; i++){
    console.log(ad);
}
for(i=0; i<4; i++){
    console.log(soyad);
}
console.log(ad + "|||" + soyad)
console.log("Sizin adiniz : " +ad)
console.log("Sizin soyadiniz : " +soyad)

//////////////////////////////////////////////////

let age = prompt("Yasinizi qeyd edin");
 
if(age<30 && age>0){
  let a=age*age;
  document.write(a);
}
if(age>=30 && age<=40){
    let b=age%10;
    document.write(b);
}
if(age<0 || age>100){
    alert("Duzgun melumat daxil etmemisiniz");
}

/////////////////////////////////////////////////////

let person = prompt("Adinizi qeyd edin");
for(let i=1; i<=10; i++){
    document.write(person + "<br>");
}