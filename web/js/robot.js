var Robot = window.Robot || {};

/**
 * @class Robot Obj 
 * @description Robot UI
 * @param 
 */
Robot = {
	init : function(){
		//dom vars
		this.distance = document.getElementsByClassName('distance')[0];
		
		
		
		//socket io
		this.socket = io.connect('http://localhost');
		this.socket.on('distance', function (data) {
			console.log('distance',data.distance);
			Robot.receive('distance',data);
			//socket.emit('my other event', { my: 'data' });
		});
		
		
		this.controls = new Robot.Controls();
	},
	receive : function( name, data ){
		if(name === 'distance'){
			this.distance.innerHTML = data.distance;
		}
	},
	send : function( name, data ){
		//send to open socket on server
		this.socket.emit(name, { name : data});
		
		//console.log('ui sending : ', name, data);
	}
	
};



