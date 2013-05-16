 
 void Track(){
  //servos
  horizontalDegree = map(analogRead(photoresistorHorizontal),0,1023,0,179);
  horizontalDegree = 179 - horizontalDegree; //have to make opposite since soldering messup
  verticalDegree = map(analogRead(photoresistorVertical),0,1023,0,90); // 90 degrees max for vertical servo

  //average horizontal
  Htotal= Htotal - Hreadings[Hindex];
  Hreadings[Hindex] = horizontalDegree;
  Htotal= Htotal + Hreadings[Hindex];
  Hindex = Hindex + 1;
  if (Hindex >= numReadings){
    Hindex = 0;
  }              
  
  //average verticle
  Vtotal= Vtotal - Vreadings[Vindex];
  Vreadings[Vindex] = verticalDegree;
  Vtotal= Vtotal + Vreadings[Vindex];
  Vindex = Vindex + 1;                    
  
  if (Vindex >= numReadings){
    Vindex = 0;
  }                        
  
  // calculate the average:
  Haverage = Htotal / numReadings;
  Vaverage = Vtotal / numReadings;
  
  //horizontalServo.write(Haverage);
  //verticalServo.write(Vaverage);
  
//horizontalServo.write(0);
//verticalServo.write(0);
//
//delay(1000);
//
//horizontalServo.write(90);
//verticalServo.write(90);
//
//delay(1000);


//Serial.println("H avg : "); 
//Serial.print(horizontalDegree);
Serial.println("V avg : ");
Serial.print(verticalDegree);
  
 }
