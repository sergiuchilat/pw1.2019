

let a, b;

a = 10;
b = 10;

if(a > b){
	console.log('a > b');
}else if(a < b){
	console.log('a < b');
}else{
	console.log('a = b');
}

let n = 3;

if(n === 0){
	console.log('Zero');
}else if(n === 1){
	console.log('Unu');
}else if(n === 2){
	console.log('Doi');
}else if(n === 3){
	console.log('Trei');
}else if(n === 4){
	console.log('Patru');
}else if(n === 5){
	console.log('Cinci');
}else if(n === 6){
	console.log('sase');
}else if(n === 7){
	console.log('sapte');
}else if(n === 8){
	console.log('opt');
}else if(n === 9){
	console.log('noua');
}else{
	console.log('n nu este cifra')
}


n = 10;

switch(n){
	case 0:
		console.log('Zero');
		break;
	case 1:
		console.log('Unu');
		break;
	case 2:
		console.log('doi');
		break;
	case 3:
		console.log('Trei');
		break;
	case 4:
		console.log('Patru');
		break;
	case 5:
		console.log('Cinci');
		break;
	case 6:
		console.log('sase');
		break;
	case 7:
		console.log('sapte');
		break;
	case 8:
		console.log('opt');
		break;
	case 9:
		console.log('noua');
		break;
	default: 
		console.log('n nu este cifra')
}
