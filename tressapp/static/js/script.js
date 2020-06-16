var starttime = new Date().getTime();
window.onload = sendApiRequest
async function sendApiRequest(){
	let response = await fetch ('https://opentdb.com/api.php?amount=1&type=multiple');
	console.log(response)
	let data = await response.json()
	console.log(data)
	userData(data)
}
var num=1;
function userData(data){
	document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
	document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
	document.querySelector("#Question").innerHTML = num+") "+`Question: ${data.results[0].question}`
	document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
	document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
	document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
	document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
}
var count = 0;
var correct = 0;
let correctAns = document.getElementById('answer1')
let incorrectAns2 = document.getElementById('answer2')
let incorrectAns3 = document.getElementById('answer3')
let incorrectAns4 = document.getElementById('answer4')
var correctoption = document.getElementById('answer1');
correctAns.addEventListener("click", function(){
	count=count+1;
	num=num+1;
	correct=correct+1;
	if (count<10){
		alert("Congratulations your Answer is Correct");
		sendApiRequest();
	}
	else{
		alert("Congratulations your Answer is Correct \n and this was your Last Question");
		var endtime = new Date().getTime();
		window.location.href = "/report/?correctnum="+correct+"&starttime="+starttime+"&endtime="+endtime;

	}
});

incorrectAns2.addEventListener("click", function(){
	count=count+1;
	num=num+1;
	if (count<10){
		alert("Oops your Answer is Incorrect \n Correct Answer is " + correctoption.innerHTML);
		sendApiRequest();
	}
	else{
		alert("Oops your Answer is Incorrect \n Correct Answer is " + correctoption.innerHTML + "\n and this was your Last Question");
		var endtime = new Date().getTime();
		window.location.href = "/report/?correctnum="+correct+"&starttime="+starttime+"&endtime="+endtime;
	}
	
});
incorrectAns3.addEventListener("click", function(){
	count=count+1;
	num=num+1;
	if (count<10){
		alert("Oops your Answer is Incorrect \n Correct Answer is " + correctoption.innerHTML);
		sendApiRequest();
	}
	else{
		alert("Oops your Answer is Incorrect \n Correct Answer is " + correctoption.innerHTML + "\n and this was your Last Question");
		var endtime = new Date().getTime();
		window.location.href = "/report/?correctnum="+correct+"&starttime="+starttime+"&endtime="+endtime;
	}
	
});
incorrectAns4.addEventListener("click", function(){
	count=count+1;
	num=num+1;
	if (count<10){
		alert("Oops your Answer is Incorrect \n Correct Answer is " + correctoption.innerHTML);
		sendApiRequest();
	}
	else{
		alert("Oops your Answer is Incorrect \n  Correct Answer is " + correctoption.innerHTML + "\n and this was your Last Question");
		var endtime = new Date().getTime();
		window.location.href = "/report/?correctnum="+correct+"&starttime="+starttime+"&endtime="+endtime;
	}
	
});


