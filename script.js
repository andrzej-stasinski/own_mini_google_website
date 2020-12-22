	var myScreen = document.getElementById('myScreen');
	var myPics = ['up1.jpg','up2.jpg','up3.jpg'];
	var totalPics = myPics.length;
	var i = 0;
	function loop() {
		if(i > (totalPics - 1)){
			i = 0;
		}
		myScreen.innerHTML = '<img src="'+myPics[i]+'">';
		i++;
		loopTimer = setTimeout('loop()',2000);
	}
	loop();