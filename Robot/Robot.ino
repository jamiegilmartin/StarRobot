#include <MotorDriver.h>

/*
* 5V
* pin D11 = horizontal servo
* pin D10 = vertical servo
* pin A0 = horizontal photoresistor with 10k resistor to pin (*white tape)
* pin A1 = vertical photoresistor with 10k resistor to pin (*blue tape)
*
*/

#include <Servo.h> 

#define trigPin 13
#define echoPin 12


//motor code
int STBY = 2; //standby

//Motor A
int PWMA = 3; //Speed control 
int AIN1 = 9; //Direction
int AIN2 = 8; //Direction

//Motor B
int PWMB = 5; //Speed control
int BIN1 = 7; //Direction
int BIN2 = 6; //Direction



//create servo objects to control servos 
Servo horizontalServo;
Servo verticalServo; 

int photoresistorHorizontal = 0;
int photoresistorVertical = 1;

int horizontalDegree;
int verticalDegree;

//smoothing - http://arduino.cc/en/Tutorial/Smoothing
const int numReadings = 10;

int Hreadings[numReadings];      // the readings from the analog input
int Hindex = 0;                  // the index of the current reading
int Htotal = 0;                  // the running total
int Haverage = 0;                // the average

int Vreadings[numReadings];
int Vindex = 0;
int Vtotal = 0;
int Vaverage = 0;


void setup(){
 Serial.begin(9600);
 
 //ping
 pinMode(trigPin, OUTPUT);
 pinMode(echoPin, INPUT);
 
 //motors
 pinMode(STBY, OUTPUT);
 
 pinMode(PWMA, OUTPUT);
 pinMode(AIN1, OUTPUT);
 pinMode(AIN2, OUTPUT);
 
 pinMode(PWMB, OUTPUT);
 pinMode(BIN1, OUTPUT);
 pinMode(BIN2, OUTPUT);


 //servos
 horizontalServo.attach(11);
 verticalServo.attach(10);
 pinMode(photoresistorHorizontal, INPUT);
 pinMode(photoresistorVertical, INPUT);
	
 // initialize all the readings to 0: 
 for (int thisHReading = 0; thisHReading < numReadings; thisHReading++){
   Hreadings[thisHReading] = 0;
 }
 for (int thisVReading = 0; thisVReading < numReadings; thisVReading++){
  Vreadings[thisVReading] = 0;
 }
 
 
}

void loop(){

  Ping();
  
  
  //Track();

 //delay(15);


  delay(1000);
  //Track();


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
}





