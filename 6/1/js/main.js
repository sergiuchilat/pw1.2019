window.onload = function(){
	let personJSONString = '{"name": "Ion Creanga", "age": 20}';
	let person = JSON.parse(personJSONString);
	console.log(person.name);

	let productsJSONString = '[{"name": "Bomboane din ciocolata", "price": 23.56}, {"name": "Bomboane din zahar", "price": 15.01}]';
	let products = JSON.parse(productsJSONString);
	for (var i = 0; i < products.length; i++) {
		console.log(products[i].name);
	}


	let selectObject = document.createElement('select');
	for (var i = 0; i < products.length; i++) {
		let option = document.createElement('option');
		option.innerText = products[i].name;
		option.value = products[i].price;
		selectObject.appendChild(option);
	}

	document.body.appendChild(selectObject);

}