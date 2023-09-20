import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  submitted:boolean=false;
student:Student={studentName:"",email:'',phone:99999999,slot:"",courseName:'',notify:false};
courses:string[]=["java","Python","C Sharp","Scala","Grrovy","Ruby","JavaScript"];

onSubmit(){
  console.log(this.student);
  this.submitted=true;
}
}
