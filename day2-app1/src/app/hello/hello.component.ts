import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title: string = "Hello there";
  message:string="";

  sayHello(): String {
    return "Good Afternoon";
  }

  handleClick(data:string){
   this.message=data;
  }
  car = {
    model: "BMW",
    year: 1988,

  }
}
