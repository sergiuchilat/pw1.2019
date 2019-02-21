window.onload = function(){
	let game = new Game();
	game.drawTable();
	game.putFigures();
}

let gameSettings = {
	cellSize: 60,
	figuresPositions:{
		black:{
			rock: {
				left: 120,
				top: 0
			},
			pawn: {
				left: 300,
				top: 0
			}
		}
	},
	figures: [
		{
			color: "white",
			type: 'rock',
			pos: {
				row: 1,
				col: 1
			}
		},
		{
			color: "pawn",
			type: "pawn",
			pos: {
				row: 2,
				col: 1
			}
		}
	]
};


class Game{
	drawTable(){
		let table = new Table();
		table.draw();
	}

	putFigures(){
		let figure = new Figure();
		figure.putAll();
	}
}

class Table{
	draw(){
		let table = document.getElementById('table');
		let isWhite = true;
		for (let i = 1; i <= 8; i++) {
			if(i % 2 !== 0){
				isWhite = true;
			}else{
				isWhite = false;
			}
			for (let j = 1; j <= 8; j++) {
				isWhite = this.drawCell(table, i, j, isWhite);
			}
		}
	}

	drawCell(table, i, j, isWhite){
		let cell = document.createElement('div');
		cell.innerHTML = i + ':' + j;
		cell.classList.add('cell');
		if(isWhite){
			cell.classList.add('white-cell');
		}else{
			cell.classList.add('black-cell');
		}
		cell.style.top = ((i - 1) * gameSettings.cellSize) + 'px';
		cell.style.left = ((j - 1) * gameSettings.cellSize) + 'px';
		table.appendChild(cell);
		return !isWhite;
	}
}

class Figure{
	putAll(){
		let table = document.getElementById('table');


		for(let i = 0; i < gameSettings.figures.length; i++){
			this.draw(gameSettings.figures[i]);
		}
	}

	draw(figure){
		let figureObject = document.createElement('div');
		figureObject.classList.add('figure');
		figureObject.style.top = ((figure.pos.row - 1) * gameSettings.cellSize + 3) + 'px';
		figureObject.style.left = ((figure.pos.col - 1) * gameSettings.cellSize + 3) + 'px';
		figureObject.style.backgroundPosition = (gameSettings.figuresPositions.black.pawn.left) + "px " + (gameSettings.figuresPositions.black.pawn.top) + "px";
		table.appendChild(figureObject);
	}
}