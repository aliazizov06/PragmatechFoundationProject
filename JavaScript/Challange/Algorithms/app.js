//user tərəfindən daxil edilən sözün boyuk herflerini kicikle, kicik herflerini böyüklə yazmaq
let user = prompt("Adinizi daxil edin");
if(user == user.toLowerCase()){
    user = user.toUpperCase();
    console.log(user)
}
else if(user == user.toUpperCase()){
    user = user.toLowerCase();
    console.log(user)
}
else{
    console.log(user)
}

// user tərəfindən daxil rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить)
let number = prompt('Eded daxil edin');
let int = Math.trunc(number);
let frac = (number -= Math.trunc(number))*10
console.log(int+frac)

// user tərəfindən daxil 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.
let num1 = prompt('1-ci ededi daxil edin');
let num2 = prompt('2-ci ededi daxil edin');
if(num1>=30 && num1<=70 && num2>=30 && num2<=70){
    console.log('Eded 30-70 araligindadir')
}
else if(num1>=30 && num1<=70 || num2>=30 && num2<=70){
    console.log('Ededlerden biri 30-70 araligindadir')
}
else{
    console.log('Ededlerden hec biri 30-70 araliginda deyil')
}

// Verilmiş arreyin uzunluğunu elementlərini çıxarmaq. numbers = [45, 4, 9, 16, 25];
const numbers = [45, 4, 9, 16, 25];
const lengthNum = numbers.length
console.log(lengthNum)
 //1-ci metod
for(let i=0; i<numbers.length; i++){   
    console.log(numbers[i])
}
 //2-ci metod
for(let j in numbers){                 
    console.log(numbers[j])
}
 //3-cu metod
numbers.forEach(function(elem){         
    console.log(elem)
})

// 2 ayrı arreyi birləşdirmək.
let countries = ['Norway', 'Sweden', 'Finland', 'Iceland', 'Denmark']
let cities = ['Oslo', 'Stockholm', 'Helsinki', 'Reykyavik', 'Copenhagen']
let all = countries.concat(cities)
console.log(all)

// Rənglərə aid arrey yaradib arrey-ə kənardan əlavə söz əlavə etmək.
let colors = ['blue', 'orange', 'yellow', "red"]
colors.push('green')
colors.unshift('purple')
colors.splice(2,0,"lime")
colors[colors.length] = "white"
console.log(colors)

// Yeni bir obyekt yaradib onun elementlərini console log da çıxarmaq. (Məsələn, Taski şəxsin adı Aydan, Yaşı qadının yaşı soruşulmaz, vəzifəsi Tələbə koordinatorudur)
let person = {
    name: "Ali",
    surname: "Azizov",
    age: 20,
    address : {
        country: "Azerbaijan",
        city: "Sheki"
    },
    hobbies : ["books", "movies", "astronomy", "swimming"]
};
console.log(person);
console.log(person.surname);
console.log(person.address);
console.log(person.address.city);
console.log(person.hobbies);
console.log(person.hobbies[2]);

// istənilən 2 parametri (rəqəmi) toplayan function yaratmaq.
let a;
let b;
function Sum(a,b){
    console.log(a+b);
    return a+b;
};
Sum(3,8);

// user-ın daxil etdiyi sözün sonuncu hərfini qaytarmaq
let word = prompt('Adinizi daxil edin');
let lastLetterWord = word[word.length-1];
console.log(lastLetterWord);