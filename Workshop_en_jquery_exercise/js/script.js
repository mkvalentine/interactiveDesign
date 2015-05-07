/*

Instructions:

---- PART 1 ----
Start by removing the Yale crest (#yaleCrest).

Instead lets add a blue gradient to the whole page by applying the "gradient" class to the body.

Let's also show the traffic light (#status).

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "T-R-A-F-F-I-C L-I-G-H-T" button:

When the user clicks the "T-R-A-F-F-I-C L-I-G-H-T" button (#button), change the text of traffic light (#status) to read "GO". 
Let's also change the background color of the traffic light (#status) to green.

The light needs to turn on and off, so when the user clicks the bottom again, revert all of the above. 
So the traffic light should read "STOP" and it's background color should be red.

Let's add a image too. Show the user an animated image when it's safe to cross. So when the traffic light is green, reveal our animated baby (#baby).
The baby should fade out slowly when the button is toggled to "STOP" and the traffic light should go back to red.

---- PART 3 Advanced (optional) ----
If you're comfortable with all this lets try one more thing...
Let's make the traffic light turn on and off on it's own in 5 second intervals. 

Hint: You'll need to create a variable that stores the status of the light. 
And you'll also need to google the javascript function "setInterval".

Every 10 seconds check the status of the light and turn it either on or off along with all the effects.
Of course the button should also still work. 


*/


/////////////////////////////////////////////////////////////

$(document).ready(function(){
	// remove Yale crest
	$('#yaleCrest').hide();

	// blue gradient for body
	$('body').css('background-color', 'blue').addClass('gradient');

	// show status
	$('#status').show();

	// toggle gif
	$('#button').toggle(function(){
			$('#status').html("GO");
			$('#status').css('background-color', "green");
			$('#baby').show();
			status = "GO";
		},
		function() {
	        $('#status').html("STOP");
			$('#status').css('background-color', "red");
			$('#baby').fadeOut('slow');
			status = "STOP";
		});

	setInterval(function() {
      if (status == "STOP") {
      	$('#status').html("GO");
		$('#status').css('background-color', "green");
		$('#baby').show();
		status = "GO";
      }
      else {
      	$('#status').html("STOP");
		$('#status').css('background-color', "red");
		$('#baby').fadeOut('slow');
		status = "STOP";
      }
	}, 5000);


});