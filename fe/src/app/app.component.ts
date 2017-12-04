import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('viewer') viewer;
  title = 'app';
  constructor(private socketService:SocketService) {

  }
  ngOnInit() {
    console.log('poly', this.viewer)
  }
}
