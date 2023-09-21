import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private base_url="http://localhost:3000/emp/";

  constructor(private http:HttpClient) { }

  public getEmpList():Observable<Emp[]>{
    return this.http.get<Emp[]>(this.base_url,{headers:{'Accept':'application/json'}});
  }

  public deleteEmpById(id:number):Observable<Emp>{
    return this.http.delete<Emp>(this.base_url+id);
  }

  public findEmpById(id:number):Observable<Emp>{
    return this.http.get<Emp>(this.base_url+id);
  }

  public addEmp(emp:Emp):Observable<Emp>{
    return this.http.post<Emp>(this.base_url,emp);
  }

  public updateEmp(emp:Emp):Observable<Emp>{
    return this.http.put<Emp>(this.base_url+emp.empId,emp);
  }
}
