// need to declare the `circleScale` var up top
var circleScale;
var circleScale2;
var circleScale3;
var circleScale4;
var circleScale5;
var maxScale = 1600;
var maxScale2 = 600;
var maxScale3 = 400;
var move = 0;
var spongebob;
var backgroundLines;
var audio = new Audio('spongebob.mp3');


/**
 * Setup the sketch

 */

function setup() {
	createCanvas(windowWidth, windowHeight);


//playing the audio file
audio.play();

	// set our scale to 1 for starters
	circleScale = 1;
	circleScale2 = 1;
	circleScale3 = 1;
	circleScale4 = 1;


}

/**
 * Main animation loop
 */

function draw() {
	// set background to black
	background(0);

// background lines color
	stroke(127, 125, 125);
	strokeWeight(1);
	point(width/2, height/2);


// background lines rotation
	var angle = 360/12;
	push();
	//changing angle to degrees instead of radians
	angleMode(DEGREES);
	//translating the canvas from 0,0 (far left) to center
	translate(width/2, height/2);
	//rotates the entire set of lines
	rotate(move);
	for(var i = 0; i<12; i++) {
		rotate(angle);
		line(0,0,width,0);
	}

	// line(0, 0, 2000, 1000);
	// line(0, 630, 19000, -8500);
	// line(640, 0, 640, 1000);
	// line(0, 320, 1500, 320);
	// line(400, 0, 1150, 1000);
	// line(0, 1000, 8950, -8500);
	pop();

	move = move + 1;




	// try commenting out these different functions
	// to see two different approaches

//circles
	stroke(88, 179, 183);
	strokeWeight(2);
	noFill();

	drawCircleUsingRadius();


	// every frame we are increasing the scale by 0.5
		circleScale = circleScale + 15.5;
		circleScale2 = circleScale2 + 12.5;
		circleScale3 = circleScale3 + 8.5;
		circleScale4 = circleScale4 + 4.5;

	// helpful to output to the console so we can see what's happening
	console.log('circleScale: '+circleScale);


	// you had:
	// if(circleScale > 600){
	// what you really want to do here is reset the
	// circle scale once it's greater thn a certain value

if(circleScale > maxScale){
	circleScale = 1;
}
if(circleScale2 > maxScale){
	circleScale2 = 1;
}
if(circleScale3 > maxScale){
	circleScale3 = 1;
}
if(circleScale4 > maxScale){
	circleScale4 = 1;
}

}



/**
 * This function draws an ellipse using `circleScale` as
 * its radius
 */
function drawCircleUsingRadius() {
	// draw the ellipse in the middle of the screen
	ellipse(width/2, height/2, circleScale, circleScale);
	ellipse(width/2, height/2, circleScale2, circleScale2);
	ellipse(width/2, height/2, circleScale3, circleScale3);
	ellipse(width/2, height/2, circleScale4, circleScale4);
}
