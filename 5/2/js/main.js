window.onload = function(){
	let service = new ServiceAuto();
	service.initCalculator();


	document.getElementById('showDetailedPriceButton').onclick = function(){
		service.showPriceDetails();
	};
}
