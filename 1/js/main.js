//alert('Hello world');

/*
confirm('Vrei sa primesti nota 2?');
*/

//prompt('What is your name?');

"use strict";

var x = 2;
console.log(typeof(x));

console.log(x);

let a = 2;
const b = 3;

a = 4;
//b = 5;


console.log(a + b);

let 
	x1 = 2, 
	x2 = 3, 
	x4 = 4;

console.log(x1, x2, x4);

console.log(1 / 0);

let m = 'a20d1',
	n = 4;
console.log(typeof(m));


console.log('m-n=', parseInt(m) - n);


let name = null;
/*let name;*/
console.log(typeof(name ));

console.log(name);


/*Operators*/

let 
	v1 = 3, 
	v2 = 2;

let v3 = '3';

console.log(v1 + v2);
console.log(v1 - v2);
console.log(v1 * v2);
console.log(v1 / v2);
console.log(v1 % v2);
console.log(v1 > v2);
console.log(v1 < v2);
console.log(v1 >= v2);
console.log(v1 <= v2);
console.log(v1 == v2);

console.log(v1 == v3);
console.log(v1 === v3);


/*
Dialog
*/

alert('Hello. This is a JS code');

let username = prompt('What is your name');
alert('Hello ' + username);

let response = confirm('Vrei nota 2?');

while(!response){
	if(response){
		alert('Dorinta iti va fi indeplinita');
	}else{
		response = confirm('Vrei nota 2?');	
	}	
}





