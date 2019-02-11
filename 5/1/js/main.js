window.onload = function(){
	initCalculator();
}

function initCalculator(){
	let basicServicesSelect = document.getElementById('basicServices');
	let extraServicesSelect = document.getElementById('extraServices');

	basicServicesSelect.onchange = function(){
		calculatePrice(basicServicesSelect, extraServicesSelect);
	}

	extraServicesSelect.onchange = function(){
		calculatePrice(basicServicesSelect, extraServicesSelect);
	}
}


function calculatePrice(basicServicesSelect, extraServicesSelect){
	if(isNaN(basicServicesSelect.value)){
		basicServicesSelect.value = 0;
	}
	if(isNaN(extraServicesSelect.value)){
		extraServicesSelect.value = 0;
	}

	document.getElementById('totalPrice').innerHTML = 
		Number(basicServicesSelect.value) 
		+ 
		Number(extraServicesSelect.value)
		;
}

/*document.addEventListener('DOMContentLoaded', function(){
	alert(0);
});
*/