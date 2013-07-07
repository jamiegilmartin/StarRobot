var Robot = window.Robot || {};
 
/**
 * @class Robot.Joystick 
 * @description arrow controlls
 * @param view - slide show view port
 */
Robot.Joystick = function( arrowPad ){
	this.arrowPad = arrowPad;
	this.blink = this.arrowPad.getElementsByTagName('p')[0]
};
Robot.Joystick.prototype.up = function(){
	this.blink.classList.add('active');
	this.activeKey = this.arrowPad.getElementsByClassName('up')[0];
	return this.activeKey;
};
Robot.Joystick.prototype.down = function(){
	this.blink.classList.add('active');
	this.activeKey = this.arrowPad.getElementsByClassName('down')[0];
	return this.activeKey;
};
Robot.Joystick.prototype.right = function(){
	this.blink.classList.add('active');
	this.activeKey = this.arrowPad.getElementsByClassName('right')[0];
	return this.activeKey;
};
Robot.Joystick.prototype.left = function(){
	this.blink.classList.add('active');
	this.activeKey = this.arrowPad.getElementsByClassName('left')[0];
	return this.activeKey;
};