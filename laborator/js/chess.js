window.onload = function () {
	addLine();
}

function addLine(){
	for (let i = 1; i<= 8; i++) {
		let newPosition = document.createElement('div');
		if(i % 2 !== 0){
			newPosition.classList.add('black-position');
		}else{
			newPosition.classList.add('white-position');
		}
		newPosition.classList.add('position');
		document.getElementById('table').appendChild(newPosition);
	}	
}