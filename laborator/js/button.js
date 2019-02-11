window.onload = function(){
	addButton(1);
}

function addButton(i){
	let newButton = document.createElement('button');
	newButton.innerHTML = i;
	newButton.onclick = function(){
		this.disabled = true;
		addButton(i + 1);
	}
	document.body.appendChild(newButton);
}