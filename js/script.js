 var player1 = 0;
 var player2 = 0; 
 var player3 = 0;


 var $answer1 = $("#box1").click(function() {
  	if (prompt("What is Question #1?") === "Kyle"){
	    	alert("Correct");
			document.getElementById("box1").background = "violet";
	    	} else {
	    		alert("NOOOOO");
	    	}});
 var $answer2 = $("#box2").click(function() {
  	if (prompt("What is Question #2?") === "Kyle"){
	    		alert("Correct");
	    	} else {
	    		alert("NOOOOO");
	    	}});
var $answer3 = $("#box3").click(function() {
 	if (prompt("What is Question #3?") === "Kyle"){
	    		alert("Correct");
	    	} else {
	    		alert("NOOOOO");
	    	}});