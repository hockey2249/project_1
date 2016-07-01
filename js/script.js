window.onload = init;

var audio = new Audio('Jeopardy-theme-song.mp3');
audio.play();

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

function Question(question, answer) {
    this.question = question;
    this.answer = answer;
}

function getandcheckanswer(questionObject, boxId, addedPoints){
	return function(evt){
	if (prompt(questionObject.question).toUpperCase() === questionObject.answer) {
	    	var audio = new Audio('correct.m4a');
			audio.play();
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
	    		evt.target.style.color = 'blue';
	    		document.getElementById(boxId).style.pointerEvents = 'none';
	    		click++;
	    		var audio = new Audio("billy.m4a");
				audio.play();
	      }
	    		console.log(click);
	    		winner();
	};
}

var question1 = new Question('True or False: the terms "scope" and "context" refer to the same thing in JavaScript?', "FALSE");
var question2 = new Question("What does DOM stand for?", "DOCUMENT OBJECT MODEL");
var question3 = new Question("True or False: jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML", "TRUE");
var question4 = new Question("When was javaScript released?", "1995");
var question5 = new Question("True or False: A JavaScript function is a block of code designed to perform a particular task", "TRUE");

var question6 = new Question("If you omit the var keyword when creating a variable in a function, it becomes a property of what object?", "THE WINDOW OBJECT");
var question7 = new Question("True or False: Is getElementById a way of manipulating the DOM?", "TRUE");
var question8 = new Question("True or False: jQuery is a paid, open-source software licensed under the MIT License", "FALSE");
var question9 = new Question("How many days did it originally develop javaScript?", "10");
var question10 = new Question("What is a function nested inside another function?", "NESTED");

var question11 = new Question("How do you determine if a JavaScript instance object was created from a specific constructor or not?", "INSTANCEOF");
var question12 = new Question("**** DAILY DOUBLE **** Who handeled the principal standardization of DOM ?", "W3C");
var question13 = new Question("True or False: jQuery, at its core, is a DOM (Document Object Model) manipulation library.", "TRUE");
var question14 = new Question("What did javaScript used to be called?", "MOCHA");
var question15 = new Question("What is the index of Kyle in this array, var arr = [Joe', 'Tom', 'Kyle']", "ARR[2]");

var question16 = new Question("True or False: Once you create an object, you can add, remove or change properties of that object at any time.", "TRUE");
var question17 = new Question("What year was the first DOM published?", "1998");
var question18 = new Question("What is the factory method for the jQuery object?", "$");
var question19 = new Question("True or False: JavaScript and Java are closely related?", "FALSE");
var question20 = new Question("True or False: Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.", "TRUE");

var question21 = new Question("True or False: Two ways two change the context of a JavaScript method are pull and apply", "False");
var question22 = new Question("How many levels of DOM are there?", "FOUR");
var question23 = new Question("What year was jQuery released?", "2006");
var question24 = new Question("True or False: JSFuck is a valid code of javaScript", "TRUE");
var question25 = new Question("What is the first index of a javaScript array?", "0");

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

document.querySelector('#box11').addEventListener("click", getandcheckanswer(question11, 'box11', 300));
document.querySelector('#box12').addEventListener("click", getandcheckanswer(question12, 'box12', 1000));
document.querySelector('#box13').addEventListener("click", getandcheckanswer(question13, 'box13', 300));
document.querySelector('#box14').addEventListener("click", getandcheckanswer(question14, 'box14', 300));
document.querySelector('#box15').addEventListener("click", getandcheckanswer(question15, 'box15', 300));

document.querySelector('#box16').addEventListener("click", getandcheckanswer(question16, 'box16', 400));
document.querySelector('#box17').addEventListener("click", getandcheckanswer(question17, 'box17', 400));
document.querySelector('#box18').addEventListener("click", getandcheckanswer(question18, 'box18', 400));
document.querySelector('#box19').addEventListener("click", getandcheckanswer(question19, 'box19', 400));
document.querySelector('#box20').addEventListener("click", getandcheckanswer(question20, 'box20', 400));

document.querySelector('#box21').addEventListener("click", getandcheckanswer(question21, 'box21', 500));
document.querySelector('#box22').addEventListener("click", getandcheckanswer(question22, 'box22', 500));
document.querySelector('#box23').addEventListener("click", getandcheckanswer(question23, 'box23', 500));
document.querySelector('#box24').addEventListener("click", getandcheckanswer(question24, 'box24', 500));
document.querySelector('#box25').addEventListener("click", getandcheckanswer(question25, 'box25', 500));

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



