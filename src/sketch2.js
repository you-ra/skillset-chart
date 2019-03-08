var extfunc = require('./extfunc.js'); 
//var p5 = require('p5');


new p5(function(p){
	const name = ['Yumi44','Bato','Akira'];
	const skillset = ['Javascript','Node.js','Bootstrap'];
	const size = [3,6,9,12,15,18,21,24];
	var img;
	var pos = 30;
	//var gui;
	p.preload = function(){
		img = extfunc.a(p);
	}

	p.setup = function() {
		
		//img[0].loadPixels();
	 	p.createCanvas(p.windowWidth, 600);
	 	mask = p.createGraphics(50, 50);
    	mask.ellipse(25,25,48,48);
		img[1].mask(mask);
		//gui = createGui('mygui');
		//gui.addGlobals('pos');
		p.noLoop();
		

		
	};

	p.draw = function() {
		//if(!done){

			p.background(201, 15, 50);
			p.image(img[1], 25, 25, 50, 50);
			for (i = 0; i<name.length; i++){
				s = p.random(size);
				p.text(name[i], 50, 70*(i+1));
				p.ellipse(100+pos,70*(i+1)-4,s,s);
				//if (i<name.length) done = true;
			} 
			
		//}
	};

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth, 600);
	};

}, 'root');
