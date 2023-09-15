import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentData: string = "";

  @Output() public childEvent=new EventEmitter();

  greet: string = '';
  getGreet() {
    this.greet = "Greet received " + this.parentData;
  }

  fireEvent(){
    this.childEvent.emit("From Child : Hello Parent");
  }
}
