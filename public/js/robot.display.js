var Robot = window.Robot || {};

/**
 * @class Robot.Display
 * @description a HTML5 canvas controller
 * @param element
 */
Robot.Display = function(element){
  this.canvas = element || document.getElementById('canvas');
  this.lastPath = './images/DSC02280.JPG';
  this.init();
};
Robot.Display.prototype.init = function(){
  var self = this;

  if (this.canvas.getContext) {
    this.canvas = this.canvas.getContext('2d');
    console.log('init canvas');

    this.setImage( this.lastPath );
  }
};
Robot.Display.prototype.setImage = function( path ){
  var self = this;
  //Loading of the home test image - img1
  var img = new Image();

  //drawing of the test image - img1
  img.onload = function () {
      //draw background image
      //self.canvas.drawImage(img1, 0, 0);
      self.canvas.drawImage(img, 0, 0, img.width,img.height, // source rectangle
        0, 0, canvas.width, canvas.height);  // destination rectangle
  };

  img.src = path;
  this.lastPath = path;
};
