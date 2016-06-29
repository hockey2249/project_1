var score = 0;
var score1 = 0;
var score2 = 0;
var click = 0;
var box1 = document.getElementById('box1');

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
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box1').style.pointerEvents = 'none';
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
	    		document.getElementById('box1').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
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
	    		winner();
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
	    		winner();
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
	    	winner();
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
	    		 winner();
	    });	
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
	    	winner();
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
	    		winner();
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
	    		winner();
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
	    	winner();
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
	    		 winner();
	    });	
console.log(click);
}
twohundred();

function threehundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

$("#box12").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box12').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 300;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 300;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 300;
				$('#score2').text(score2);
				click++;
			}
	 } else {
	    alert("That is not the correct answer!");
	    this.style.color = 'blue';
	    document.getElementById('box12').style.pointerEvents = 'none';
	    click++;
	    	}
	    	console.log(click);
	    	winner();
	    }
	    );

$("#box13").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box13').style.pointerEvents = 'none';
			if (click%3 === 0) {
				score += 300;
				$('#score').text(score);
				click++;
			} else if (click%3 === 1) {
				score1 += 300;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 300;
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
	    		winner();
	    });	
$("#box14").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box14').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 300;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 300;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 300;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box14').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
$("#box15").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box15').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 300;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 300;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 300;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box15').style.pointerEvents = 'none';
	    		click++;
	    	}
	    	console.log(click);
	    	winner();
	    });	
$("#box16").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box16').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 300;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 300;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 300;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box16').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		 console.log(click);
	    		 winner();
	    });	
console.log(click);
}
threehundred();


function fourhundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

$("#box17").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box17').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 400;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 400;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 400;
				$('#score2').text(score2);
				click++;
			}
	 } else {
	    alert("That is not the correct answer!");
	    this.style.color = 'blue';
	    document.getElementById('box17').style.pointerEvents = 'none';
	    click++;
	    	}
	    	console.log(click);
	    	winner();
	    }
	    );

$("#box18").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box18').style.pointerEvents = 'none';
			if (click%3 === 0) {
				score += 400;
				$('#score').text(score);
				click++;
			} else if (click%3 === 1) {
				score1 += 400;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 400;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box18').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
$("#box19").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box19').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 400;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 400;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 400;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box19').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
$("#box20").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box20').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 400;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 400;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 400;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box20').style.pointerEvents = 'none';
	    		click++;
	    	}
	    	console.log(click);
	    	winner();
	    });	
$("#box21").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box21').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 400;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 400;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 400;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box21').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		 console.log(click);
	    		 winner();
	    });	
console.log(click);
}
fourhundred();

function fivehundred(){

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");

$("#box22").click(function() {
	if (prompt(question1.question).toUpperCase() === question1.answer){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box22').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 500;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 500;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 500;
				$('#score2').text(score2);
				click++;
			}
	 } else {
	    alert("That is not the correct answer!");
	    this.style.color = 'blue';
	    document.getElementById('box22').style.pointerEvents = 'none';
	    click++;
	    	}
	    	console.log(click);
	    	winner();
	    }
	    );

$("#box23").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box23').style.pointerEvents = 'none';
			if (click%3 === 0) {
				score += 500;
				$('#score').text(score);
				click++;
			} else if (click%3 === 1) {
				score1 += 500;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 500;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box23').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
$("#box24").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box24').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 500;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 500;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 500;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box24').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		console.log(click);
	    		winner();
	    });	
$("#box25").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box25').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 500;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 500;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 500;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box25').style.pointerEvents = 'none';
	    		click++;
	    	}
	    	console.log(click);
	    	winner();
	    });	
$("#box26").click(function() {
	if (prompt(question2.question).toUpperCase() === question2.answer) {
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box26').style.pointerEvents = 'none';
			if (click%3 == 0) {
				score += 500;
				$('#score').text(score);
				click++;
			} else if (click%3 == 1) {
				score1 += 500;
				$('#score1').text(score1);
				click++;
			} else {
				score2 += 500;
				$('#score2').text(score2);
				click++;
			}
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box26').style.pointerEvents = 'none';
	    		click++;
	    	}
	    		 console.log(click);
	    		 winner();
	    });	
console.log(click);
}
fivehundred();

function winner() {
	if (click === 25){
		if(score > score1 && score > score2){
			alert("Hilary Wins with a final score of " + score);
		}
	}else if (click === 1){

	} else if( score1 > score){
		// trump();
		// console.log("Trump Wins");
	}  else{
		// alert("Kyle Gibbons you won with " + score2);

	}
}
winner();
	