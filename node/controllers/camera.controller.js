var terminal = require('child_process').spawn('bash');
var fs = require('fs');

/**
 * imageCapture for pi Camera
 * @description time lapse and image capture
 * @param delay
 */
module.exports.init = function(delay){
	var self = this;
  this.output = '~/Documents/Arduino/StarRobot/node/public/assets';
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
    path = this.directory+"/"+fileName
    command = "raspistill -o "+ path;

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


module.exports.getLatest = function(){
  return this.images.length > 0 ? this.images[this.images.length - 1] : null;
};

/*
//CronJobs
var timeZone = "Europe/Berlin";
var presentationsJob = new CronJob({
  cronTime: '00 00 16 * * 1,2,3,4',
  onTick: function () {
    var data = {
      "username": "Etv-FE-Presentations",
      "icon_emoji": ":linked_paperclips:",
      "text": presentations.getNextPresentation(),
      "channel": config.channels.etvFrontEnd
    };
    if (data.text !== "No scheduled presenations") {
      myBot.post(data, function () {
        console.log('presentation posted')
      });
    }
  },
  start: false,
  timeZone: timeZone
});
presentationsJob.start();
*/