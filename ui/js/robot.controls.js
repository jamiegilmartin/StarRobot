var Robot = window.Robot || {};
 
/**
 * @class Robot.Controls 
 * @description a responsive slide show
 * @param view - slide show view port
 */
Robot.Controls = function(){
	this.keyParser();
};

Robot.Controls.prototype.keyParser = function(){
	var self = this;
	
	this.activeKey;
	
	document.addEventListener('keydown',function(e){
		console.log(e.keyCode);
		var keycode = e.keyCode;
		if( keycode === 38 ){
			self.up();
		}
		if( keycode === 38 ){
			self.up();
		}
	},false);
	
	document.addEventListener('keyup',function(e){
		console.log(e.keyCode);
		self.keyUp();
	},false);
	
	console.log('key', String.fromCharCode() );
};

Robot.Controls.prototype.up = function(){
	this.activeKey = document.getElementsByClassName('up')[0];
	this.activeKey.classList.add('active');
	console.log('up');
};
Robot.Controls.prototype.down = function(){
	this.activeKey = document.getElementsByClassName('down')[0];
	this.activeKey.classList.add('active');
	console.log('down');
};
Robot.Controls.prototype.right = function(){
	this.activeKey = document.getElementsByClassName('right')[0];
	this.activeKey.classList.add('active');
	console.log('right');
};
Robot.Controls.prototype.left = function(){
	this.activeKey = document.getElementsByClassName('left')[0];
	this.activeKey.classList.add('active');
	console.log('left');
};
Robot.Controls.prototype.keyUp = function(){
	if(this.activeKey)
	this.activeKey.classList.remove('active');
};