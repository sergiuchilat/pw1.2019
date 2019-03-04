new Vue({
	el: '#app',
	data: {
		x: 0,
		y: 0,
		messageHello: 'Hello world!',
		messageGoodBye: 'goOd bye'
	},
	computed: {
		sum(){
			return parseFloat(this.x) + parseFloat(this.y);
		}
	},
	filters: {
		firstLetterBold(value){
			value = value.toString();
			//return value.replace(/\b\w/g, function(l){ return '<strong>' + l.toUpperCase()  + '</strong>'});
			return value.replace(/\b\w/g, function(l){ return '[' + l.toUpperCase()  + ']'});
			return value;
		}
	}
});