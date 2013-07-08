var app = require('http').createServer( serve ),
	io = require('socket.io').listen(app),
	path = require('path'),
	fs = require('fs'),
	serialport = require("serialport"),
	SerialPort = serialport.SerialPort,
	serial = new SerialPort("/dev/tty.usbmodem3d21", {
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
	
	path.exists(filePath, function(exists){
		
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
	
}

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

/*
serial.on("data", function (data) {
	console.log("from arduino: "+data);
});
*/