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