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
		Serial.println("Out of range");
	}else {
		Serial.print(distance);
		Serial.println(" cm");
	}
}
