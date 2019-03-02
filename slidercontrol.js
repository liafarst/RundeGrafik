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

})();
