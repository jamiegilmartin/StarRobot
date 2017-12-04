import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket: any;  // tslint:disable-line:no-any
  callback: any;  // tslint:disable-line:no-any
  constructor() {

    this.socket = io.connect( );
    this.listen();
  }

  listen() {
    console.log('socket listening', this.socket);

    this.socket.on('connect', (data) => {
      // socket connected
      console.log( 'this.socket', this.socket.id, this.socket, data );
    });

    this.socket.on('userConnected', (data) => {
      console.log('userConnected',data);
    });

    this.socket.on('userDisconnected', (data) => {
      console.log('userDisconnected',data);
    });
  }

  train(type: number) {
    this.socket.emit('train', {type: type });
  }
  stopTraining(type: number) {
    this.socket.emit('stopTraining', {type: type });
  }
  clear() {
    this.socket.emit('clear', {});
  }
  go() {
    this.socket.emit('go', {});
  }

}
