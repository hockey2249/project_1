var score = 0;
var score1 = 0;
var score2 = 0;
var click = 0;


function Question(question, answer) {
    this.question = question;
    this.answer = answer;
}

function scorehundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

$("#box1").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box1').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 100;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 100;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 100;
				$('#score2').text(score2);
				click++;
			}
	 } else {
	    alert("That is not the correct answer!");
	    this.style.color = 'blue';
	    document.getElementById('box1').style.pointerEvents = 'none';
	    click++;
	    	}
	    	console.log(click);
	    }
	    );

$("#box2").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box2').style.pointerEvents = 'none';
			if (click%3 === 0) {
				score += 100;
				$('#score').text(score);
				click++;
			} else if (click%3 === 1) {
				score1 += 100;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 100;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box2').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    });	
$("#box3").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box3').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 100;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 100;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 100;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box3').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    });	
$("#box4").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box4').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 100;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 100;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 100;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box4').style.pointerEvents = 'none';
	    		click++;
	    	}
	    	console.log(click);
	    });	
$("#box5").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box5').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 100;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 100;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 100;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box5').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		 console.log(click);
	    });	
console.log(click);
}
scorehundred();

function twohundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

$("#box7").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box7').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 200;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 200;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 200;
				$('#score2').text(score2);
				click++;
			}
	 } else {
	    alert("That is not the correct answer!");
	    this.style.color = 'blue';
	    document.getElementById('box7').style.pointerEvents = 'none';
	    click++;
	    	}
	    	console.log(click);
	    }
	    );

$("#box8").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box8').style.pointerEvents = 'none';
			if (click%3 === 0) {
				score += 200;
				$('#score').text(score);
				click++;
			} else if (click%3 === 1) {
				score1 += 200;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 200;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box8').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    });	
$("#box9").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box9').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 200;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 200;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 200;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box9').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    });	
$("#box10").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box10').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 200;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 200;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 200;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box10').style.pointerEvents = 'none';
	    		click++;
	    	}
	    	console.log(click);
	    });	
$("#box11").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box11').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 200;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 200;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 200;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box11').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		 console.log(click);
	    });	
console.log(click);
}
twohundred();