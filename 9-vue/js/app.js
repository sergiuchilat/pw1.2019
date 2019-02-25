new Vue({
	el: "#app",
	data: {
		message: 'Hello Vue!',
		var1: 123.45,
		inputValue: 'This is a input',
		showedDigit: 2,
		counter: 1,
		x: 0, 
		y: 0,
		sum: 0,
		students: [
			{
				name: 'Ion Creanga',
				age: 182
			},
			{
				name: 'Mihai Eminescu',
				age: 181
			}
		]
	},
	methods:{
		sumXY(){
			this.sum = Number(this.x) + Number(this.y);
		}
	}
});

new Vue({
	el: "#app2",
	data: {
		v2_2: 5
	}
});