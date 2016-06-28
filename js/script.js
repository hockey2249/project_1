function Question(question, answer) {
    this.question = question;
    this.answer = answer;
}



// var question1 = new Question_answer("What is Kyle's name?", "Kyle");


// for (var i = 0, l = questions.length; i < l; i++) {
//     answer = prompt(questions[i].question);
// }

// Create a constructor function Object and pass in different questions, question1 = New Question(prompt("ueowfnouwenf"))

// else if (true) {
	// add 100 or 500 points 
//}
// // Currently creating a function for each question. It's prompting a question and then alerting if it is correct or not 

function Game(){

var question1 = new Question("What is Kyle's name?", "Kyle");

var $answer1 = $("#box1").click(function() {
	if (prompt(this.question1.Question).toUpperCase() === "OBJECT"){
	    	alert("Correct!");
			this.style.color = 'blue';
			document.getElementById('box1').style.pointerEvents = 'none';
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box1').style.pointerEvents = 'none';
	    	}});
var $answer2 = $("#box2").click(function() {
	if (prompt("What does a function always have?").toUpperCase() === "NAME" || "STATEMENTS INSIDE THE FUNCTION" || "AN OPTIONAL LIST OF ARGUMENTS") {
	    	alert("Correct!");
			this.style.color = 'blue';
			// changing background color to blue
			document.getElementById('box2').style.pointerEvents = 'none';
	    	} else {
	    		alert("That is not the correct answer!");
	    		this.style.color = 'blue';
	    		document.getElementById('box2').style.pointerEvents = 'none';
	    	}});	
}

// Need to figure out a way to store each input answer