// function f(a,b,c){
//     return function(){
//         a++;
//         return a;
//     }
// };
// let g = f(1,2,3);
// let j = g();
// let r = g();
// let p = g();
// console.log(j,r,p);



// var t;
// function f(a){
//     function y(){
//         a++;
//         console.log(a)
//     };
//     t = y;
// };
// f(1);
// t();
// t();
// t();



// function f(){
//     let a = 1;
//     return function(){
//         a++;
//         console.log(a);
//     }
// };
// let r = f();
// let o = f();
// r();
// r();
// r();
// o();
// r();



// let r = (function(a){
//     let b = 5;
//     return function(){
//         b++;
//         a++;
//         console.log(a,b);
//     }
// })(1);
// r();
// r();
// r();


// let u;
// (function(a){
//     u = function(){
//         a = a+7;
//         console.log(a);
//     }
// })(5);
// u();
// u();
// u();


// // Էսի closure չի
// function f(a){
//     return (function(){
//         a++;
//         return a;
//     })()
// };
// let u = f(1);
// console.log(u);



// let o;
// function f(a,b){
//     o = function(){
//         a++;
//         console.log(a);
//     };
//     return function(){
//         b++;
//         console.log(b);
//     }
// };
// let y = f(1,11);
// y();
// y();
// y();
// o();
// o();
// o();