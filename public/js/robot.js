var Robot = window.Robot || {};

/**
 * @class Robot Obj
 * @description Robot UI
 * @param
 */
Robot = {
  init : function(){
    //dom vars
    this.alerts = document.getElementsByClassName('alerts')[0];
    this.distance = document.getElementsByClassName('distance')[0];



    //socket io
    this.socket = io();//io.connect('http://localhost'); //http://10.29.59.221
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

    this.alerts.innerHTML =  name +' '+ data
  }

};
