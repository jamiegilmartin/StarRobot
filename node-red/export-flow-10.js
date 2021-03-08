[{"id":"6ff674cf.0a554c","type":"serial in","z":"6f9f8a61.a7a0f4","name":"From Arduino","serial":"fd52c349.b3f79","x":75,"y":245,"wires":[["a80fc5aa.cf4cc8"]]},{"id":"d657f4c.17e4d08","type":"serial out","z":"6f9f8a61.a7a0f4","name":"To Arduino","serial":"fd52c349.b3f79","x":1121.4444274902344,"y":399.88890266418457,"wires":[]},{"id":"1ef434b.5f990cb","type":"debug","z":"6f9f8a61.a7a0f4","name":"debug","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":1070.555564880371,"y":600.7777585983276,"wires":[]},{"id":"a81ae69e.466708","type":"inject","z":"6f9f8a61.a7a0f4","name":"Check Sensors","topic":"","payload":">>>","payloadType":"str","repeat":"5","crontab":"","once":false,"onceDelay":0.1,"x":535.3889083862305,"y":279.11109161376953,"wires":[["a6a95f0a.106ea"]]},{"id":"7391954.fc5006c","type":"function","z":"6f9f8a61.a7a0f4","name":"Stop","func":"msg.payload = 0;\nreturn msg;","outputs":1,"noerr":0,"x":347.5476264953613,"y":985.5872459411621,"wires":[["a6a95f0a.106ea","c4b5017f.d322e"]]},{"id":"3b563fb6.9d099","type":"function","z":"6f9f8a61.a7a0f4","name":"Forward","func":"msg.payload = 1;\nreturn msg;","outputs":1,"noerr":0,"x":344.21429443359375,"y":1052.142822265625,"wires":[["a6a95f0a.106ea","2653e17e.aa8e8e","9987a58d.5b5228"]]},{"id":"95253a45.62a898","type":"function","z":"6f9f8a61.a7a0f4","name":"Backward","func":"msg.payload = 2;\nreturn msg;","outputs":1,"noerr":0,"x":349.21429443359375,"y":1107.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"11033459.7ac43c","type":"function","z":"6f9f8a61.a7a0f4","name":"Left","func":"msg.payload = 3;\nreturn msg;","outputs":1,"noerr":0,"x":349.21429443359375,"y":1163.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"ad81b55e.563508","type":"function","z":"6f9f8a61.a7a0f4","name":"Right","func":"msg.payload = 4;\nreturn msg;","outputs":1,"noerr":0,"x":342.21429443359375,"y":1214.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"a80fc5aa.cf4cc8","type":"function","z":"6f9f8a61.a7a0f4","name":"Parse Arduino","func":"input = msg.payload;\nfb = 0;\nrl = 0;\ncm = 0;\nrl_range = 10;\n\nif (input.indexOf('CM_') > -1){\n    cm = Number(input.split('CM_')[1]);\n    msg.payload = cm;\n    if (cm < 5){\n        return [msg, null, null,null, null];\n    }\n} else {\n    //parse front back\n    if (input.indexOf('FB_') > -1) {\n        fb = Number(input.split('FB_')[1]);\n        msg.payload = fb;\n        if (fb > (180 * 0.5)) {\n            //go forward\n            return [null, msg, null, null, null];\n        } else {\n            //go backwards\n            return [null, null, msg, null, null];\n        }\n    }\n    \n    //parse left right\n    if (input.indexOf('RL_') > -1) { //find 'RL_' in string\n        rl = Number(input.split('RL_')[1]);\n        msg.payload = rl;\n        if (rl > (180 * 0.5) + rl_range) {\n            //left\n            return [null, null, null, msg, null];\n        } else if (rl < (180 * 0.5) - rl_range){\n            //right\n            return [null, null, null,null, msg];\n        }\n    }\n}\n\n\n\n","outputs":5,"noerr":0,"x":200.75397491455078,"y":412.0952453613281,"wires":[["74bd4656.e42b18"],["f4bcd0e0.cd50e"],["a4c7b939.e8dd48"],["58c485ab.caa01c"],["3f292bea.ca9a54"]]},{"id":"abbac25f.4dda6","type":"inject","z":"6f9f8a61.a7a0f4","name":"Stop","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":95.21429443359375,"y":1009.142822265625,"wires":[["7391954.fc5006c"]]},{"id":"bc1fb9d1.bccc08","type":"inject","z":"6f9f8a61.a7a0f4","name":"Forward","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":104.71429443359375,"y":1055.142822265625,"wires":[["3b563fb6.9d099"]]},{"id":"b0875f38.87bb6","type":"inject","z":"6f9f8a61.a7a0f4","name":"Backward","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":104.71429443359375,"y":1104.142822265625,"wires":[["95253a45.62a898"]]},{"id":"55b7366b.20a218","type":"inject","z":"6f9f8a61.a7a0f4","name":"Left","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":96.71429443359375,"y":1153.142822265625,"wires":[["11033459.7ac43c"]]},{"id":"c7b232c9.52c31","type":"inject","z":"6f9f8a61.a7a0f4","name":"Right","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":97.71429443359375,"y":1208.142822265625,"wires":[["ad81b55e.563508"]]},{"id":"a6a95f0a.106ea","type":"function","z":"6f9f8a61.a7a0f4","name":"","func":"\nreturn msg;","outputs":1,"noerr":0,"x":746.5,"y":394,"wires":[["f73806ef.ee6688"]]},{"id":"dab03945.2c9cf8","type":"inject","z":"6f9f8a61.a7a0f4","name":"Track Up","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":111.71429443359375,"y":1297.142822265625,"wires":[["f4579903.3205d8"]]},{"id":"2fbac50b.4459ea","type":"inject","z":"6f9f8a61.a7a0f4","name":"Track Down","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":118.71429443359375,"y":1346.142822265625,"wires":[["2073c393.b55e9c"]]},{"id":"aa15a48c.4cb658","type":"inject","z":"6f9f8a61.a7a0f4","name":"Track Left","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110.71429443359375,"y":1395.142822265625,"wires":[["b779d868.920948"]]},{"id":"4302bf70.222dd","type":"inject","z":"6f9f8a61.a7a0f4","name":"Track Right","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":111.71429443359375,"y":1450.142822265625,"wires":[["e1bc4c8f.e71e1"]]},{"id":"f4579903.3205d8","type":"function","z":"6f9f8a61.a7a0f4","name":"Track Up","func":"msg.payload = 5;\nreturn msg;","outputs":1,"noerr":0,"x":316.71429443359375,"y":1286.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"2073c393.b55e9c","type":"function","z":"6f9f8a61.a7a0f4","name":"Track Down ","func":"msg.payload = 6;\nreturn msg;","outputs":1,"noerr":0,"x":331.71429443359375,"y":1341.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"b779d868.920948","type":"function","z":"6f9f8a61.a7a0f4","name":"Track Left","func":"msg.payload = 7;\nreturn msg;","outputs":1,"noerr":0,"x":331.71429443359375,"y":1397.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"e1bc4c8f.e71e1","type":"function","z":"6f9f8a61.a7a0f4","name":"Track Right","func":"msg.payload = 8;\nreturn msg;","outputs":1,"noerr":0,"x":334.71429443359375,"y":1448.142822265625,"wires":[["a6a95f0a.106ea"]]},{"id":"74bd4656.e42b18","type":"function","z":"6f9f8a61.a7a0f4","name":"Ultra Sonic","func":"msg.payload = \"Ultra Sonic: \" + msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":200.55555725097656,"y":542.2222499847412,"wires":[["95253a45.62a898","149a8052.c5419"]]},{"id":"58c485ab.caa01c","type":"function","z":"6f9f8a61.a7a0f4","name":"Left Light Sensor","func":"msg.payload = \"Left: \" + msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":221.66665267944336,"y":741.1110801696777,"wires":[["11033459.7ac43c","149a8052.c5419"]]},{"id":"3f292bea.ca9a54","type":"function","z":"6f9f8a61.a7a0f4","name":"Right Light Sensor","func":"msg.payload = \"Right: \" + msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":224.99999237060547,"y":800.0000801086426,"wires":[["ad81b55e.563508","149a8052.c5419"]]},{"id":"f4bcd0e0.cd50e","type":"function","z":"6f9f8a61.a7a0f4","name":"Forward Light Sensor","func":"msg.payload = \"Forward: \" + msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":245.99998474121094,"y":602.3333740234375,"wires":[["3b563fb6.9d099","149a8052.c5419"]]},{"id":"a4c7b939.e8dd48","type":"function","z":"6f9f8a61.a7a0f4","name":"Backward Light Sensor","func":"msg.payload = \"Backward: \" + msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":246.11110305786133,"y":667.7777233123779,"wires":[["95253a45.62a898","149a8052.c5419"]]},{"id":"c4b5017f.d322e","type":"rpi-gpio out","z":"6f9f8a61.a7a0f4","name":"Red","pin":"12","set":"","level":"0","freq":"100","out":"out","x":647.222240447998,"y":1859.9998893737793,"wires":[]},{"id":"2d8d3975.66b846","type":"inject","z":"6f9f8a61.a7a0f4","name":"On","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":291.44444274902344,"y":1818.3332443237305,"wires":[["c4b5017f.d322e"]]},{"id":"de6e48c2.b8f8c8","type":"inject","z":"6f9f8a61.a7a0f4","name":"Off","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":290.1111145019531,"y":1850.9999084472656,"wires":[["c4b5017f.d322e"]]},{"id":"c675e9c0.d4e178","type":"change","z":"6f9f8a61.a7a0f4","name":"Change to 0","rules":[{"t":"set","p":"payload","pt":"msg","to":"0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":293.9444580078125,"y":2081.6665649414062,"wires":[["c4b5017f.d322e","9987a58d.5b5228"]]},{"id":"782dd8da.b12448","type":"change","z":"6f9f8a61.a7a0f4","name":"Change to 1","rules":[{"t":"set","p":"payload","pt":"msg","to":"1","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":293.4444580078125,"y":2131.333221435547,"wires":[["c4b5017f.d322e","9987a58d.5b5228"]]},{"id":"488bd333.25995c","type":"switch","z":"6f9f8a61.a7a0f4","name":"if input is 1","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"1","vt":"str"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":115.27777099609375,"y":2100.9999084472656,"wires":[["c675e9c0.d4e178","2653e17e.aa8e8e"],["782dd8da.b12448","2653e17e.aa8e8e"]]},{"id":"9987a58d.5b5228","type":"rpi-gpio out","z":"6f9f8a61.a7a0f4","name":"Blue","pin":"18","set":false,"level":"1","freq":"","out":"out","x":650.722240447998,"y":1985.6665153503418,"wires":[]},{"id":"8077e760.fcd188","type":"rpi-gpio in","z":"6f9f8a61.a7a0f4","name":"Button","pin":"22","intype":"up","debounce":"25","read":false,"x":102.77777099609375,"y":2036.7776947021484,"wires":[["488bd333.25995c"]]},{"id":"2653e17e.aa8e8e","type":"rpi-gpio out","z":"6f9f8a61.a7a0f4","name":"Green","pin":"16","set":"","level":"0","freq":"","out":"out","x":660.5000114440918,"y":1922.888744354248,"wires":[]},{"id":"31a85709.14e5c8","type":"inject","z":"6f9f8a61.a7a0f4","name":"On","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":285.77777099609375,"y":1970.9999084472656,"wires":[["9987a58d.5b5228"]]},{"id":"ecf4a1c5.7215","type":"inject","z":"6f9f8a61.a7a0f4","name":"Off","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":286.44444274902344,"y":2008.6665802001953,"wires":[["9987a58d.5b5228"]]},{"id":"7e5cf488.f95a5c","type":"inject","z":"6f9f8a61.a7a0f4","name":"On","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":284.77777099609375,"y":1891.9999084472656,"wires":[["2653e17e.aa8e8e"]]},{"id":"1da6c919.7862b7","type":"inject","z":"6f9f8a61.a7a0f4","name":"Off","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":285.44444274902344,"y":1924.6665802001953,"wires":[["2653e17e.aa8e8e"]]},{"id":"dc6f52be.e15d9","type":"http response","z":"6f9f8a61.a7a0f4","name":"imageOut","statusCode":"","headers":{"content-type":"image/png"},"x":513.3333129882812,"y":1713.333251953125,"wires":[]},{"id":"5e3ebe86.adbf5","type":"camerapi-takephoto","z":"6f9f8a61.a7a0f4","filemode":"0","filename":"","filedefpath":"1","filepath":"","fileformat":"jpeg","resolution":"1","rotation":"0","fliph":"0","flipv":"0","brightness":"50","contrast":"0","sharpness":"0","imageeffect":"none","name":"","x":311.33331298828125,"y":1642.333251953125,"wires":[["dc6f52be.e15d9"]]},{"id":"c0d74c93.b3ab","type":"http in","z":"6f9f8a61.a7a0f4","name":"get image","url":"/image","method":"get","upload":false,"swaggerDoc":"","x":121.33331298828125,"y":1593.333251953125,"wires":[["5e3ebe86.adbf5"]]},{"id":"e58e78c9.5e1018","type":"exec","z":"6f9f8a61.a7a0f4","command":"vcgencmd measure_temp","addpay":false,"append":"","useSpawn":"false","timer":"","oldrc":false,"name":"Rπ Temp","x":216.66665649414062,"y":2257.777587890625,"wires":[[],[],[]]},{"id":"13c0ca60.8a8106","type":"exec","z":"6f9f8a61.a7a0f4","command":"python ./Documents/etv-objectifier/yeah-world/node-red-io.py","addpay":false,"append":"","useSpawn":"false","timer":"","oldrc":false,"name":"","x":480.3888854980469,"y":2450.333106994629,"wires":[[],[],[]]},{"id":"f73806ef.ee6688","type":"delay","z":"6f9f8a61.a7a0f4","name":"","pauseType":"rate","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":931.6666946411133,"y":352.2221984863281,"wires":[["d657f4c.17e4d08"]]},{"id":"54d72a63.9e22e4","type":"rpi-gpio in","z":"6f9f8a61.a7a0f4","name":"Temperature","pin":"29","intype":"tri","debounce":"25","read":false,"x":774.666748046875,"y":844.2222900390625,"wires":[["1ef434b.5f990cb"]]},{"id":"149a8052.c5419","type":"function","z":"6f9f8a61.a7a0f4","name":"","func":"\nreturn msg;","outputs":1,"noerr":0,"x":725.5,"y":614,"wires":[["1ef434b.5f990cb"]]},{"id":"fd52c349.b3f79","type":"serial-port","z":"","serialport":"/dev/ttyACM0","serialbaud":"9600","databits":"8","parity":"none","stopbits":"1","newline":"\\n","bin":"false","out":"char","addchar":false}]