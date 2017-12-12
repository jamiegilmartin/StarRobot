const chalk = require('chalk');
const SerialController = require('./serial.controller');
var io;

module.exports.init = function(io) {
  io = io;

  //test serial
  //var serial = {write:function(f){console.log(f)}};

  //start socket
  console.log(chalk.bold.blue('init socket io'));
  io.on('connection', function(client){
    console.log( 'a user connected', client.id);
    client.send(client.id); //sessionId
    io.sockets.emit('userConnected', {});
  });
  
  io.sockets.on('connection', function (socket) {
    console.log(chalk.red('Socket Connection'), socket.id);

    socket.on('disconnect', function(who){
      console.log( 'user disconnected', who);
      io.sockets.emit('userDisconnected', {});
    });


    //joysticks
    //tracker
    socket.on('track', function ( data ) {
      console.log('track', data.name );
      //send to serial
      //TODO : see arduino json parser https://github.com/asaeed/InternetRobot/blob/master/arduino/src/sketch.ino
      if(data.name == 'up'){
        SerialController.send('0');
      }
      if(data.name == 'down'){
        SerialController.send('1');
      }
      if(data.name == 'right'){
        SerialController.send('2');
      }
      if(data.name == 'left'){
        SerialController.send('3');
      }
    });

    //driver
    socket.on('drive', function ( data ) {
      console.log('drive', data.name );
      //send to serial
      if(data.name == 'up'){
        SerialController.send('4');
      }
      if(data.name == 'down'){
        SerialController.send('5');
      }
      if(data.name == 'right'){
        SerialController.send('6');
      }
      if(data.name == 'left'){
        SerialController.send('7');
      }
      if(data.name == 'stop'){
        SerialController.send('8');
      }
    });

    //
    socket.on('getLatestImage',function(data){
      // console.log('getLatest',data, imageCapture.getLatest());
      // io.sockets.emit('latestImage', { latestImage: imageCapture.getLatest() });
    });

    //test
    io.sockets.emit('distance', { distance: 111 });

  });
};

module.exports.send = function(what, obj) {
  io.sockets.emit(what, obj );
};
