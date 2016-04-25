var config  = require('./config'),
    express = require('express'),
    expressHbs = require('express-handlebars'),
    q = require('q'),
    fs = require('fs'),
    util = require('util'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serialport = require("serialport")
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);//var io = socketio.listen(http, { log: true });


var env = 'development'; //'production'
config = config[env];

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // use morgan to log requests to the console

app.use(express.static( __dirname + '/public', { maxAge: 60000 } ));
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.set('port',  3000);



var imageCapture = require('./modules/imageCapture');
imageCapture.init();






//socket.io
io.on('connection', function(socket){
  console.log('a user connected');
});


/*
//create serial port - only if arduino is connected
var sp = config.sp,
  SerialPort = serialport.SerialPort,
  serial = new SerialPort(sp, {
    baudrate: 9600,
    parser: serialport.parsers.readline("\n")
  });

//receive data over serial
serial.on("open", function () {
  console.log('serial open');
  serial.on('data', function(data) {
    //console.log('data received: ' + data);
    console.log("from arduino: "+data);
    //io.sockets.emit('distance', { distance: data });
  });

  //serial.write("0\n", function(err, results) {
  //  console.log('err ' + err);
  //  console.log('results ' + results);
  //});

});
*/

//test serial
var serial = {write:function(f){console.log(f)}};



//on socket connection
io.sockets.on('connection', function (socket) {
  socket.on('tracker', function ( data ) {
    console.log('tracker', data.name );
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
  socket.on('driver', function ( data ) {
    console.log('driver', data.name );
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
  socket.on('disconnect', function(who){
    console.log('user disconnected',who);
  });
});





//create router
var router = express.Router();
//render home page
router.get('/', function(req, res){
  res.render('home');
});

//init router
app.use('/',router);


//handel errors
//@see http://expressjs.com/guide/error-handling.html
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

/**
 * serve through http server
 */
http.listen(app.get('port'), function(){
  console.log("Server listening on port " + app.get('port'));
});
