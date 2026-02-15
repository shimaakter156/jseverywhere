// // //groupconsole
// //
//
//
// console.profile('MyProfile');
//
// // Code to profile
// for (let i = 0; i < 100000; i++) {
//     // Some operations
// }
//
// console.profileEnd('MyProfile');
//
// console.time('Array Processing');
//
// let arr = [];
// for (let i = 0; i < 1000000; i++) {
//     arr.push(i);
// }
//
// console.timeEnd('Array Processing');
// // Output: Array Processing: 45.123ms
//
//
// console.count('sdsd')
// console.count('sdsd')
// console.count('sdsd')
// console.count('SDSWE')
// console.countReset('sdsd')
// console.count('sdsd')
//
// function greet(name){
//     console.count(name)
//     return `hello ${name}`;
// }
// greet('hello')
// greet('heSDSllo')
// greet('hello')

// const employee = {
//     name:'john',
//     age:30,
//     address:{
//         city:'nyc',
//         zip:'101'
//     }
// }
//
// console.group('Outer Group');
// console.log('Outer message');
// console.group('Inner Group');
// console.log('Inner message');
// console.groupEnd();
// console.groupEnd();
//
// console.group('User Details');
// console.log('Name: John');
// console.log('Age: 30');
// console.log('City: NYC');
// console.groupEnd();
//
// console.groupCollapsed('sdsdsd')
// console.log('sdsdsd','sdsd')
// console.log('sdsdsd','sdsd')
// console.groupEnd();
//
// //the thml can be call by its id
// // const element = document.querySelector('#mydiv')
// // console.dirxml(element)
// console.dir(employee,{depth:null})
// console.table(employee)
//const users = [
//     {name:'sdsd',age:25},
//         {name:'erer',age:58},
//     ]
// console.table(users)
// console.log(users)
// console.log(JSON.stringify(users,null,2))
//
// console.group('user details')
// console.log('name',':','shima')
// console.log('age',':',25)
// console.groupEnd();
//
//
// const employee = {
//     name:'john',
//     age:30,
//     address:{
//         city:'nyc',
//         zip:'101'
//     }
// }

// // all are same
// console.log('helo')
// console.info('info')
// console.warn('warn')
// console.error('error')
// console.debug('debug')