import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('viewer') viewer;
  canvas: any;
  socket: any;
  imageSrc: String = '';
  alert = 'drive savely!';
  constructor() {
    this.socket = io.connect();
  }
  ngOnInit() {
    this.canvas =  this.viewer.nativeElement.getContext('2d');

    console.log('canvas', this.canvas);
    this.listen();
    this.setImage( '/assets/etv.jpg' );
  }
  /**
   * Socket listen
   */
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

    this.socket.on('distance', (data) => {
      console.log('distance',data);
    });

    this.socket.on('newImage', (data) => {
      console.log('newImage',data);
    });
  }
  /**
   * Socket send
   */
  send( name: String, action: String ) {
    console.log('socket send', name, action);
    this.socket.emit(name, { name : action });
  }


  press(joystick: any) {
    this.send(joystick.name, joystick.action);
  }

  release(joystick: any){
    //console.log('release', joystick.name, joystick.action);
    //TODO
  }

  setImage( src ) {
    this.imageSrc = src;
  }
}
