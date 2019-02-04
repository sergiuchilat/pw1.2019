class Animal{
	eat(){
		console.log('eat');
	}
}

class Fish extends Animal{
	eat(){
		console.log('eat under water');
	}

	move(){
		console.log('fish swim');
	}
}

class Snake extends Animal{
	move(){
		console.log('snake crawl');
	}
}

class Bird extends Animal{
	move(){
		console.log('bird fly');
	}
}

let fish  = new Fish();
fish.eat();
fish.move();

let snake = new Snake();
snake.eat();
snake.move();

let bird = new Bird();
bird.eat();
bird.move();

