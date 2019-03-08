
module.exports = {

	a : function (p){

		img = [];
		img.push(p.loadImage('assets/1.jpg'));
		img.push(p.loadImage('assets/2.jpg'));
		img.push(p.loadImage('assets/3.jpg'));
		img.push(p.loadImage('assets/4.jpg'));
		img.push(p.loadImage('assets/5.jpg'));
		return img;
		
	},

	b : function (p){
	
		var x = 100;
		var y = 200;
		p.ellipse(x,y,50,50);
		
	}
	
};