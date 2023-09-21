import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  emp: Emp;
  selectedId:string;

  constructor(private _service: EmpService, private route: ActivatedRoute, router: Router) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(subscriber=>{
      console.log("Go the data as ",subscriber.get('name'));
      this.selectedId=subscriber.get('id');
    }
    );
    this._service.findEmpById(parseInt(this.selectedId)).subscribe(data=>this.emp=data);
   
  }

}
