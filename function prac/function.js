


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
//function pass into function
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