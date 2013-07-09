var Robot = window.Robot || {};
 
/**
 * @class Robot.Joystick 
 * @description arrow controlls
 * @param view - slide show view port
 */
Robot.Joystick = function( arrowPad ){
	this.arrowPad = arrowPad;
	
	this.upBtn = this.arrowPad.getElementsByClassName('up')[0];
	this.downBtn = this.arrowPad.getElementsByClassName('down')[0];
	this.rightBtn = this.arrowPad.getElementsByClassName('right')[0];
	this.leftBtn = this.arrowPad.getElementsByClassName('left')[0];
	
	this.blink = this.arrowPad.getElementsByTagName('p')[0]
};
Robot.Joystick.prototype.up = function(){
	this.blink.classList.add('active');
	this.activeKey = this.upBtn;
	return this.activeKey;
};
Robot.Joystick.prototype.down = function(){
	this.blink.classList.add('active');
	this.activeKey = this.downBtn;
	return this.activeKey;
};
Robot.Joystick.prototype.right = function(){
	this.blink.classList.add('active');
	this.activeKey = this.rightBtn;
	return this.activeKey;
};
Robot.Joystick.prototype.left = function(){
	this.blink.classList.add('active');
	this.activeKey = this.leftBtn;
	return this.activeKey;
};