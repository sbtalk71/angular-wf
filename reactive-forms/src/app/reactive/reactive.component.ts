import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { illegalNameValidator } from '../illegalNameValidator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  courses: string[] = ["java", "Python", "C Sharp", "Scala", "Grrovy", "Ruby", "JavaScript"];

  regForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.initForm1();
  }

 initForm() {
this.regForm=new FormGroup({
  studentName:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',Validators.required),
  courseName:new FormControl(''),
  slot:new FormControl(''),
  notify:new FormControl(''),
})
}

  initForm1(){
    this.regForm=this.fb.group({
      studentName:['',[Validators.required,illegalNameValidator(/bob/i)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      courseName:[''],
      slot:[''],
      notify:[''],
      references:this.fb.array([this.fb.control('')])
    })
  }

get studentName(){
  return this.regForm.get('studentName');
}
  
get email(){
  return this.regForm.get('email');
}

get references(): FormArray{
  return this.regForm.get('references') as FormArray;
}

removeEmail(index:number){
  this.references.removeAt(index);
}

addEmail(){
  this.references.push(this.fb.control(''));
}
  onSubmit() {
    console.log(this.regForm.get('studentName')?.value);
    console.log(this.regForm.value);
  }

}