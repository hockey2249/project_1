window.onload = getandcheckanswer();

function init(){
	document.getElementById("playAgain").addEventListener("click", activate);
    function activate(){
    	$(".box").removeAttr('style');
    	$('score').val('');
    	click = 0;
    	document.location.reload(true);
    }
}

var score = 0;
var score1 = 0;
var score2 = 0;
var click = 0;

(function blink() { 
  $('.blink_me').fadeOut(6000).fadeIn(2200, blink); 
})();

function Question(question, answer) {
    this.question = question;
    this.answer = answer;
}

function getandcheckanswer(questionObject, boxId, addedPoints){
	return function(evt){
	if (prompt(questionObject.question).toUpperCase() === questionObject.answer) {
	    	alert("Correct!");
			evt.target.style.color = 'blue';
			document.getElementById(boxId).style.pointerEvents = 'none';
			if(click%3 === 0) {
				score += addedPoints;
				$('#score').text(score);
				click++;
			}else if (click%3 === 1) {
				score1 += addedPoints;
				$('#score1').text(score1);
				click++;
			}else {
				score2 += addedPoints;
				$('#score2').text(score2);
				click++;
			}
	}else{
	    		alert("That is not the correct answer!");
	    		evt.target.style.color = 'blue';
	    		document.getElementById(boxId).style.pointerEvents = 'none';
	    		click++;
	      }
	    		console.log(click);
	    		winner();
	};
}

var question1 = new Question("What is Kyle's name?", "KYLE");
var question2 = new Question("Who is the smartest person in the room?", "JOE");
var question3 = new Question("What is Kyle's name?", "KYLE");
var question4 = new Question("Who is the smartest person in the room?", "JOE");
var question5 = new Question("Who is the smartest person in the room?", "JOE");
var question6 = new Question("What is Kyle's name?", "KYLE");
var question7 = new Question("Who is the smartest person in the room?", "JOE");
var question8 = new Question("What is Kyle's name?", "KYLE");
var question9 = new Question("Who is the smartest person in the room?", "JOE");
var question10 = new Question("Who is the smartest person in the room?", "JOE");
var question11 = new Question("What is Kyle's name?", "KYLE");
var question12 = new Question("Who is the smartest person in the room?", "JOE");
var question13 = new Question("What is Kyle's name?", "KYLE");
var question14 = new Question("Who is the smartest person in the room?", "JOE");
var question15 = new Question("Who is the smartest person in the room?", "JOE");
var question16 = new Question("What is Kyle's name?", "KYLE");
var question17 = new Question("Who is the smartest person in the room?", "JOE");
var question18 = new Question("What is Kyle's name?", "KYLE");
var question19 = new Question("Who is the smartest person in the room?", "JOE");
var question20 = new Question("Who is the smartest person in the room?", "JOE");
var question21 = new Question("What is Kyle's name?", "KYLE");
var question22 = new Question("Who is the smartest person in the room?", "JOE");
var question23 = new Question("What is Kyle's name?", "KYLE");
var question24 = new Question("Who is the smartest person in the room?", "JOE");
var question25 = new Question("Who is the smartest person in the room?", "JOE");

document.querySelector('#box1').addEventListener("click", getandcheckanswer(question1, 'box1', 100));
document.querySelector('#box2').addEventListener("click", getandcheckanswer(question2, 'box2', 100));
document.querySelector('#box3').addEventListener("click", getandcheckanswer(question3, 'box3', 100));
document.querySelector('#box4').addEventListener("click", getandcheckanswer(question4, 'box4', 100));
document.querySelector('#box5').addEventListener("click", getandcheckanswer(question5, 'box5', 100));

document.querySelector('#box6').addEventListener("click", getandcheckanswer(question6, 'box6', 200));
document.querySelector('#box7').addEventListener("click", getandcheckanswer(question7, 'box7', 200));
document.querySelector('#box8').addEventListener("click", getandcheckanswer(question8, 'box8', 200));
document.querySelector('#box9').addEventListener("click", getandcheckanswer(question9, 'box9', 200));
document.querySelector('#box10').addEventListener("click", getandcheckanswer(question10, 'box10', 200));

document.querySelector('#box11').addEventListener("click", getandcheckanswer(question1, 'box11', 300));
document.querySelector('#box12').addEventListener("click", getandcheckanswer(question1, 'box12', 300));
document.querySelector('#box13').addEventListener("click", getandcheckanswer(question1, 'box13', 300));
document.querySelector('#box14').addEventListener("click", getandcheckanswer(question1, 'box14', 300));
document.querySelector('#box15').addEventListener("click", getandcheckanswer(question1, 'box15', 300));

document.querySelector('#box16').addEventListener("click", getandcheckanswer(question1, 'box16', 400));
document.querySelector('#box17').addEventListener("click", getandcheckanswer(question1, 'box17', 400));
document.querySelector('#box18').addEventListener("click", getandcheckanswer(question1, 'box18', 400));
document.querySelector('#box19').addEventListener("click", getandcheckanswer(question1, 'box19', 400));
document.querySelector('#box20').addEventListener("click", getandcheckanswer(question1, 'box20', 400));

document.querySelector('#box21').addEventListener("click", getandcheckanswer(question1, 'box21', 500));
document.querySelector('#box22').addEventListener("click", getandcheckanswer(question1, 'box22', 500));
document.querySelector('#box23').addEventListener("click", getandcheckanswer(question1, 'box23', 500));
document.querySelector('#box24').addEventListener("click", getandcheckanswer(question1, 'box24', 500));
document.querySelector('#box25').addEventListener("click", getandcheckanswer(question1, 'box25', 500));

function winner() {
	if (click === 25){
		if(score > score1 && score > score2){
			alert("Hilary wins with a final score of " + score + "!");
		}else if(score1 > score && score1 > score2){
			alert("Donald wins with a final score of " + score1 + "!");
	}else if(score2 > score && score2 > score1){
		alert("Kyle wns with a final score of " + score2 + "!");
	}else{
		console.log("Tie");
	}
}
}
winner();



