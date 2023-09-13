import { Employee } from "./Demo";
import { TempEmployee } from "./TempEmployee";

const emp=new Employee(100,'Shantanu',68000);

console.log(emp.getDetails());

const tempEmp=new TempEmployee(102,'Karan',56000,'good');
console.log(tempEmp.getDetails());