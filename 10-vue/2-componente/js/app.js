new Vue({
	el: '#app'	,
	data: {
		showedFullBiography: false,
		persons : [
			{
				name: 'Mihai Eminescu',
				shortBiography: 'Mihai Eminescu (născut Mihail Eminovici; n. 15 ...',
				biography: 'Mihai Eminescu (născut Mihail Eminovici; n. 15 ianuarie 1850,[1][2][3][4][5][6][7] Botoșani, Moldova – d. 15/27 iunie 1889,[1] București, România) a fost un poet, prozator și jurnalist român, socotit de cititorii români și de critica literară postumă drept cea mai importantă voce poetică din literatura română.'
			},
			{
				name: 'Ion Creanga',
				shortBiography: 'Ion Creanga (născut Mihail Eminovici; n. 15 ...',
				biography: 'Ion Creanga (născut Mihail Eminovici; n. 15 ianuarie 1850,[1][2][3][4][5][6][7] Botoșani, Moldova – d. 15/27 iunie 1889,[1] București, România) a fost un poet, prozator și jurnalist român, socotit de cititorii români și de critica literară postumă drept cea mai importantă voce poetică din literatura română.'
			}
		]
	},
	methods: {
		showHideFullBiography(){
			this.showedFullBiography = !this.showedFullBiography;
		}
	}
});


new Vue({
	'el': '#app2'
});

Vue.component('app2-button', {
	data: function(){
		return {
			label: 'i am a Button Component'
		}
	},
	'template': '<span><button class="btn btn-primary">{{label}}</button></span>'
});