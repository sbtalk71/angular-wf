import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {

  emp: Emp = { empId: 1, name: "aaa", city: "xxx", salary: 1 }

  found: boolean = false;
  constructor(private _service: EmpService) {

  }

  onSubmit() {
    this._service.updateEmp(this.emp).subscribe(data => console.log("Emp saved is ", data));
  }

  findEmp(id: string) {
    this._service.findEmpById(parseInt(id)).subscribe(
      {
        next: data => {
          this.found = true;
          this.emp = data;
        },
        error: (err) => console.log(err.message)
      }
    )
  }
}
