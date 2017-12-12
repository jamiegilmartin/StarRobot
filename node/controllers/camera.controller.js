const terminal = require('child_process').spawn('bash');
const SocketController = require('./socket.controller');
const fs = require('fs');

/**
 * imageCapture for pi Camera
 * @description time lapse and image capture
 * @param delay
 */
module.exports.init = function(delay, callback){
	var self = this;
  this.directory = '~/Documents/Arduino/StarRobot/node/public/assets';
  this.delay = delay || 10000;
  this.stopped = false;
  this.images = [];
  this.callback = callback;
  this.increment = 0;
  this.takePic();
};

module.exports.loop = function(){
  setTimeout(()=>{
    if(!this.stopped){
      this.takePic();
    }
  }, this.delay);
};

module.exports.stop = function(){
  this.stopped = true;
  terminal.stdin.end();
};

module.exports.takePic = function(){
  const date = new Date();
  let fileName = "timeLapse-img_"+this.increment +"_date-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()+"_"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()+".jpg";
  let path = this.directory+"/"+fileName
  let command = "raspistill -o "+ path;

  console.log('take pic',terminal.pid,this.increment,command)

  this.images.push(fileName);

  //command
  terminal.stdin.write(command+'\n');
  this.callback( path );
  this.increment ++;
  this.loop();
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