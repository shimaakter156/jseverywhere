// function Person(first,last){
//     this.first = first;
//     this.last = last;
//     this.getFull = function(){
//         return this.first+" "+this.last
//     };
// }
// let person = new Person('john','doe');
// console.log(person.getFull());
//
// let person1 ={
//     firstName:'john',
//     lastName:'doe'
// }
// function Person(first,last){
//     this.first = first;
//     this.last = last
// }
// let person = new Person('john','doe');
// console.log(person,person1);

//object model
// let person ={
//     firstname:'shima',
//     secondname:'akter'
//
// }
// person.greet = () => console.log('sdsd')
//
//
// console.log(person.greet())
// //recursive fun which call itselfs
// let countDown = function f(num){
//     console.log(num)
//     let nextnum = num-1;
//     if (nextnum>0){
//         f(nextnum)
//     }
// }
//
// let nexYear = countDown;
// countDown = null;
// nexYear(10)

// function countdown(num){
//     console.log(num)
//     countdown(num-1)
// }
// countdown(10)
// //pass by value of reference value
//
// let person = {
//     name:'sdsd',
//     age : 25
// }
// function printper(obj){
//     obj.age+=1;
// }
//
// printper(person)
// console.log(person)

// // pass by value pimitive values
// function square(x){
//     x = x*x;
//     return x;
// }
// let y = 10;
// let result = square(y)
// console.log(result);

// //arrow function
// let show = function () {
//     console.log('sdsd')
// }
// show();
//
// // shorter version
//
// let show1 = ()=>console.log('wewef')
// show1()
// invoke function execution
// let person = {
//     firstname:'dsds',
//     lastname:'sdsd'
// };
// (function (){
//     console.log(person.firstname)
// })(person)
 // (function (){
 //     console.log('sdsd')
 // })()
// anonymous funciton calling

// setTimeout(function(){
//     console.log('sdsd')
// },100);
// let show =function(){
//     console.log('sdsd')
// };
//
// show()
////function pass into function
// function cmToIn(length){
//     return length/2.5
// }
//
// function inToCm(length){
//     return length*2.5
// }
//
// function convert(fn,length){
//     return fn(length)
// }
//
// let inches = convert(cmToIn,10)
// console.log(inches)
//
// let cm = convert(inToCm,10)
// console.log(cm)


// function compareBy(propertyName){
//     return function(a,b){
//         let x = a[propertyName],
//             y = b[propertyName];
//
//         if(x>y){
//             return 1
//         }else if(x<y){
//             return -1
//         }else{
//             return 0;
//         }
//     }
// }
//
//
// let products = [
//     {name:'xphone',price:900},
//     {name:'ss', price:500}
// ]
//
// products.sort(compareBy('name'))
// console.table(products)