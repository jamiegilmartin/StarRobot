[{"id":"15a67db9.941fc2","type":"twitter in","z":"f3bdfc69.cadea","twitter":"","tags":"geometry","user":"false","name":"geometry","topic":"tweets","inputs":0,"x":86,"y":76,"wires":[[]]},{"id":"78063e44.f0ef9","type":"debug","z":"f3bdfc69.cadea","name":"","active":true,"console":"false","complete":"false","x":943,"y":69,"wires":[]},{"id":"a6c66e80.a6bee","type":"rpi-gpio out","z":"f3bdfc69.cadea","name":"Red","pin":"12","set":"","level":"0","freq":"100","out":"out","x":533,"y":230,"wires":[]},{"id":"a88bb706.2f6138","type":"inject","z":"f3bdfc69.cadea","name":"On","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"x":115,"y":218,"wires":[["a6c66e80.a6bee","78063e44.f0ef9"]]},{"id":"80b4ba70.853568","type":"inject","z":"f3bdfc69.cadea","name":"Off","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"x":95,"y":298,"wires":[["a6c66e80.a6bee","78063e44.f0ef9"]]},{"id":"bd58d844.3bb688","type":"rpi-gpio in","z":"f3bdfc69.cadea","name":"Button","pin":"22","intype":"up","debounce":"25","read":false,"x":55,"y":438,"wires":[["4a12593.0464da8"]]},{"id":"4a12593.0464da8","type":"switch","z":"f3bdfc69.cadea","name":"if input is 1","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"1","vt":"str"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":205.5,"y":407,"wires":[["d08d28f2.3e42d8","3eb6a778.15cac8"],["df23784.68d6488","3eb6a778.15cac8"]]},{"id":"d08d28f2.3e42d8","type":"change","z":"f3bdfc69.cadea","name":"Change to 0","rules":[{"t":"set","p":"payload","pt":"msg","to":"0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":331.5,"y":331,"wires":[["a6c66e80.a6bee","1ee441c0.2ba68e","4ac0dd43.4dd9a4"]]},{"id":"df23784.68d6488","type":"change","z":"f3bdfc69.cadea","name":"Change to 1","rules":[{"t":"set","p":"payload","pt":"msg","to":"1","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":401,"y":476,"wires":[["a6c66e80.a6bee","1ee441c0.2ba68e","4ac0dd43.4dd9a4"]]},{"id":"1ee441c0.2ba68e","type":"rpi-gpio out","z":"f3bdfc69.cadea","name":"Trig OUT","pin":"38","set":"","level":"0","freq":"","out":"out","x":562,"y":407,"wires":[]},{"id":"3a970e2b.534402","type":"rpi-gpio in","z":"f3bdfc69.cadea","name":"Echo IN","pin":"40","intype":"tri","debounce":"25","read":false,"x":261,"y":124,"wires":[["78063e44.f0ef9"]]},{"id":"4483304d.2819c","type":"inject","z":"f3bdfc69.cadea","name":"Forward","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":79.5,"y":601,"wires":[["e109af8a.574ff"]]},{"id":"cc59fb88.6c82c8","type":"inject","z":"f3bdfc69.cadea","name":"Backward","topic":"","payload":"2","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":86.5,"y":662,"wires":[["e109af8a.574ff"]]},{"id":"710f67d2.86c788","type":"serial in","z":"f3bdfc69.cadea","name":"From Arduino","serial":"ddbe67b3.915ee8","x":288.5,"y":41,"wires":[["6c0a209c.7001c"]]},{"id":"e109af8a.574ff","type":"serial out","z":"f3bdfc69.cadea","name":"To Arduino","serial":"ddbe67b3.915ee8","x":535.5,"y":658,"wires":[]},{"id":"b44fb784.184758","type":"inject","z":"f3bdfc69.cadea","name":"Stop","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":82.5,"y":538,"wires":[["e109af8a.574ff"]]},{"id":"52afcd05.51c0b4","type":"inject","z":"f3bdfc69.cadea","name":"Right","topic":"","payload":"3","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":86.5,"y":720,"wires":[["e109af8a.574ff"]]},{"id":"ce8cc6de.e07518","type":"inject","z":"f3bdfc69.cadea","name":"Left","topic":"","payload":"4","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":94.5,"y":785,"wires":[["e109af8a.574ff"]]},{"id":"3eb6a778.15cac8","type":"rpi-gpio out","z":"f3bdfc69.cadea","name":"Green","pin":"16","set":"","level":"0","freq":"","out":"out","x":544.5,"y":280,"wires":[]},{"id":"4ac0dd43.4dd9a4","type":"rpi-gpio out","z":"f3bdfc69.cadea","name":"Blue","pin":"18","set":"","level":"0","freq":"","out":"out","x":549.5,"y":343,"wires":[]},{"id":"2e10e84c.32f608","type":"inject","z":"f3bdfc69.cadea","name":"Up","topic":"","payload":"5","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":75.5,"y":939,"wires":[["e109af8a.574ff"]]},{"id":"72927e9a.6027","type":"inject","z":"f3bdfc69.cadea","name":"Down","topic":"","payload":"6","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":76.5,"y":994,"wires":[["e109af8a.574ff"]]},{"id":"70fea949.a48bc8","type":"inject","z":"f3bdfc69.cadea","name":"Track Left","topic":"","payload":"7","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":94.5,"y":1046,"wires":[["e109af8a.574ff"]]},{"id":"c934be26.f4f81","type":"inject","z":"f3bdfc69.cadea","name":"Track Right","topic":"","payload":"8","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":93.5,"y":1099,"wires":[["e109af8a.574ff"]]},{"id":"b63961c7.71b52","type":"inject","z":"f3bdfc69.cadea","name":"Every5sec","topic":"","payload":"","payloadType":"date","repeat":"5","crontab":"","once":false,"onceDelay":0.1,"x":430.5,"y":556,"wires":[["f7819c87.8c6de"]]},{"id":"f7819c87.8c6de","type":"function","z":"f3bdfc69.cadea","name":"random","func":"//msg\nrand = Math.round(Math.random() * 100);\n//msg.payload = \"#numb: \"+rand + \"\\n\";\n\nif(rand % 2 === 0){\n    msg.payload = \"#true \\n\";\n}else {\n    msg.payload = \"#false \\n\";\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":994.5,"y":341,"wires":[["a8e34711.998208"]]},{"id":"f13f68db.e10e18","type":"camerapi-takephoto","z":"f3bdfc69.cadea","filemode":"0","filename":"","filedefpath":"1","filepath":"","fileformat":"jpeg","resolution":"1","rotation":"0","fliph":"0","flipv":"0","brightness":"50","contrast":"0","sharpness":"0","imageeffect":"none","name":"","x":994.5,"y":602,"wires":[["58c2f258.9dbf5c"]]},{"id":"ccc7259c.7ff1a8","type":"http in","z":"f3bdfc69.cadea","name":"get image","url":"/image","method":"get","upload":false,"swaggerDoc":"","x":786.5,"y":638,"wires":[["f13f68db.e10e18"]]},{"id":"58c2f258.9dbf5c","type":"http response","z":"f3bdfc69.cadea","name":"imageOut","statusCode":"","headers":{"content-type":"image/png"},"x":1181.5,"y":641,"wires":[]},{"id":"78be5162.d0e23","type":"socketio-connector","z":"f3bdfc69.cadea","server":"","namespace":"","name":"","x":790.5,"y":729,"wires":[[]]},{"id":"a8e34711.998208","type":"exec","z":"f3bdfc69.cadea","command":"vcgencmd measure_temp","addpay":false,"append":"","useSpawn":"false","timer":"","oldrc":false,"name":"Rπ Temp","x":1091.5,"y":423.5,"wires":[[],[],[]]},{"id":"bd334918.d4fd38","type":"exec","z":"f3bdfc69.cadea","command":"node ./Documents/etv-objectifier/index.js","addpay":false,"append":"","useSpawn":"false","timer":"","oldrc":false,"name":"","x":1207.5,"y":483.5,"wires":[["78063e44.f0ef9"],[],[]]},{"id":"d022fb7f.7ccd38","type":"exec","z":"f3bdfc69.cadea","command":"python ./Documents/etv-objectifier/test.py","addpay":false,"append":"","useSpawn":"false","timer":"","oldrc":false,"name":"","x":1237,"y":550.5,"wires":[["78063e44.f0ef9"],[],[]]},{"id":"6c0a209c.7001c","type":"function","z":"f3bdfc69.cadea","name":"split string","func":"\nstr = msg.payload;\nval = '';\nif(str.indexOf('FB_') > -1){\n    val = str.split('FB_')[1];\n}\nif(str.indexOf('RL_') > -1){\n    val = str.split('RL_')[1];\n}\n\n\nreturn msg;","outputs":1,"noerr":0,"x":558,"y":49,"wires":[["78063e44.f0ef9"]]},{"id":"ddbe67b3.915ee8","type":"serial-port","z":"","serialport":"/dev/ttyACM0","serialbaud":"9600","databits":"8","parity":"none","stopbits":"1","newline":"\\n","bin":"false","out":"char","addchar":false}]