class PC{
	constructor(params){
		this.type = null;
		this.motherboard = params.motherboard;
		this.cpu = params.cpu;
		this.ram = params.ram;
		this.gpu = params.gpu;
		this.os = params.os
		this.display = params.display;
	}

	run(){
		console.log(this.type + ' started.');
		this.loadBIOS();
		
		if(this.checkHardwareForRun()){
			console.log('Hardware test OK');
			/*console.log('Motherboard: ' + this.motherboard);
			console.log('CPU: ' + this.cpu);
			console.log('RAM: ' + this.ram);
			console.log('GPU: ' + this.gpu);*/
		}else{
			console.log('Error. Hardware test failed')
			return false;
		}
		this.startOS();
		return true;
	}

	loadBIOS(){
		console.log('BIOS loaded');
	}

	checkHardwareForRun(){
		if(this.cpu !== null && this.cpu !== undefined && this.cpu !== '')
			return true;
		return false;
	}

	startOS(){
		console.log('OS ' + this.os + ' loaded');
	}

	startGame(){
		if(this.checkHardwareForGame())
			console.log('Game started');
		else
			console.log('Error. Game can not be started. Not enough RAM');
	}

	checkHardwareForGame(){
		if(this.ram.ddr >= 4 && this.ram.capacity >= 32)
			return true;
		return false;
	}
}

class Laptop extends PC{
	constructor(params){
		/*http://jsraccoon.ru/es6-classes*/
		super(params);
		this.type = 'Laptop';
	}

	checkHardwareForRun(){
		if(super.checkHardwareForRun() && this.hasDisplay()){
			return true;
		}
		return false;

	}

	hasDisplay(){
		return this.display !== null && this.display !== '' && this.display  !== undefined;
	}
}

class DesktopPC extends PC{
	constructor(params){
		super(params);
		this.type = 'DesktopPC';		
	}
}

let laptop = new Laptop({
	'motherboard': 'Gigabyte', 
	'cpu': 'Intel Core i7', 
	'ram': {
		'brand': 'Kingston',
		'ddr': 4,
		'frequency': 3000,	
		'capacity': 64
	}, 
	'gpu': 'GeForce 1080',
	'os': 'iOS',
	'display': null
});
let desktopPC = new DesktopPC({
	'motherboard': 'ASUS', 
	'cpu': 'AMD Ryzen', 
	'ram': {
		'brand': 'Hynix',
		'ddr': 4,
		'frequency': 1600,
		'capacity': 33
	},
	'gpu': 'ADD Radeon VII7',
	'os':' Android'
});


if(laptop.run())
	laptop.startGame();

console.log('===================================');

if(desktopPC.run())
	desktopPC.startGame();


/*class PC{
	constructor(params){
		this.motherboard = params.motherboard;
		this.cpu = params.cpu;
		this.ram = params.ram;
		this.gpu = params.gpu;
	}

	run(){
		if(this.cpu !== null && this.cpu !== undefined && this.cpu !== ''){
			console.log('PC started');
			console.log('Motherboard: ' + this.motherboard);
			console.log('CPU: ' + this.cpu);
			console.log('RAM: ' + this.ram);
			console.log('GPU: ' + this.gpu);
		}else{
			console.log('Error. CPU not decected');
		}
	}

	shutdown(){

	}
}

let pc1 = new PC({
	'motherboard': 'Gigabyte', 
	'cpu': 'Intel Core i7', 
	'ram': 'DDR4 8GB', 
	'gpu': 'GeForce 1080'
});

pc1.run();
let pc2 = new PC({
	'motherboard': 'ASUS', 
	'cpu': 'AMD Ryzen', 
	'ram': 'DDR4 4GB'
});
pc2.run();
*/
/*class PC{
	constructor(motherboard, cpu, ram, gpu){
		this.motherboard = motherboard;
		this.cpu = cpu;
		this.ram = ram;
		this.gpu = gpu;
	}

	run(){
		if(this.cpu !== null){
			console.log('PC started');
			console.log('Motherboard: ' + this.motherboard);
			console.log('CPU: ' + this.cpu);
			console.log('RAM: ' + this.ram);
			console.log('GPU: ' + this.gpu);
		}
	}

	shutdown(){

	}
}

let pc1 = new PC('Gigabyte', 'Intel Core i7', 'DDR4 8GB', 'GeForce 1080');
pc1.run();
let pc2 = new PC('ASUS', 'Intel Core i3', 'DDR4 4GB');
pc2.run();*/

