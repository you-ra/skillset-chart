(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = {

	a : function (p){
	
		var x = 100;
		var y = 100;
		p.rect(x,y,50,50);
		
	},

	b : function (p){
	
		var x = 100;
		var y = 200;
		p.ellipse(x,y,50,50);
		
	}
	
};
},{}],2:[function(require,module,exports){
var extfunc = require('./extfunc.js'); 
//var p5 = require('p5');


new p5(function(p){
	const name = ['Yumi44','Bato','Akira'];
	const size = [3,6,9,12,15,18,21,24];
	//var done = false;
	var pos = 30;
	//var gui;

	p.setup = function() {
		
	 	p.createCanvas(400, 400);
		
		//gui = createGui('mygui');
		//gui.addGlobals('pos');
		p.noLoop();
		

		
	};

	p.draw = function() {
		//if(!done){
			p.background(220, 100, 50);
			for (i = 0; i<name.length; i++){
				s = p.random(size);
				p.text(name[i], 50, 70*(i+1));
				p.ellipse(100+pos,70*(i+1)-4,s,s);
				//if (i<name.length) done = true;
			} 
			extfunc.a(p);
		//}
	};
}, 'root');

},{"./extfunc.js":1}]},{},[2]);
