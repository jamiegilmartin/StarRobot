var sp = "/dev/tty.usbmodem1d21",
	app = require('http').createServer( serve ),
	io = require('socket.io').listen(app, { log: false }),//shut off debug
	path = require('path'),
	fs = require('fs'),
	serialport = require("serialport"),
	SerialPort = serialport.SerialPort,
	serial = new SerialPort(sp, {
		baudrate: 9600,
		parser: serialport.parsers.readline("\n") 
	});

app.listen(8080);
console.log("Listening on 8080...");

//serial.write("hellz!")

// directs page requests to html files
function serve(request, response) {
	
	var filePath = '.' + request.url;
	if(filePath == './') filePath = './index.html';
	
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	
		switch (extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
		}
	
	fs.exists(filePath, function(exists){
		
		if(exists){
			
			fs.readFile(filePath, function (error, data) {
				if (error) {
					response.writeHead(500);
					return response.end('Error loading index.html');
				}else{
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(data, 'utf-8');
				}
			});
			
			
		}else{
			response.writeHead(404);
			response.end();
		}
		
	});
	
};

//on socket connection
io.sockets.on('connection', function (socket) {
	//socket.emit('distance', { distance: '12cm' });
});

//send to serial via sockets
io.sockets.on('tracker', function (data) {
	console.log(data);
	serial.write("ls\n", function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
 	});
});


serial.on("open", function () {
	console.log('serial open');
	
	serial.on('data', function(data) {
		console.log('data received: ' + data);
	});
	
	serial.write("0\n", function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
	});  
});

//receive data over serial
/*
serial.on("data", function (data) {
	//console.log("from arduino: "+data);
	//io.sockets.emit('distance', { distance: data });
});
*/

