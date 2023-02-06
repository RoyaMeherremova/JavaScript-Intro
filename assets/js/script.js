//external js
 
"use strict"   // ECMAScript son olani istifade etmek ucun- Js yenilenmisini istifade edirsen
console.log("heloooo")

//alert("salam Cavid")

// javascriptde #c kimi vareybl camelcase yazilir.


//var,let,const -vareybl teyin etmek olur bular vasitesi ile

//var surname="Ismayilzade";  //eksikleri var

//let name="Cavid";  //en cox istfade olunacaq

//var namee="Cavid";

//const isMarried=true; //teyin etdiyimizi degeri deyismek olmur-esayn ede bilmirsen

//const IS_MARRIED =true; //upper-snake)))) bele yazmaqmiz bezpraktiks hemde ferqlenecek.

//console.log(surname + " " +name);


// if(true){
//     var age=55;  
// }


//console.log(age); //var yaziriqsa scopdan kenarda consol yazsaq onu gorruk lakin
                       //duzgun deyil cunku basqa yerde eyni adda vareybl olsa onu goturecek-override edecek.
                       //ama let yazanda scopda ona scopdan kenar cata bilmirsen.

                       

if(true){
   let age=66; 
   console.log(age);
}

//const age=54;  //const deyerini deyismek olmur bunu backenden getirdiyimiz datalari hansilari  deyismeyeceymiz yaziriq bura consttanla meselen GetAlldan metodundan gelen datalar.
//age=70; //erorr verecek consolda cunku esayn etmek olmur constu.
//console.log(age);

//js arrayi hem string hem int yaza bilerik #c ferqli olaraq


let age=17;

let name="Cavid";

let isMarried=false;

let address;  //undifined eyer vareybl teyin edib ona deyer vermirsense bucur adlanir

let phone=null; //nulayble yani hecneye beraber elirsen

console.log(typeof age)  // typeof-consolda type nedi onu gorsetmek ucun
console.log(name)
console.log(isMarried)
console.log(address)
console.log(phone)      

if(address == undefined){
    console.log("address undefined oldu")
}

let stu={
    name:"Cavid",
    surname:"Ismayilzade"   //object
}

console.log(stu)  //object seklinde gorsedecey

console.log(stu.name + " " + stu.surname)

console.log(`${stu.name} ${stu.surname}`)  //dollar seklinde



let students =["Cavid","Pervin","Mirze",100,200,true] //array js ayri typlar gebul edir -filterlemey lazimdir

for(let i = 0; i < students.length;i++){
    console.log(students[i])
}

//array-objectdi

//alert("salamlar")

let username = prompt("Please add your username")  //brauzerde yuxarda input acilir gelen deger essayn olunur usernameye
                                                    //eyer cancel edirsense olur deyeri null

console.log(username)

//debugger //hara qoyduq oradan baslayir debug elemeye

let isOnline=confirm("Is he online ?")  // yes no mentiqinde cixarir brazuerde yuxarid ok or cancel?
                                        // cancel elesek false olacaq deyeri

if(isOnline){
    console.log("He is online") //ok elesek brauzerde
}else{
    console.log("he is ofline") //cancel elesek
}

//ctr-k-c //coment
//ctr-k-u //comentden cixarir

let age1=20
if(age>15){
    console.log("Boyukdur")
}else{
    console.log("Kicikdir")
}

//Node js ve Code Runner -yazdiqin kodlari js gormey ucun

let temp=5;

if(temp<10){
    console.log("Soyuqdur")
}else if(temp>20){
    console.log("Istidir")
}else{
  console.log("Hecbirsey")
}

let count=5;

switch(count){
    case 5:
    console.log("besh") 
    case 6:
    console.log("alti") 
    default:
    console.log("notfound") 
}

//dowhile -isi gorur sonra serti yoxlur
//while -oxuyur sonra isi gorur
//fornan while do while ferqi insalayz elementi icerde olur forda obirlerde colde(let i=0;i<lenght;i++)


for(let i = 0; i<5;i++){
    console.log(i)  // 0,1,2,3,4
}

//iki let -in eyni vareyble olmur ama var-da olur

//let result=2**3; //2 ustu 3 cavab=8
//console.log(result)

// 0 bolsek ededi infinity gorsedir

console.log("44"/2) //22 cixarir
console.log("44"+2) //442 cixarir ancaq + birlesdirir

//let isMarriedd=true;
//let result=isMarried?"Evlidir":"Subaydir"; true-dursa Evlidir false-Subaydir
//console.log(result)

let addres="Xizi";

let result = addres??"Ehmedli"; // ??-ikidene sual nula gore isleyir eyer null-disa Ehmedli gorset deyilse oz deyerini


console.log(result)

let res = addr ==null ? "Ehmedli":eddr //nuldisa Ehmedli deyilse ozu
console.log(res)