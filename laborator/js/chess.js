window.onload = function () {
	drawTable();
}

function drawTable(){
	for (let line = 1; line <= 8; line++) {
		addLine(line);
	}
}

function addLine(line){
	let whiteColor = true;
	if(line % 2 === 0){
		whiteColor = false;
	}
	for (let i = 1; i <= 8; i++) {
		let newPosition = document.createElement('div');
		if(whiteColor){
			newPosition.classList.add('white-position');
		}else{
			newPosition.classList.add('black-position');
		}
		newPosition.classList.add('position');
		document.getElementById('table').appendChild(newPosition);
		whiteColor = !whiteColor;
	}	
}