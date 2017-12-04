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
  var self = this,
    isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
    onDown = isMobile ? 'touchstart' : 'mousedown',
    onUp = isMobile ? 'touchend' : 'mouseup';

  document.addEventListener('keydown',function(e){
    //e.preventDefault();
    self.keyDown( e.keyCode );
  },false);

  document.addEventListener('keyup',function(e){
    self.keyUp();
  },false);

  //mouse events
  //tracker
  this.tracker.upBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.tracker.up();
    Robot.send('tracker','up');
  },false);
  this.tracker.downBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.tracker.down();
    Robot.send('tracker','down');
  },false);
  this.tracker.rightBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.tracker.right();
    Robot.send('tracker','right');
  },false);
  this.tracker.leftBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.tracker.left();
    Robot.send('tracker','left');
  },false);

  //driver
  this.driver.upBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.driver.up();
    Robot.send('driver','up');
  },false);
  this.driver.downBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.driver.down();
    Robot.send('driver','down');
  },false);
  this.driver.rightBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.driver.right();
    Robot.send('driver','right');
  },false);
  this.driver.leftBtn.addEventListener(onDown,function(e){
    e.preventDefault();
    self.activeKey = self.driver.left();
    Robot.send('driver','left');
  },false);


  //mouse up
  this.tracker.upBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.tracker.downBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.tracker.rightBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.tracker.leftBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.driver.upBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.driver.downBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.driver.rightBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
  this.driver.leftBtn.addEventListener(onUp,function(e){
    e.preventDefault();
    self.keyUp();
  },false);
};

Robot.Controls.prototype.keyDown = function( keycode ){
  //console.log(keycode);
  this.activeKey = null;

  //tracker
  if( keycode === 38 ){
    this.activeKey = this.tracker.up();
    Robot.send('tracker','up');
  }
  if( keycode === 40 ){
    this.activeKey = this.tracker.down();
    Robot.send('tracker','down');
  }
  if( keycode === 37 ){
    this.activeKey = this.tracker.left();
    Robot.send('tracker','left');
  }
  if( keycode === 39 ){
    this.activeKey = this.tracker.right();
    Robot.send('tracker','right');
  }
  //driver
  if( keycode === 87 ){
    this.activeKey = this.driver.up();
    Robot.send('driver','up');
  }
  if( keycode === 83 ){
    this.activeKey = this.driver.down();
    Robot.send('driver','down');
  }
  if( keycode === 65 ){
    this.activeKey = this.driver.left();
    Robot.send('driver','left');
  }
  if( keycode === 68 ){
    this.activeKey = this.driver.right();
    Robot.send('driver','right');
  }

  if(this.activeKey)
  this.activeKey.classList.add('active');
};

Robot.Controls.prototype.keyUp = function(){
  if(this.activeKey)
  this.activeKey.classList.remove('active');
  this.tracker.blink.classList.remove('active');
  this.driver.blink.classList.remove('active');

  Robot.send('driver','stop');
};
