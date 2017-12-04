import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef} from '@angular/core';

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
  @Output() onPress = new EventEmitter<any>();
  @Output() onRelease = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  mDown(btn:String) {
    this.onPress.emit({name: this.name, action: btn});
  }

  mUp(btn:String) {
    this.onRelease.emit({name: this.name, action: btn});
  }
}
