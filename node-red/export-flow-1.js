[{"id":"b73134d9.084088","type":"twitter in","z":"8cef773c.20ace8","twitter":"","tags":"geometry","user":"false","name":"geometry","topic":"tweets","inputs":0,"x":100,"y":40,"wires":[[]]},{"id":"8105535.5ef74b","type":"debug","z":"8cef773c.20ace8","name":"","active":true,"console":"false","complete":"false","x":450,"y":80,"wires":[]},{"id":"296383e1.f304dc","type":"rpi-gpio out","z":"8cef773c.20ace8","name":"Red","pin":"12","set":"","level":"0","freq":"100","out":"out","x":343,"y":239,"wires":[]},{"id":"5528ce9f.23bd2","type":"inject","z":"8cef773c.20ace8","name":"On","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"x":130,"y":180,"wires":[["296383e1.f304dc","8105535.5ef74b"]]},{"id":"7a314688.37a408","type":"inject","z":"8cef773c.20ace8","name":"Off","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"x":110,"y":260,"wires":[["296383e1.f304dc","8105535.5ef74b"]]},{"id":"63f77de2.f85d14","type":"rpi-gpio in","z":"8cef773c.20ace8","name":"Button","pin":"22","intype":"up","debounce":"25","read":false,"x":70,"y":400,"wires":[["e430cf8b.e0c5e"]]},{"id":"e430cf8b.e0c5e","type":"switch","z":"8cef773c.20ace8","name":"if input is 1","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"1","vt":"str"},{"t":"else"}],"checkall":"true","outputs":2,"x":246.5,"y":407,"wires":[["18b33762.fa1ed9"],["e674d37e.abf39"]]},{"id":"18b33762.fa1ed9","type":"change","z":"8cef773c.20ace8","name":"Change to 0","rules":[{"t":"set","p":"payload","pt":"msg","to":"0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":436.5,"y":375,"wires":[["296383e1.f304dc","6fc0a3da.1a977c"]]},{"id":"e674d37e.abf39","type":"change","z":"8cef773c.20ace8","name":"Change to 1","rules":[{"t":"set","p":"payload","pt":"msg","to":"1","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":430,"y":420,"wires":[["296383e1.f304dc","6fc0a3da.1a977c"]]},{"id":"6fc0a3da.1a977c","type":"rpi-gpio out","z":"8cef773c.20ace8","name":"Trig OUT","pin":"38","set":"","level":"0","freq":"","out":"out","x":660,"y":500,"wires":[]},{"id":"4360a537.c32e6c","type":"rpi-gpio in","z":"8cef773c.20ace8","name":"Echo IN","pin":"40","intype":"tri","debounce":"25","read":false,"x":270,"y":60,"wires":[["8105535.5ef74b"]]},{"id":"e1139154.2a1df","type":"inject","z":"8cef773c.20ace8","name":"Forward","topic":"","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":96.5,"y":563,"wires":[["98fa9db8.16c2c"]]},{"id":"76664bd5.020a14","type":"inject","z":"8cef773c.20ace8","name":"Backward","topic":"","payload":"2","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":101.5,"y":624,"wires":[["98fa9db8.16c2c"]]},{"id":"4eaa1e7b.33fe6","type":"serial in","z":"8cef773c.20ace8","name":"Arduino IN","serial":"303c81dd.b9c2ee","x":172.5,"y":816,"wires":[["8105535.5ef74b"]]},{"id":"98fa9db8.16c2c","type":"serial out","z":"8cef773c.20ace8","name":"Arduino OUT","serial":"303c81dd.b9c2ee","x":389.5,"y":580,"wires":[]},{"id":"d771acdc.367e2","type":"inject","z":"8cef773c.20ace8","name":"Stop","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":96.5,"y":508,"wires":[["98fa9db8.16c2c"]]},{"id":"1b0d35e5.1a546a","type":"inject","z":"8cef773c.20ace8","name":"Right","topic":"","payload":"3","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":101.5,"y":682,"wires":[["98fa9db8.16c2c"]]},{"id":"5e62fde1.f6d644","type":"inject","z":"8cef773c.20ace8","name":"Left","topic":"","payload":"4","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":109.5,"y":747,"wires":[["98fa9db8.16c2c"]]},{"id":"303c81dd.b9c2ee","type":"serial-port","z":"","serialport":"/dev/ttyACM1","serialbaud":"9600","databits":"8","parity":"none","stopbits":"1","newline":"\\n","bin":"false","out":"char","addchar":true}]