var Robot = window.Robot || {};

/**
 * @class Robot Obj
 * @description Robot UI
 * @param
 */
Robot = {
  init : function(){
    var self = this;
    this.delay = 2500;

    //dom vars
    this.alerts = document.getElementsByClassName('alerts')[0];
    this.distance = document.getElementsByClassName('distance')[0];


    //init
    this.listen(); //listen to socket
    this.controls = new Robot.Controls();
    this.display = new Robot.Display();

    this.timer = new Robot.Timer( this.delay ,function(date, tick){
      console.log('this date', date, tick);
      self.send('getLatestImage', { getLatestImage: 'data' });
    });
  },
  receive : function( name, data ){
    if(name === 'distance'){
      this.distance.innerHTML = data.distance;
    }
    if(name === 'latestImage'){
      if(this.display && this.display.lastPath !== data.latestImage){
        console.log('set image',data.latestImage)
        this.display.setImage(data.latestImage);
      }
    }
  },
  send : function( name, data ){
    //send to open socket on server
    this.socket.emit(name, { name : data});

    this.alerts.innerHTML =  name +' '+ data
  },
  listen : function(){
    //socket io
    this.socket = io();//io.connect('http://localhost'); //http://10.29.59.221

    //distance
    this.socket.on('distance', function (data) {
      console.log('distance',data.distance);
      Robot.receive('distance',data);
      //socket.emit('my other event', { my: 'data' });
    });

    //latestImage
    this.socket.on('latestImage', function (data) {
      Robot.receive('latestImage',data);
    });


  }
};
