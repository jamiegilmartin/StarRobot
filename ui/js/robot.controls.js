var Robot = window.Robot || {};
 
/**
 * @class Robot.Controls 
 * @description Robot UI
 * @param 
 */
Robot.Controls = function(){
	this.driver = new Robot.Joystick(document.getElementById('driver'));
	this.tracker = new Robot.Joystick(document.getElementById('tracker'));
	
	this.activeKey;
	
	this.events();
};

Robot.Controls.prototype.events = function(){
	var self = this;

	document.addEventListener('keydown',function(e){
		e.preventDefault();
		self.keyDown( e.keyCode );
	},false);
	
	document.addEventListener('keyup',function(e){
		self.keyUp();
	},false);
	
	//console.log('key', String.fromCharCode() );
};

Robot.Controls.prototype.keyDown = function( keycode ){
	//console.log(keycode);
	this.activeKey = null;
	
	//tracker
	if( keycode === 38 ){
		this.activeKey = this.tracker.up();
	}
	if( keycode === 40 ){
		this.activeKey = this.tracker.down();
	}
	if( keycode === 37 ){
		this.activeKey = this.tracker.left();
	}
	if( keycode === 39 ){
		this.activeKey = this.tracker.right();
	}
	//driver
	if( keycode === 87 ){
		this.activeKey = this.driver.up();
	}
	if( keycode === 83 ){
		this.activeKey = this.driver.down();
	}
	if( keycode === 65 ){
		this.activeKey = this.driver.left();
	}
	if( keycode === 68 ){
		this.activeKey = this.driver.right();
	}
	
	if(this.activeKey)
	this.activeKey.classList.add('active');
};

Robot.Controls.prototype.keyUp = function(){
	if(this.activeKey)
	this.activeKey.classList.remove('active');
	this.tracker.blink.classList.remove('active');
	this.driver.blink.classList.remove('active');
};