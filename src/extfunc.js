
module.exports = {

	scaleCol : function (p, bsize) {
		var w = p.width;
		var curColnum = p.floor(w/bsize);
		//var incColwidth = w/curColnum-1;
		//var decColwidth = w/curColnum+1;
		var mBsize = p.floor(bsize*mul);

		if(mBsize > bsize && mBsize * (curColnum-1) >= w){
			return {w : mBsize, colnum : curColnum-1, r: true};
		}

		if(mBsize < bsize && mBsize * (curColnum+1) <= w){
			return {w : mBsize, colnum : curColnum+1, r : true};
		}

	},

	a : function (p){

		img = [];
		img.push(p.loadImage('assets/1.jpg'));
		img.push(p.loadImage('assets/2.jpg'));
		img.push(p.loadImage('assets/3.jpg'));
		img.push(p.loadImage('assets/4.jpg'));
		img.push(p.loadImage('assets/5.jpg'));
		return img;
		
	},

	setBp : function (p){
		const brPoints =[900,600,200];
		var bp = {colWidth : 0, colNum : 5};
		bp.colWidth = p.width/5;

		if(p.width < brPoints[0] && p.width > brPoints[1]){
			console.log('5');
		};

		if(p.width < brPoints[1] && p.width > brPoints[2]){
			console.log('4');
			bp.colWidth = p.width/4;
			bp.colNum = 4;
		};

		if(p.width < brPoints[2]){
			console.log('3');
			bp.colWidth = p.width/3;
			bp.colNum = 3;
		};
		console.log(bp.colWidth);
		return bp;
	},

	Slider : function (p, name, position, range, absValue){
		let h = 100;
		let margins = 60;
		//let width = p.windowWidth-margins*2;
		this.name = name;
		this.position = position;
		this.baseline = 600-(this.position*h-h/2);
		this.cursorX = p.width*absValue;
		this.active = false;

		
		this.display = function(){

			p.rect(0, this.baseline-h/2, p.width, this.baseline+h/2);
			p.text(this.name +' '+ this.cursorX, p.width/2, this.baseline - 30);
			p.line(margins, this.baseline, p.width - margins, this.baseline);
			p.circle(this.cursorX, this.baseline, 20);
			
		};

		this.setCursorX = function(mousex){
			if(this.active){
				if(mousex >= margins && mousex <= p.width - margins){
					this.cursorX = mousex;
				}else{
					if(mousex < margins){
						this.cursorX = margins;
					}else{this.cursorX = p.width - margins};
				}
			}
			//this.cursorX = p.map(mousex, 0, p.width, margins, p.width-margins, true);
		}

		this.getValue = function(from, to){
			return p.map(this.cursorX, margins, p.width+margins, from, to);
		}

		this.hit = function(mousey){
			if(mousey>p.height-h*position && mousey<p.height-h*(position-1)){
				this.active = true;
			}
		}
	}
	
};