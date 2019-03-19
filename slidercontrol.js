(function() {
	draw();


	document.getElementById('period').addEventListener('change', function(){
		var time = this.value;
		switch(time){
			case "1":
			divisions = 6;
			break;
			case "6":
			divisions = 6;
			break;
			case "12":
			divisions = 6;
			break;
			case "24":
			divisions = 8;
			break;
			case "48":
			divisions = 8;
			break;
			case "168":
			divisions = 7;
			break;
			default:
			divisions = 6;
			break;
		}
		clearCtx();
		mode = time;
		draw();
	});

	document.getElementById('active').addEventListener('change', function (event) {
		if(event.target.checked){
			active = 1;
		} else {
			active = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('inactive').addEventListener('change', function (event) {
		if(event.target.checked){
			inactive = 1;
		} else {
			inactive = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Rotor').addEventListener('change', function (event) {
		if(event.target.checked){
			comp0 = 1;
		} else {
			comp0 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Transmission').addEventListener('change', function (event) {
		if(event.target.checked){
			comp1 = 1;
		} else {
			comp1 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Generator').addEventListener('change', function (event) {
		if(event.target.checked){
			comp2 = 1;
		} else {
			comp2 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Converter + Transformer').addEventListener('change', function (event) {
		if(event.target.checked){
			comp3 = 1;
		} else {
			comp3 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Tower').addEventListener('change', function (event) {
		if(event.target.checked){
			comp4 = 1;
		} else {
			comp4 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Nancelle').addEventListener('change', function (event) {
		if(event.target.checked){
			comp5 = 1;
		} else {
			comp5 = 0;
		}
		clearCtx();
		draw();
	});

	document.getElementById('Control System').addEventListener('change', function (event) {
		if(event.target.checked){
			comp6 = 1;
		} else {
			comp6 = 0;
		}
		clearCtx();
		draw();
	});

})();
