const SerialPort = require('serialport');
const chalk = require('chalk');
const sp =  '/dev/cu.usbmodem1408'; //'/dev/cu.usbmodem1421';//'/dev/cu.usbmodem14131';//"/dev/tty.usbmodem1d11"; //mac
//const sp = "/dev/ttyACM0"; //pi
const SocketController = require('./socket.controller');
var port;


module.exports.init = function(){
  //start serial
  port = new SerialPort(sp, {
    baudRate: 9600
  });

  port.open(function (err) {
    if (err) {
      return console.log(chalk.bold.red('Error opening port: '), err.message);
    }
    // Because there's no callback to write, write errors will be emitted on the port:
    //port.write('main screen turn on');
    console.log(chalk.yellow('serial port opening'));
  });
  
  // The open event is always emitted
  port.on('open', function() {
    // open logic
    console.log(chalk.yellow('serial port open'));
  });

  // Read data that is available but keep the stream from entering "flowing mode"
  port.on('readable', function () {
    console.log(chalk.yellow('Serial Data:'), port.read().toString());
    const portRead = port.read();
    if(portRead) {
      const humidity = portRead.toString().toLowerCase();
      console.log('humidity', humidity);
      //SocketController.send();
    }
  });
};
module.exports.send = function(msg) {
  console.log(chalk.yellow('serial send'),msg);
  port.write(msg+"\n");
};
