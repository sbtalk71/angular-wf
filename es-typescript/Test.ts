import { Address, Employee } from "./Demo";


const address=new Address("123",500079);

const emp=new Employee(100,'Shantanu',68000,address);

console.log(emp.getDetails());

