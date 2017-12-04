import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { SocketService } from './services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('viewer') viewer;
  alert = 'drive savely!';
  constructor(private socketService:SocketService) {

  }
  ngOnInit() {
    console.log('poly', this.viewer)
  }

  press(joystick: any) {
    console.log('press', joystick.name, joystick.action);
    this.socketService
  }

  release(joystick: any){
    console.log('release', joystick.name, joystick.action);
  }
}
