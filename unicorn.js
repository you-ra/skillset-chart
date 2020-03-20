//var p5 = require('p5');
//new p5();

const name = ['Yumi44','Bato','Akira'];
const size = [3,6,9,12,15,18,21,24];
var done = false;
var pos = 30;
//var gui;

function setup() {
	
 	createCanvas(400, 400);
	
	//gui = createGui('mygui');
	//gui.addGlobals('pos');
	noLoop();

	
}

function draw() {
	//if(!done){
		background(220);
		for (i = 0; i<name.length; i++){
			s = random(size);
			text(name[i], 50, 70*(i+1));
			ellipse(100+pos,70*(i+1)-4,s,s);
			//if (i<name.length) done = true;
		} 
	//}
}