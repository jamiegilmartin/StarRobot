#include <Servo.h>

////ping pins
//#define trigPin 13
//#define echoPin 12

const int SOFT_POT_PIN = A0;

const int RED_PIN = 4;
const int GREEN_PIN = 13;
const int BLUE_PIN = 12;

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
// Read in the soft pot's ADC value
  int softPotADC = analogRead(SOFT_POT_PIN);
  // Map the 0-1023 value to 0-40
  //int softPotPosition = map(softPotADC, 0, 1023, 0, 100);
  Serial.println("softpot " + String(softPotADC));
  
  digitalWrite(RED_PIN, LOW);
  digitalWrite(GREEN_PIN, HIGH);
  digitalWrite(BLUE_PIN, LOW);

  delay(100);

  digitalWrite(RED_PIN, HIGH);
  digitalWrite(GREEN_PIN, LOW);
  digitalWrite(BLUE_PIN, LOW);

  delay(100);

  digitalWrite(RED_PIN, LOW);
  digitalWrite(GREEN_PIN, LOW);
  digitalWrite(BLUE_PIN, HIGH);

  delay(100);

  //forward
  motorMove(1, 5, 1); //motor 1, full speed, left
  motorMove(2, 5, 0); //motor 2, full speed, right

  Serial.println("tracker up");
  serialIn();
	//Ping();
  test();
}
void serialIn() {
	//have arduino wait to receive input
	while(Serial.available() == 0 );
	
	//read input
	int serialVal = Serial.read() - '0';

	//tracker
	if(serialVal == 0){
		Serial.println("tracker up");
		
		//down inverted
		if(verticalInterval > 0){
			verticalServo.write( verticalInterval );
			verticalInterval -= trackerDegreeInterval;
		}
	}
	else if(serialVal == 1){
		Serial.println("tracker down");
		//up inverted
		if(verticalInterval < 180){
			verticalServo.write( verticalInterval );
			verticalInterval += trackerDegreeInterval;
		}
	}
	else if(serialVal == 2){
		Serial.println("tracker right");
		//left
		if(horizontalInterval > 0){
			horizontalServo.write( horizontalInterval );
			horizontalInterval -= trackerDegreeInterval;
		}
	}
	else if(serialVal == 3){
		Serial.println("tracker left");
		
		//right
		if(horizontalInterval < 180){
			horizontalServo.write( horizontalInterval );
			horizontalInterval += trackerDegreeInterval;
		}
	}
	//driver
	//motor1 = left | motor 2 = right
	else if(serialVal == 4){
		Serial.println("driver forward");
		//forward
		motorMove(1, 255, 1); //motor 1, full speed, left
		motorMove(2, 255, 0); //motor 2, full speed, right
	}
	else if(serialVal == 5){
		Serial.println("driver back");
		//back
		motorMove(1, 255, 0); //motor 1, full speed, right
		motorMove(2, 255, 1); //motor 2, full speed, left
	}
	else if(serialVal == 6){
		Serial.println("driver right");
		//right
		//motorMove(1, 128, 1); //motor 1, half speed, left
		motorMove(2, 128, 0); //motor 2, half speed, left
	}
	else if(serialVal == 7){
		Serial.println("driver left");
		//left
		motorMove(1, 128, 1); //motor 1, half speed, left
		//motorMove(2, 128, 0); //motor 2, half speed, left
		
	}else if(serialVal == 8){
		Serial.println("driver stop");
		motorStop();
	}
	Serial.flush();
}

void test(){
    
  horizontalServo.write(90);
  verticalServo.write(180);
  /*
  for (pos = 90; pos <= 180; pos += 1) { 
    horizontalServo.write(pos);
    Serial.println(pos);
  }
  for (pos = 180; pos >= 90; pos -= 1) {
    verticalServo.write(pos);
    Serial.println(pos);
    delay(105);
  }
  
    
  horizontalServo.write(45);
  delay(500); 
  horizontalServo.write(120);
  delay(500); 
*/
 
  verticalServo.write(0);
  delay(500);
  verticalServo.write(180);
  delay(500); 
  
 /*
  
  horizontalServo.write(45);
  delay(250); 
  horizontalServo.write(65);
  delay(250);
  horizontalServo.write(25);
  delay(250); 
  horizontalServo.write(90);
  delay(250); 

  
  verticalServo.write(0);
  delay(250);
  verticalServo.write(45);
  delay(250); 
  verticalServo.write(90);
  delay(250); 
  verticalServo.write(180);
  delay(250); 


  motorMove(1, 128, 1); //motor 1, full speed, left
  motorMove(2, 128, 0); //motor 2, full speed, left

  delay(250); //go for 1 second
  motorStop(); //stop
  
  delay(250);
  
  motorMove(1, 128, 0); //motor 1, full speed, left
  motorMove(2, 128, 1); //motor 2, full speed, left
  
  delay(250); //go for 1 second
  motorStop(); //stop
*/

}


