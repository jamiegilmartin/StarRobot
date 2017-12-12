'use strict';

const Hapi = require('hapi');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const Pack = require('./package');
const cron = require('node-cron');
const serialport = require("serialport");

const SocketController = require('./controllers/socket.controller');
const SerialController = require('./controllers/serial.controller');
const CameraController = require('./controllers/camera.controller');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 9393
});

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  //serve files from temp
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      console.log(chalk.bold.green('req'), request.params);

      reply.file('public/index.html');
    }
  });
  server.route({
    method: 'GET',
    path:'/{filename}',
    handler: function (request, reply) {
      console.log(chalk.bold.green('req'), request.params);

      reply.file('public/' + request.params.filename);
    }
  });
  server.route({
    method: 'GET',
    path:'/assets/{filename}',
    handler: function (request, reply) {
      console.log(chalk.bold.green('req'), request.params);
      reply.file('public/assets/' + request.params.filename);
    }
  });
  server.route({
    method: 'GET',
    path:'/assets/fonts/{filename}',
    handler: function (request, reply) {
      console.log(chalk.bold.green('req'), request.params);
      reply.file('public/assets/fonts/' + request.params.filename);
    }
  });
  server.route({
    method: 'GET',
    path:'/assets/images/{filename}',
    handler: function (request, reply) {
      console.log(chalk.bold.green('req'), request.params);
      reply.file('public/assets/images/' + request.params.filename);
    }
  });
  server.start( (err) => {
    if (err) {
      console.log( err);
    } else {
      console.log( 'Server running at:', server.info.uri);

      const io = require('socket.io')(server.listener);
      SocketController.init(io);
      SerialController.init();
      CameraController.init();
    }
  });
});
