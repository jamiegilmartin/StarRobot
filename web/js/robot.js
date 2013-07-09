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
		
		
		
		this.controls = new Robot.Controls();
	},
	update : function( name, data){
		if(name === 'distance'){
			this.distance.innerHTML = data.distance;
		}
	}
	
};



