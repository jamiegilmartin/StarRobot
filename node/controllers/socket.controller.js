const chalk = require('chalk');

module.exports = {
  init : function(io) {

    //test serial
    var serial = {write:function(f){console.log(f)}};

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
          serial.write("0\n");
        }
        if(data.name == 'down'){
          serial.write("1\n");
        }
        if(data.name == 'right'){
          serial.write("2\n");
        }
        if(data.name == 'left'){
          serial.write("3\n");
        }
      });

      //driver
      socket.on('drive', function ( data ) {
        console.log('drive', data.name );
        //send to serial
        if(data.name == 'up'){
          serial.write("4\n");
        }
        if(data.name == 'down'){
          serial.write("5\n");
        }
        if(data.name == 'right'){
          serial.write("6\n");
        }
        if(data.name == 'left'){
          serial.write("7\n");
        }
        if(data.name == 'stop'){
          serial.write("8\n");
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
  }
}