var terminal = require('child_process').spawn('bash');
var fs = require('fs');


/**
 * imageCapture for pi Camera
 * @description time lapse and image capture
 * @param delay
 */
module.exports.init = function(delay){
	var self = this;
  this.output = '~/Documents/Arduino/StarRobot/public/images';
  this.directory = this.output;
  this.delay = delay || 10000;
  this.increment = 0;
  this.maxPics = 1000; //TODO:
  this.timer = null;
  this.stopped = false;
  this.images = [];

  this.start();
};
module.exports.start = function(){
  var self = this;
  this.timer = setInterval(function(){
    if(!self.stopped){
      self.takePic();
    }
  },this.delay);
};
module.exports.stop = function(){
  this.stopped = true;
  clearInterval(this.timer);//process keeps running if you don't clear
};
module.exports.takePic = function(){
  var date = new Date(),
    fileName = "timeLapse-img_"+this.increment +"_date-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()+"_"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()+".jpg",
    command = "raspistill -o "+this.directory+"/"+fileName;

  if(this.increment < this.maxPics){
    console.log('take pic',terminal.pid,this.increment,command)

    this.images.push(fileName);

    //command
    terminal.stdin.write(command+'\n');
  }else{
    console.log('reached the max');
    this.stop();
    terminal.stdin.end();
  }

  this.increment += 1;
};
