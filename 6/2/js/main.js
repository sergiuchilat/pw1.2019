window.onload = function(){
	let ajaxRequest = new XMLHttpRequest();
	ajaxRequest.open('GET', 'data/products.json', true);
	ajaxRequest.send(null);

	ajaxRequest.onreadystatechange = function (){
		if(ajaxRequest.readyState === 4){
			createProductsSelect(ajaxRequest.responseText);
		}
	}
}

function createProductsSelect(productsJSONString){
	let products = JSON.parse(productsJSONString);
	let selectObject = document.createElement('select');
	for (var i = 0; i < products.length; i++) {
		let option = document.createElement('option');
		option.innerText = products[i].name;
		option.value = products[i].price;
		selectObject.appendChild(option);
	}
	document.body.appendChild(selectObject);
}