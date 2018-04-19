#include <Servo.h>

////ping pins
#define trigPin 13
#define echoPin 12

//photo resistors - voltage dividers with 10k ohm 
const int photoResistor_RL = 0; //right | left
const int photoResistor_FB = 1; //front | back
int degree_RL;
int degree_FB;


//smoothing - http://arduino.cc/en/Tutorial/Smoothing
const int numReadings = 10;

int RL_readings[numReadings];      // the readings from the analog input
int RL_index = 0;                  // the index of the current reading
int RL_total = 0;                  // the running total
int RL_average = 0;                // the average

int FB_readings[numReadings];
int FB_index = 0;
int FB_total = 0;
int FB_average = 0;


//motor pins
const int STBY = 2; //standby
//Motor A
const int PWMA = 3; //Speed control 
const int AIN1 = 9; //Direction
const int AIN2 = 8; //Direction
//Motor B
const int PWMB = 5; //Speed control
const int BIN1 = 7; //Direction
const int BIN2 = 6; //Direction

int loopCount = 0;

//create servo objects
Servo horizontalServo; //11
Servo verticalServo; //10

int verticalInterval;
int horizontalInterval;
int trackerDegreeInterval = 10;

int pos = 0;

void setup(){
	while(!Serial);
	Serial.begin(9600);

  //photo resistors
  pinMode(photoResistor_RL, INPUT);
  pinMode(photoResistor_FB, INPUT);
  
//	//ping
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

	verticalInterval = 0;
	horizontalInterval = 0;

}

void loop(){
  loopCount += 1;
  
	//have arduino wait to receive input
	while(Serial.available() == 0 );
	
	//read input
	int serialVal = Serial.read() - '0';

  Ping();

  //photo resistors
  degree_RL = map(analogRead(photoResistor_RL),0,1023,0,179); // left 180 | right 0
  degree_FB = map(analogRead(photoResistor_FB),0,1023,0,179); // front 180 | back 0

  /**
   * ADD SMOOTHING 
   */

  //average RL
  RL_total= RL_total - RL_readings[RL_index];
  RL_readings[RL_index] = degree_RL;
  RL_total= RL_total + RL_readings[RL_index];
  RL_index = RL_index + 1;
  if (RL_index >= numReadings){
    RL_index = 0;
  }              
  
  //average FB
  FB_total= FB_total - FB_readings[FB_index];
  FB_readings[FB_index] = degree_FB;
  FB_total= FB_total + FB_readings[FB_index];
  FB_index = FB_index + 1;                    
  
  if (FB_index >= numReadings){
    FB_index = 0;
  }                        

  // calculate the average:
  RL_average = RL_total / numReadings;
  FB_average = FB_total / numReadings;
  
  
  
  Serial.println("RL_" + String(RL_average));
  Serial.println("FB_" + String(FB_average));


	//driver
	//motor1 = left | motor 2 = right
	if(serialVal == 0){
		Serial.println("driver stop");
		motorStop();
	}
	if(serialVal == 1){
		Serial.println("driver forward");
		//forward
		motorMove(1, 255, 0); //motor 1, full speed, left
		motorMove(2, 255, 0); //motor 2, full speed, right
	}
	if(serialVal == 2){
		Serial.println("driver back");
		//back
		motorMove(1, 255, 1); //motor 1, full speed, right
		motorMove(2, 255, 1); //motor 2, full speed, left
	}
	if(serialVal == 3){
		Serial.println("driver right");
		//right
		//motorMove(1, 128, 0); //motor 1, half speed, left
		motorMove(2, 128, 0); //motor 2, half speed, left
	}
	if(serialVal == 4){
		Serial.println("driver left");
		//left
		motorMove(1, 128, 0); //motor 1, half speed, left
	}


		//tracker
	if(serialVal == 5){
		
		//down inverted
		if(verticalInterval > 0){
			verticalServo.write( verticalInterval );
			verticalInterval -= trackerDegreeInterval;
		}
   
    Serial.println("tracker up : " + verticalInterval);
	}
	if(serialVal == 6){
		//up inverted
		if(verticalInterval < 180){
			verticalServo.write( verticalInterval );
			verticalInterval += trackerDegreeInterval;
		}
   
   Serial.println("tracker down : " + verticalInterval);
	}
	if(serialVal == 7){
		//left
		if(horizontalInterval > 0){
			horizontalServo.write( horizontalInterval );
			horizontalInterval -= trackerDegreeInterval;
		}
   
   Serial.println("tracker right : " + horizontalInterval);
	}
	if(serialVal == 8){
		
		//right
		if(horizontalInterval < 180){
			horizontalServo.write( horizontalInterval );
			horizontalInterval += trackerDegreeInterval;
		}
   
   Serial.println("tracker left: " + horizontalInterval);
	}


	Serial.flush();
}



