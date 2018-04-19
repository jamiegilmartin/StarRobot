// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
//var MICROSECDONDS_PER_CM = 1e6/34321;


void Ping(){
	//HC-SR04 Ping distance sensor
	long duration, distance;
	digitalWrite(trigPin, LOW);
	delayMicroseconds(2);
	digitalWrite(trigPin, HIGH);

	delayMicroseconds(10);
	digitalWrite(trigPin, LOW);
	duration = pulseIn(echoPin, HIGH);
	distance = (duration/2) / 29.1;

	if (distance >= 200 || distance <= 0){
		Serial.println("out_of_range");
	}else {
		Serial.println("CM_"+String(distance));
	}
}

