let a = 2, b = 3;

console.log(suma(a, b));

let x = 2.7, y = 3.14;

console.log(suma(5.123, y));

console.log(suma(x));


function suma(x, y){
	console.log('a = ' + a);
	console.log('x = ' + x);
	return x + y;
}

function openWindowAndCloseDoor(){

}

function open_window_and_close_door(){
	
}

/*function open window and close door(){
	
}*/


function superPuper(x, y){

	let i = x + 2;
	i = i - 2;

	let p = 4;

	y = p;
	x = i; 

	return x + y;
}


/*Recursion*/

function factorial(n){
	if(n>1)
		return n * factorial(n - 1);
	else
		return 1;
}

console.log('Factorial =  ' + factorial(3));