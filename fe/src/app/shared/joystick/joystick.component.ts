import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit {
  @Input() name;
  @Input() up;
  @Input() down;
  @Input() left;
  @Input() right;

  constructor() { }

  ngOnInit() {
  }

  mUp(btn:String) {
    console.log('mUp:', btn);
  }

  mDown(btn:String) {
    console.log('mDown:', btn);
  }
}
