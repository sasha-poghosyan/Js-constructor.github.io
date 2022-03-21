// let a = prompt()
// alert(a)


// const x = {
//     name:"Karen",
//     lastName:'Karapetyan',
//     age:35,
//     friends:[],
// fulName:function(){
//     return this.name + ' ' + this.lastName;
// }

//     fulName(){
//         return this.name + ' ' + this.lastName
//     }
// }
// alert(x.fulName())





// function Guyq(meqena,tun){
//     this.mashna = meqena;
//     this.haus = tun;
// }
// var Guyq0 = new Guyq('Mercedes','erku senyak');
// console.log(Guyq0);


// function Human(anun,tariq){
//     this.name = anun;
//     this.age = tariq;
//     this.savAge = () =>{
//         alert(this.age);
//     }
//     this.savAgeName = ()=>{
//         alert(`${this.name} ${this.age}`)
//     }
//     this.sayName = () =>{
//         alert(this.name)
//     }
// }


// let hum = new Human('Karen',20)
// console.log(hum);
// let hum1 = new Human('Armen',35)
// console.log(hum1);
// let hum2 = new Human('Narine',25)
// console.log(hum2);
// let hum3 = new Human(prompt('greq dzer anunn'), 40)
// console.log(hum3);
// hum.savAgeName()
// hum2.savAge()

// alert(hum1 instanceof Human);
// alert(Guyq instanceof Human);


// function F(){
//     this.b = 10;
// }
// F.prototype.f =30;
// let obj1 = new F()
// let obj = new F();
// console.log(obj.f);
// console.log(obj);
// console.log(obj1.f);
// console.log(obj1);

// function F(){
//     this.b = 10
// }
// F.prototype.b = 30;
// let ajb = new F()
// delete ajb.b
// console.log(ajb.b);




// Array.prototype.f = function(){  //Array vercnum e bolor []
//     return this[0]
// }

// var x =[1,2,3];
// console.log(x.pop());
// console.log(x.f());
// console.log(x);



// var y = [true,'text',12,-88];
// console.log(y.pop());
// console.log(y.f());
// console.log(y);





// function x(){
//     console.log(1);
// }
// function x2(){
//     setTimeout(()=>{
//         console.log(2);
//     },4000)
// }
// function x3(){
//     console.log(3);
// }
// x()
// x2()
// x3()





// var counter = 0;
// function f(){
// console.log(counter++);
// }
// setInterval(f,2000);




// var counter = 0;
// function f(){
//     console.log(counter++);
// }
// var stop = setInterval(f,1500);
// function stopF(){
// clearInterval(stop);
// }
// setTimeout(stopF,5000)



// let x = []
// function F(name, surname, age, password, email) {

//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.password = password
//     this.email = email

// }
// let register = function () {


//     let name = function () {
//         let a = ''
//         if (a === '') {
//             prompt('greq dzer anunn')
//         }


//     }
//     let surname = function () {
//         let b = ''
//         if (b === ''){
//             prompt('greq dzer azganunn')
//         }

// }
//     let age = function () {
//         let c = ''
//         if(c===''){
//             prompt('greq dzer tariqn')
//         }

//     }
//     let password = function () {
//         let d = ''
//         if(d === ''){
//             prompt('greq dzer passwordn')
//         }
//     }
//     let email = function () {
//         let e = '' 
//         if(e === ''){
//             prompt('greq dzer mailn')
//         }

//     }





//     name()
//     surname()
//     age()




// }
// register()
// F()

// let fun = new F('Ashot', 'Petrosyan', 45, 'fffddd55', 'mail.ru')








// let z= [1,2,8,6,55,87,96]
// let x = z.sort(function(a , b){a-b})
// x.reverse()
// console.log(x);



// let foo = function(){
//     let x = prompt('greq dzer tariqn');
//     if(x===''){
//         alert('datark mi toxeq')
//         return foo();
//     }else if(x === null){
//         alert('datark mi toxeq')
//         return foo();
//     }else {
//         return x;  
//     }
// }
// console.log(foo());




// let z = []
// let x = false;

// function F(name, surname, mail, password) {
//     this.name = name
//     this.surname = surname
//     this.mail = mail
//     this.password = password
// }
// let a, b, c, v;

// let register = function () {

//     let name = function () {
//         a = prompt('Գրեք ձեր անունը')
//         if (a === '') {
//             alert('լրացրեք դաշտը')
//             return name()
//         } else if (a === null) {
//             alert('լրացրեք դաշտը')
//             return name()
//         }
//     };

//     let surname = function () {
//         b = prompt('գրեք ձեր ազգանունը')
//         if (b === '') {
//             alert('լրացրեք դաշտը')
//             return surname()
//         } else if (b === null) {
//             alert('լրացրեք դաշտը')
//             return surname()
//         }
//     };

//     let mail = function () {
//         c = prompt('գրեք ձեր էլ-հասցեն')
//         let g = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (c === '') {
//             alert('լրացրեք դաշտը')
//             return mail()
//         } else if (c === null) {
//             alert('լրացրեք դաշտը')
//             return mail()
//         } else if (!g.test(c)) {
//             alert('չի համապատասխանում')
//             return mail()
//         }
//     };

//     let password = function () {
//         v = prompt('գրեք ձեր գախտնաբառը')
//         if (v === '') {
//             alert('լրացրեք դաշտը')
//             return password()
//         } else if (v === null) {
//             alert('լրացրեք դաշտը')
//             return password()
//         }
//     };
//     name();
//     surname();
//     mail();
//     password();

//     let reg = new F(a, b, c, v);
//     z.push(reg);
//     console.log(z);

//     let newReg = confirm('ցանկանւմ եք նորից գրանցվել')
//     if (newReg) {
//         return register()
//     } else {
//         alert('շնորհակալություն գրանցվելու համար')
//         x = true
//     }

// }
// let time = setInterval(function () {
//     if (x) {
//         clearInterval(time);
//         setTimeout(() => {
//             alert('Ձեր տվյալները բեռնված են, շնորհակալուտյուն գրանցվելու համար')
//             let func = function () {
//                 let t = true;
//                 let email = prompt('գրեք էլ հասցեն')
//                 let pass = prompt('գրեք գախտնաբառն')
//                 for (var i = 0; i <= z.length; i++) {
//                     if (z[i].mail === email && z[i].password === pass) {
//                         t = false;
//                         document.write(z[i].name + ' ' + z[i].surname);
//                         break;
//                     } else {
//                         alert('չի համապատասխանում')
//                         return func()
//                     }
//                 }

//             }
//             func()


//         }, 3000)
//     }
// }, 1000)


// register()



// let z = []
// let x = false;
// function Man(name, surname, age, password) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.password = password

// }
// let a, b, c, d

// let register = function () {

//     let name = function () {
//         a = prompt('asa anunt')
//         if (a === '') {
//             alert('lracru')
//             return name()
//         } else if (a === null) {
//             alert('datark mi tox')
//             return name()
//         }
//     }
//     let surname = function () {
//         b = prompt('asa azganunnt')
//         if (b === '') {
//             alert('lracru')
//             return surname()
//         } else if (b === null) {
//             alert('datark mi tox')
//             return surname()
//         }
//     }
//     let age = function () {
//         c = prompt('asa tariqt')
//         if (c === '') {
//             alert('lracru')
//             return age()
//         } else if (c === null) {
//             alert('datark mi tox')
//             return age()
//         }
//     }
//     let password = function () {
//         d = prompt('asa parolt')
//         if (d === '') {
//             alert('lracru')
//             return password()
//         } else if (d === null) {
//             alert('datark mi tox')
//             return password()
//         }
//     }
//     name()
//     surname()
//     age()
//     password()


//     let human = new Man(a, b, c, d)
//     z.push(human)


//     let newReg = confirm('cankanum eq noric grancvel')
//     if (newReg) {
//         return register()

//     } else {

//         alert('shnorhakalutyun grancvelu hamar')
//         x = true
//     }
// }


// let timer = setInterval(function () {
//     if (x) {
//         clearInterval(timer);
//         setTimeout(() => {
//             alert('shnorhakalutyun tzer tvyalnern bernvac en')
//             let func = function () {
//                 let t = true;
//                 let age1 = prompt('gereq dzer tariqn')
//                 let pass = prompt('greq dzer passwordn')
//                 for (let i = 0; i < z.length; i++) {
//                     if (z[i].age === age1 && z[i].password === pass) {
//                         t = false
//                         document.write(`${z[i].name} ${z[i].surname}`)
//                         break;
//                     }
//                     if(t) {
//                         alert('chi hamapatasxanum')
//                         return func()
//                 }
//             }

//         }
//         func()

//         }, 3000)
//     }


// },5000)

//  register()







let x = []
let z = false;

function Man(name, surname, age) {

    this.anun = name
    this.azganun = surname
    this.tariq = age

}
let a, b, c

let hom = function () {

    let anun = function () {
        a = prompt('asa anunn')
        if (a === '') {
            return anun()
            alert('datark mi toxeq')
        } else if (a === null) {
            alert('lracreq')
            return anun()
        }
    }
    let azganun = function () {
        b = prompt('asa azganunn')
        if (b === '') {
            alert('datark mi toxeq')
            return azganun()
        } else if (b === null) {
            alert('lracru')
            return azganun()
        }
    }
    let tariq = function () {
        c = prompt('asa tariqn')
        if (c === '') {
            alert('datark mi toxeq')
            return tariq()
        } else if (c === null) {
            alert('lracru')
            return tariq()
        }
    }
    anun()
    azganun()
    tariq()


    let people = new Man(a, b, c);
    x.push(people)
    console.log(x);

   
    


    let newMan = confirm('cankanum eq noric grancvel')
    if(newMan){
        return hom()
    }else{
        alert('shnorhakalutyun grancvelu hamar')
        z = true
    }

}

let timer = setInterval(function(){
    if(z){
        clearInterval(timer);
        setTimeout(()=>{
            alert('tzer tvyalnern bernvac en')
            let foo = function(){
                let w = true;
                let t = prompt('greq tariqn')
                let a = prompt('greq anunn')
                for(let i = 0;i< x.length;i++){
                    if(x[i].tariq ===t && x[i].anun === a){
                        w = false;
                        document.write(`${x[i].anun} ${x[i].azganun}`);
                        break;
                    }
                    if(w){
                        alert('chi hamapatasxanum')
                        return foo()
                    }
                }

            }
            foo()
        },2000);
       


        
    }
},3000);

hom()