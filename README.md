StarRobot
=========

###A *Solar* *Tracking* *Arduino* *Raspberrypi* Robot

***

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
