void motorForward() {
    Serial.println("driver forward");
    //forward
    motorMove(1, 255, 0); //motor 1, full speed, left
    motorMove(2, 255, 0); //motor 2, full speed, right
}

void motorBack() {
    Serial.println("driver back");
    //back
    motorMove(1, 255, 1); //motor 1, full speed, right
    motorMove(2, 255, 1); //motor 2, full speed, left
}

void motorRight() {
    Serial.println("driver right");
    //right
    //motorMove(1, 128, 0); //motor 1, half speed, left
    motorMove(2, 128, 0); //motor 2, half speed, left  
}

void motorLeft() {
    Serial.println("driver left");
    //left
    motorMove(1, 128, 0); //motor 1, half speed, left
    //motorMove(2, 128, 0); //motor 2, half speed, left
}


void motorMove(int motor, int speed, int direction){
//Move specific motor at speed and direction
//motor: 0 for B 1 for A
//speed: 0 is off, and 255 is full speed
//direction: 0 clockwise, 1 counter-clockwise

  digitalWrite(STBY, HIGH); //disable standby

  boolean inPin1 = LOW;
  boolean inPin2 = HIGH;

  if(direction == 1){
    inPin1 = HIGH;
    inPin2 = LOW;
  }

  if(motor == 1){
    digitalWrite(AIN1, inPin1);
    digitalWrite(AIN2, inPin2);
    analogWrite(PWMA, speed);
  }else{
    digitalWrite(BIN1, inPin1);
    digitalWrite(BIN2, inPin2);
    analogWrite(PWMB, speed);
  }
}

void motorStop(){
//enable standby  
  digitalWrite(STBY, LOW); 
}



