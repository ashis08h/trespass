var url_string = window.location.href
	var url = new URL(url_string);
	var correctnum = url.searchParams.get("correctnum");
	var starttime = url.searchParams.get("starttime");
	var endtime = url.searchParams.get("endtime");
	document.getElementById('correctid').innerHTML=correctnum;
	if(correctnum>=6){
		document.getElementById('passorfail').innerHTML="Cogratulations ! You Passed.";
	}
	else{
		document.getElementById('passorfail').innerHTML="Sorry ! you are not Passed.";
	}
	var totaltimeinmillisec = endtime-starttime
	function msToTime(duration) {
	  	var milliseconds = parseInt((duration % 1000) / 100),
	    seconds = Math.floor((duration / 1000) % 60),
	    minutes = Math.floor((duration / (1000 * 60)) % 60),
	    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		return hours + ":" + minutes + ":" + seconds ;
	}
	document.getElementById('demo').innerHTML=msToTime(totaltimeinmillisec);