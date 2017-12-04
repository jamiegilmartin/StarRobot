const chalk = require('chalk');

module.exports = {
  init : function(io) {
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

      //start training
      socket.on('train', function(d){
        console.log(chalk.red('train'),d);
        OscContrller.send('start', d.type);
      });

      //stop training
      socket.on('stopTraining', function(d){
        console.log(chalk.red('stopTraining'),d);
        OscContrller.send('stop', d.type);
      });

      socket.on('clear', function(d){
        console.log(chalk.red('go'),d);
        OscContrller.send('clear', 0);
      });

      socket.on('go', function(d){
        console.log(chalk.red('go'),d);
        OscContrller.send('go', 0);
      });
    });
  }
}