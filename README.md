StarRobot
=========

###A *Solar* *Tracking* *Arduino* *Raspberrypi* Robot

Because sometime we go years in between commits :laugh:
```
npm i --save body-parser cookie-parser express express-handlebars express-session handlebars  mespeak morgan q  serialport  serve-favicon socket.io
```


### Arduino

## Motor
https://www.luisllamas.es/wp-content/uploads/2016/08/arduino-TB6612FNG-esquema.png
***
## Tri LED
https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/experiment-3-driving-an-rgb-led

## Soft Pot
https://learn.sparkfun.com/tutorials/softpot-hookup-guide





####Pi Setup

- Find your IP https://learn.adafruit.com/adafruits-raspberry-pi-lesson-3-network-setup/finding-your-pis-ip-address

-Bonjour `sudo apt-get install libnss-mdns` : test `ping -c 4 raspberrypi.local` || `ssh pi@raspberrypi.local`

-Dropbox Uploader

https://github.com/andreafabrizi/Dropbox-Uploader

pi@raspberrypi /usr/bin $

`sudo ln -s /usr/local/bin/Dropbox-Uploader/dropbox_uploader.sh dbu.sh`

`sudo /usr/bin/dbu.sh upload cam.jpg cam.jpg`

NVM https://github.com/blobsmith/raspberryTestNode/wiki/Node.js-installation-with-nvm-on-Raspberry-pi

-Camera commands `raspistill -o cam.jpg` alt http://iharder.sourceforge.net/current/macosx/imagesnap/

Circuit https://learn.adafruit.com/minty-boost

Uno https://arduino-info.wikispaces.com/file/view/ArduinoUNO-900.jpg/421496636/ArduinoUNO-900.jpg

Arduino Command line tool http://inotool.org/ https://github.com/amperka/ino/issues/252`sudo apt-get install python-pip sudo pip install glob2\` Install with python-pip! http://inotool.org/quickstart

Find SerialPort

`dmesg | grep tty` http://www.instructables.com/id/Read-and-write-from-serial-port-with-Raspberry-Pi/


mintyboost
https://cdn-learn.adafruit.com/downloads/pdf/minty-boost.pdf



https://github.com/fivdi/onoff


https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi

http://www.instructables.com/id/How-to-use-a-Flex-Sensor-Arduino-Tutorial/


https://learn.sparkfun.com/tutorials/flex-sensor-hookup-guide
https://learn.sparkfun.com/tutorials/softpot-hookup-guide
https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/experiment-3-driving-an-rgb-led

https://www.google.de/imgres?imgurl=https://cdn.sparkfun.com/assets/learn_tutorials/3/1/0/Arduino_circuit_02_01.png&imgrefurl=https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/experiment-3-driving-an-rgb-led&h=1047&w=2073&tbnid=0JOh5K_lyKoXOM:&tbnh=106&tbnw=211&usg=__ZsTk9E7N3HKe04De-blwpHl5PK4%3D&vet=10ahUKEwj3jfvruPHXAhViOpoKHZQQBVIQ9QEIKzAA..i&docid=X0LiPY1KB_U2wM&sa=X&ved=0ahUKEwj3jfvruPHXAhViOpoKHZQQBVIQ9QEIKzAA

https://thepihut.com/blogs/raspberry-pi-tutorials/17841464-bluetooth-installing-and-using-bluetooth-on-the-raspberry-pi


//temp
http://www.circuitbasics.com/how-to-set-up-the-dht11-humidity-sensor-on-the-raspberry-pi/
https://randomnerdtutorials.com/complete-guide-for-dht11dht22-humidity-and-temperature-sensor-with-arduino/

https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2015/05/humidity_schematics.jpg

//motor controller
https://learn.sparkfun.com/tutorials/tb6612fng-hookup-guide?_ga=2.28578495.2097010660.1512461733-1721556105.1510742216
https://www.luisllamas.es/wp-content/uploads/2016/08/arduino-TB6612FNG-esquema.png



batteries
http://www.instructables.com/id/Arduino-Battery-Voltage-Indicator/


