import { Component,OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  
})
export class EmplistComponent implements OnInit {

  empdata!:Emp[];

  selectedEmp!:Emp
  constructor(private _service:EmpService){

  }

  ngOnInit(): void {
    this.empdata=this._service.getEmpList();
  }

  getEmp(emp:Emp){
    console.log(emp);
    this.selectedEmp=emp;
  }


}
