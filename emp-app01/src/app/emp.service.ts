import { Injectable } from '@angular/core';
import { EMPDATA } from './emp-mock-data';
import { Emp } from './emp';

@Injectable({
  providedIn:'root'
})
export class EmpService {

  constructor() { }

  public getEmpList():Emp[]{
    return EMPDATA;
  }
}
