class ServiceAuto{

	constructor(){
		this.basicServicesPrice = 0;
		this.extraServicesPrice = 0;
		this.totalPrice = 0;
	}

	initCalculator(){
		let basicServicesSelect = document.getElementById('basicServices');
		let extraServicesSelect = document.getElementById('extraServices');

		let objectServiceAuto = this;

		basicServicesSelect.onchange = function(){
			objectServiceAuto.calculatePrice(basicServicesSelect, extraServicesSelect);
		}

		extraServicesSelect.onchange = function(){
			objectServiceAuto.calculatePrice(basicServicesSelect, extraServicesSelect);
		}
	}


	calculatePrice(basicServicesSelect, extraServicesSelect){
		if(isNaN(basicServicesSelect.value)){
			basicServicesSelect.value = 0;
		}
		if(isNaN(extraServicesSelect.value)){
			extraServicesSelect.value = 0;
		}

		this.basicServicesPrice = Number(basicServicesSelect.value);
		this.extraServicesPrice = Number(extraServicesSelect.value);

		this.totalPrice = this.basicServicesPrice + this.extraServicesPrice;

		document.getElementById('totalPrice').innerHTML = this.totalPrice;
	}

	showPriceDetails(){
		let detailedPriceContainer = document.getElementById('detailedPrice');
		detailedPriceContainer.innerHTML = '';
		detailedPriceContainer.innerHTML = detailedPriceContainer.innerHTML + 'Basic services: ' + this.basicServicesPrice;
		detailedPriceContainer.innerHTML = detailedPriceContainer.innerHTML + 'Extra services: ' + this.extraServicesPrice;
		
	}
}