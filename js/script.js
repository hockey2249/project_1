var score = 0;
var score1 = 0;
var score2 = 0;

function Question(question, answer) {
    this.question = question;
    this.answer = answer;
    this.score = score;
}
function scorehundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

var box1 = $("#box1").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box1').style.pointerEvents = 'none';
			score += 100;
			$('#score').text(score);
	 } else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box1').style.pointerEvents = 'none';
	    	}});
$("#box2").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box2').style.pointerEvents = 'none';
			score1 += 100;
			$('#score1').text(score1);
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box2').style.pointerEvents = 'none';
	    	}});	
$("#box3").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box3').style.pointerEvents = 'none';
			score2 += 100;
			$('#score2').text(score2);
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box3').style.pointerEvents = 'none';
	    	}});	
$("#box4").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box4').style.pointerEvents = 'none';
			score += 100;
			$('#score').text(score);
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box4').style.pointerEvents = 'none';
	    	}});	
$("#box5").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box5').style.pointerEvents = 'none';
			score += 100;
			$('#score').text(score);
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box5').style.pointerEvents = 'none';
	    	}});	
}
scorehundred();

function scoretwohundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");

var $box7 = $("#box7").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box7').style.pointerEvents = 'none';
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box7').style.pointerEvents = 'none';
	    	}});

$("#box8").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			// changing background color to blue
			document.getElementById('box8').style.pointerEvents = 'none';
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box8').style.pointerEvents = 'none';
	    	}});	
}
scoretwohundred();
