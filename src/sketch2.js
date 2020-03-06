var extfunc = require('./extfunc.js'); 
//var p5 = require('p5');


new p5(function(p){
	const name = ['Yumi44','Bato','Akira'];
	const skillset = ['Javascript','Node.js','Bootstrap'];
	const size = [3,6,9,12,15,18,21,24];
	var img;
	var pos = 30;
	var BP;
	var boxSize;
	var scale = null;
	//var gui;

	p.preload = function(){
		img = extfunc.a(p);
	}

	p.setup = function() {
		
		//img[0].loadPixels();
	 	p.createCanvas(p.windowWidth, 600);
	 	
	 	mask = p.createGraphics(50, 50);
    	mask.ellipse(25,25,48,48);
		img[0].mask(mask);
		img[1].mask(mask);
		BP = extfunc.setBp(p);
		boxSize = BP.colWidth;
		//gui = createGui('mygui');
		//gui.addGlobals('pos');
		p.noLoop();
		s1 = new extfunc.Slider(p, 'Box size', 1, [1,50], 0.5);
		s2 = new extfunc.Slider(p, 'Circle size', 2,[1,10], 0.7);
		

		
	};

	p.draw = function() {
		

				p.background(0, 100, 150);
				//giscale = extfunc.scaleCol(p, boxSize, s1.getValue(0.5, 1.5));
				if(scale){
					boxSize = scale.w;
					console.log(scale, BP.colWidth);
					console.log(s1.getValue(0.5, 1.5));
				}

				for (var i = 0; i < BP.colNum; i++){
					
					p.image(img[i%2], i*BP.colWidth*s1.getValue(0.5,1.5), 25, 50, 50);
					for (n = 0; n < skillset.length; n++){
						//p.rect(n*BP.colWidth,i*200,BP.colWidth,200);

						
						s = p.random(size);
						//p.text(name[i], 50, 70*(i+1));
						p.ellipse(100+pos,70*(i+1)-4,s,s);
					}
				} 
				
				
				
	  			//boxSize = p.round(BP.colWidth * s1.getValue(0.5, 1.5));
	  			p.text(boxSize,100,100);
	  			
	  			
	  			
	  			s1.setCursorX(p.mouseX);
	  			s1.display();
		
	};

	p.windowResized = function() {
		
		p.resizeCanvas(p.windowWidth, 600);
		BP = extfunc.setBp(p);
		
	};

	p.mouseDragged = function(event) {
		
  		//p.ellipse(p.mouseX,p.mouseY,50);
  		
  		//p.loop();

  		return false;
	}

	p.mousePressed = function(){
		//s1.setCursorX(p.mouseX);
  		//s1.display();
  		s1.hit(p.mouseY);
  		p.loop();
	}

	p.mouseReleased = function(){
		s1.active = false;
		p.noLoop();
	}



}, 'root');
