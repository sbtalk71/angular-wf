import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  isDisabled:boolean=true;
  disabled:string="failure";
  enabled:string="success";
  data:string="";

  myButtonStyle:string="border:5px solid blue;background-color:magenta;";

  message:string="";

  toggle(){
    this.isDisabled=this.isDisabled?false:true;
  }

  getData(data:string){
    this.message=data;
  }

  onChange(data:string){
    this.message=data;
  }
}
