#include <MotorDriver.h>
#include <Servo.h>

//ping pins
#define trigPin 13
#define echoPin 12


//motor pins
int STBY = 2; //standby
//Motor A
int PWMA = 3; //Speed control 
int AIN1 = 9; //Direction
int AIN2 = 8; //Direction
//Motor B
int PWMB = 5; //Speed control
int BIN1 = 7; //Direction
int BIN2 = 6; //Direction

//create servo objects
Servo horizontalServo;
Servo verticalServo; 

int interval = 0;

void setup(){
	Serial.begin(9600);

	//ping
	pinMode(trigPin, OUTPUT);
	pinMode(echoPin, INPUT);
	//motors
	pinMode(STBY, OUTPUT);
	//Motor A
	pinMode(PWMA, OUTPUT);
	pinMode(AIN1, OUTPUT);
	pinMode(AIN2, OUTPUT);
	//Motor B
	pinMode(PWMB, OUTPUT);
	pinMode(BIN1, OUTPUT);
	pinMode(BIN2, OUTPUT);
	//servos
	horizontalServo.attach(11);
	verticalServo.attach(10);

	interval = 0;
}

void loop(){

	Ping();
	
/*
	if(interval < 180){
		horizontalServo.write(interval);
		verticalServo.write(interval);
		interval++;
	}else{
		interval = 0;
	}
*/
	serialIn();
	//delay(2000);

}
void serialIn() {
	//have arduino wait to receive input
	while(Serial.available() == 0 );
	
	//read input
	int serialVal = Serial.read() - '0';
	
	if(serialVal == 0){
		//forward
		//goForward();
		Serial.println("go forward");
	}
	else if(serialVal == 1){
		//left
		//turnLeft();
		Serial.println("go left");
	}
	else if(serialVal == 2){
		//right
		//turnRight();
		Serial.println("go right");
	}
	else if(serialVal == 3){
		//up
		//goUp();
	}
	else if(serialVal == 4){
		//down
		//goDown();
	}
	else if(serialVal == 5){
		
		//stop all
		//stop();
	}
	Serial.flush();
}





/*
  move(1, 128, 1); //motor 1, full speed, left
  move(2, 128, 0); //motor 2, full speed, left

  delay(250); //go for 1 second
  stop(); //stop
  
  delay(250);
  
  move(1, 128, 0); //motor 1, full speed, left
  move(2, 128, 1); //motor 2, full speed, left
  
  delay(250); //go for 1 second
  stop(); //stop
*/

  /*delay(250); //hold for 250ms until move again

  move(1, 128, 0); //motor 1, half speed, right
  move(2, 128, 0); //motor 2, half speed, right

  delay(1000);
  stop();
  delay(250);*/





