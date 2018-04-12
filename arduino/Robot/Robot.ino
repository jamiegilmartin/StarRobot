#include <Servo.h>

////ping pins
//#define trigPin 13
//#define echoPin 12

const int SOFT_POT_PIN = A0;

const int RED_PIN = 4;
const int GREEN_PIN = 13;
const int BLUE_PIN = 12;


//photo resistors - voltage dividers with 10k ohm 
const int photoResistor_RL = 0; //right | left
const int photoResistor_FB = 1; //front | back
int degree_RL;
int degree_FB;

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
Servo horizontalServo; //10
Servo verticalServo; //11

int verticalInterval;
int horizontalInterval;
int trackerDegreeInterval = 10;

int pos = 0;

void setup(){
	while(!Serial);
	Serial.begin(9600);
  //soft pot
  pinMode(SOFT_POT_PIN, INPUT);
  //led
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);

  //photo resistors
  pinMode(photoResistor_RL, INPUT);
  pinMode(photoResistor_FB, INPUT);
  
//	//ping
//	pinMode(trigPin, OUTPUT);
//	pinMode(echoPin, INPUT);
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
	horizontalServo.attach(10);
	verticalServo.attach(11);

	verticalInterval = 0;
	horizontalInterval = 0;

}

void loop(){
  loopCount += 1;
  
	//have arduino wait to receive input
	while(Serial.available() == 0 );
	
	//read input
	int serialVal = Serial.read() - '0';



  //photo resistors
  degree_RL = map(analogRead(photoResistor_RL),0,1023,0,179);
  degree_FB = map(analogRead(photoResistor_FB),0,1023,0,179);

  Serial.println("RL_" + String(degree_RL));
  Serial.println("FB_" + String(degree_RL));
//	// test light cycle
//  digitalWrite(RED_PIN, LOW);
//  digitalWrite(GREEN_PIN, HIGH);
//  digitalWrite(BLUE_PIN, LOW);
//
//  //delay(100);
//
//  digitalWrite(RED_PIN, HIGH);
//  digitalWrite(GREEN_PIN, LOW);
//  digitalWrite(BLUE_PIN, LOW);
//
//  //delay(100);
//
//  digitalWrite(RED_PIN, LOW);
//  digitalWrite(GREEN_PIN, LOW);
//  digitalWrite(BLUE_PIN, HIGH);

	//driver
	//motor1 = left | motor 2 = right
	if(serialVal == 0){
		Serial.println("driver stop");
		motorStop();

		digitalWrite(RED_PIN, LOW);
  	digitalWrite(GREEN_PIN, LOW);
  	digitalWrite(BLUE_PIN, HIGH);
	}
	if(serialVal == 1){
		Serial.println("driver forward");
		//forward
		motorMove(1, 255, 0); //motor 1, full speed, left
		motorMove(2, 255, 0); //motor 2, full speed, right

		digitalWrite(RED_PIN, LOW);
  	digitalWrite(GREEN_PIN, HIGH);
  	digitalWrite(BLUE_PIN, LOW);
	}
	if(serialVal == 2){
		Serial.println("driver back");
		//back
		motorMove(1, 255, 1); //motor 1, full speed, right
		motorMove(2, 255, 1); //motor 2, full speed, left

		digitalWrite(RED_PIN, HIGH);
		digitalWrite(GREEN_PIN, LOW);
		digitalWrite(BLUE_PIN, LOW);
	}
	if(serialVal == 3){
		Serial.println("driver right");
		//right
		//motorMove(1, 128, 0); //motor 1, half speed, left
		motorMove(2, 128, 0); //motor 2, half speed, left

		digitalWrite(RED_PIN, HIGH);
  	digitalWrite(GREEN_PIN, LOW);
  	digitalWrite(BLUE_PIN, HIGH);
	}
	if(serialVal == 4){
		Serial.println("driver left");
		//left
		motorMove(1, 128, 0); //motor 1, half speed, left
		//motorMove(2, 128, 0); //motor 2, half speed, left
		
		digitalWrite(RED_PIN, LOW);
  	digitalWrite(GREEN_PIN, HIGH);
  	digitalWrite(BLUE_PIN, HIGH);
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



