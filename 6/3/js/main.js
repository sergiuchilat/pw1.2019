window.onload = function(){
	fetch('data/products.json').
		then(response => {
	  		return response.json();
		}).
		then(data => {
	  		createProductsSelect(data);
		}).
		catch(err => {
  		});
}

function createProductsSelect(products){
	let selectObject = document.createElement('select');
	for (var i = 0; i < products.length; i++) {
		let option = document.createElement('option');
		option.innerText = products[i].name;
		option.value = products[i].price;
		selectObject.appendChild(option);
	}
	document.body.appendChild(selectObject);
}