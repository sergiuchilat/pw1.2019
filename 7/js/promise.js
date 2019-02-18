/*let promise1 = new Promise(function(resolve, reject){
	resolve("eu nu dorm!")
	setTimeout(() => resolve("done!"), 1000);
	//setTimeout(() => reject(new Error("Whoops!")), 1000);
}).then(alert);*/

let money = 3000;
let prices = {
	'foundation': 1000,
	'wall': 2001,
	'roof': 500

}

let buildFoundation = function(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){

			console.log('Try to build foundation');

			if(money >= prices.foundation){
				money -= prices.foundation;
				resolve('Fundation buildt');
			}else
				reject('Eroor. No money for fundation');
			}, 3000);
		
	});
}

let buildWall = function(){
	return new Promise(function(resolve, reject){
		console.log('Try to build wall');
		if(money >= prices.wall){
			money -= prices.wall;
			resolve('Wall buildt');
		}else
			reject('Eroor. No money for wall');
	})
}


let buildRoof = function(){
	return new Promise(function(resolve, reject){
		console.log('Try to build roof');
		if(money >= prices.roof){
			money -= prices.roof;
			resolve('Roof buildt');
		}else
			reject('Eroor. No money for roof');
	})
}

let logError = function(message){
	document.write(message);
}

/*buildFoundation();
buildWall();*/

buildFoundation()
	.then(buildWall)
	.then(buildRoof)
	.catch(logError);



