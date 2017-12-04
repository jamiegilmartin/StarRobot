var Robot = window.Robot || {};

/**
 * @class Robot.Timer
 * @description a set timeout loop
 * @param delay:Number
 * @param callback:Function - called every tick
 */
Robot.Timer = function(delay, callback){
  this.delay = delay;
  this.callback = callback;
  this.stopped = false;
  this.dateStarted = Date.now();
  this.latestDate = Date.now();
  this.ticked = 0;
  this.tick();
};
Robot.Timer.prototype.tick = function(){
  var self = this;

  this.latestDate = Date.now();
  this.ticked ++;
  this.callback( this.latestDate, this.ticked );

  this.timer = setTimeout(function(){
    if(!self.stopped){
      self.tick();
    }
  },this.delay);
};
Robot.Timer.prototype.stopped = function(){
  this.stopped = true;
  clearTimeout(this.timer);
};
