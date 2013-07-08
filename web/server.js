
var app = require('http').createServer(handler),
	fs = require('fs'),
	serialport = require("serialport"),
	SerialPort = serialport.SerialPort,
	serial = new SerialPort("/dev/tty.usbmodem3d21", {
		baudrate: 9600,
		parser: serialport.parsers.readline("\n") 
	});

app.listen(8080);
console.log("Listening on http://raspberrypi:8080...");

serial.write("hellz!")

// directs page requests to html files

function handler (req, res) {
	fs.readFile(__dirname + '/ui/index.html',
	function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}

serial.on("data", function (data) {
	console.log("from arduino: "+data);
});
