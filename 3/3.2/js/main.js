/*console.log(document);

document.write('Hello');
document.write('world');
document.writeln("row");
document.writeln("row");
*/


/*document.onclick = function(){
	alert('Click');
}*/


/*window.onload = function(){
	console.log(document.getElementsByTagName('body')[0]);
	document.getElementsByTagName('body')[0].onmousemove = function(event){
		document.write('mousemove');
		console.log('mousemove')
	}
}*/

/*window.onload = function(){
	document.getElementById('container').onclick = function(){
		this.style = 'background:  green';
	}

	let paragraphs = document.querySelectorAll('p');
	for (let i= 0;  i < paragraphs.length;  i++) {
		paragraphs[i].onclick = function(){
			this.style.display = 'none';
		}
	};

	document.getElementById('addParagraph').onclick = function(){
		let newParagraph = document.createElement('p');
		newParagraph.style.background = 'yellow';
		newParagraph.innerHTML = 'new P';
		console.log(newParagraph);
		document.body.insertAfter(newParagraph, this); 
	}
}*/




window.onload = function(){
	let students = [
		{
			'id': 1,
			'name': 'Ion Creanga'
		},
		{
			'id': 2,
			'name': 'Mihai Eminescu'
		}		
	];


	let select = document.createElement('select');

	select.onchange = function(){
		document.getElementById('descriere' + select.value).style.display = 'block';
	}

	document.getElementsByTagName('body')[0].appendChild(select);

	for (var i = 0; i < students.length;  i++) {
		let newOption = document.createElement('option');
		newOption.innerHTML = students[i].name;
		newOption.value = students[i].id;
		select.appendChild(newOption);
	};

}