import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-find-emp',
  templateUrl: './find-emp.component.html',
  styleUrls: ['./find-emp.component.css']
})
export class FindEmpComponent {

  emp:Emp;
  message:string='';
  constructor(private _service:EmpService){

  }
  handleFindEmp(id:string){
    this._service.findEmpById(parseInt(id)).subscribe({
     next: data=>{this.emp=data;this.message=''},
     error:err=>this.handleError(err)
    });
  }

  handleError(err:Error){
    this.message=err.message;
  }
}
