import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)

TRIG = 26
ECHO = 24

#set GPIO direction (IN / OUT)
GPIO.setup(TRIG,GPIO.OUT)
GPIO.setup(ECHO,GPIO.IN)

# set Trigger to HIGH
GPIO.output(TRIG, True)
# set Trigger after 0.01ms to LOW
time.sleep(0.00001)
GPIO.output(TRIG, False)

StartTime = time.time()
StopTime = time.time()

while GPIO.input(ECHO) == 0:
  StartTime = time.time()
# save time of arrival
while GPIO.input(ECHO) == 1:
  StopTime = time.time()

# time difference between start and arrival
TimeElapsed = StopTime - StartTime
# multiply with the sonic speed (34300 cm/s)
# and divide by 2, because there and back
distance = (TimeElapsed * 34300) / 2

print "distance",distance,"cm"

GPIO.cleanup()