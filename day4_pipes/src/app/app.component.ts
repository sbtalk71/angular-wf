import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = "Pipes Demo Page";
  name = "Shantanu";
  newName = '';
  constructor(private uppercase: UpperCasePipe) {
    this.newName = uppercase.transform(this.name);
  }
  employee = {
    id: 100, name: 'Shantanu', location: 'Hyderabad', children: [{
      name: 'Ankur', age: 20
    }, { name: 'Antaraa', age: 16 }]
  }

  currentDate: Date = new Date();
}
