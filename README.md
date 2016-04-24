### StarRobot

============

Solar Tracking Arduino Raspberrypi Robot

###Pi Setup

-Find your IP https://learn.adafruit.com/adafruits-raspberry-pi-lesson-3-network-setup/finding-your-pis-ip-address

-Bonjour `sudo apt-get install libnss-mdns` : test `ping -c 4 raspberrypi.local` || `ssh pi@raspberrypi.local`

-Dropbox Uploader

https://github.com/andreafabrizi/Dropbox-Uploader

pi@raspberrypi /usr/bin $

`sudo ln -s /usr/local/bin/Dropbox-Uploader/dropbox_uploader.sh dbu.sh`

`sudo /usr/bin/dbu.sh upload cam.jpg cam.jpg`

-Camera commands `raspistill -o cam.jpg`
