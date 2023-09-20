import { Component,OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent  implements OnInit{
empdata!:Observable<Emp[]>;

constructor(private _service:EmpService){}


loadEmpList(){
  //this._service.getEmpList().subscribe(data=>this.empdata=data);
  this.empdata=this._service.getEmpList();
}

ngOnInit(): void {
  this.loadEmpList();
}

//event handlers
handleDelete(id:number){
  this._service.deleteEmpById(id).subscribe(x=>console.log(x));
  this.loadEmpList();
}
}
