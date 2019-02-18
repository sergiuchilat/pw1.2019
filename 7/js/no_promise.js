/*let promise1 = new Promise(function(resolve, reject){
	resolve("eu nu dorm!")
	setTimeout(() => resolve("done!"), 1000);
	//setTimeout(() => reject(new Error("Whoops!")), 1000);
}).then(alert);*/

let money = 3000;
let prices = {
	'foundation': 1000,
	'wall': 2001,
	'roof': 500,
	'doors': 300,
	'windows': 650

}

let buildFoundation = function(){
	setTimeout(function(){
		console.log('Try to build foundation');

		if(money >= prices.foundation){
			money -= prices.foundation;
			console.log('Fundation buildt');
			return true;
		}else
			console.log('Eroor. No money for fundation');
		return false;
	}, 3000);
	console.log('buildFoundation exited');
}

let buildWall = function(){
	setTimeout(function(){
		console.log('Try to build wall');
		if(money >= prices.wall){
			money -= prices.wall;
			console.log('Wall buildt');
			return true;
		}else
			console.log('Eroor. No money for wall');
		return false;
	}, 2000);

}


let buildRoof = function(){
	console.log('Try to build roof');
	if(money >= prices.roof){
		money -= prices.roof;
		console.log('Roof buildt');
		return true;
	}else
		console.log('Eroor. No money for roof');
	return false;
}

let buildDoors = function(){
	console.log('Try to build doors');
	if(money >= prices.doors){
		money -= prices.doors;
		console.log('Doors buildt');
		return true;
	}else
		console.log('Eroor. No money for doors');
	return false;
}


let buildWindows = function(){
	console.log('Try to build windows');
	if(money >= prices.windows){
		money -= prices.windows;
		console.log('Windows buildt');
		return true;
	}else
		console.log('Eroor. No money for windows');
	return false;
}


if(buildFoundation()){
	if(buildWall()){
		if(buildRoof()){
			if(buildDoors()){
				if(buildWindows()){

				}else{
					console.log('Eroor. No moneys for windows');	
				}
			}else{
				console.log('Eroor. No moneys for doors');
			}
		}else{
			console.log('Eroor. No moneys for roof');
		}
	}else{
		console.log('Eroor. No moneys for wall');
	}
}else{
	console.log('Eroor. No moneys for foundation');
}




