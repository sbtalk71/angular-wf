import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  emp:Emp={empId:1,name:"aaa",city:"xxx",salary:1}

  constructor(private _service:EmpService){

  }

  onSubmit(){
    this._service.addEmp(this.emp).subscribe(data=>console.log("Emp saved is ",data));
  }
}
