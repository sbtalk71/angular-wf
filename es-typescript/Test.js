"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo_1 = require("./Demo");
var TempEmployee_1 = require("./TempEmployee");
var emp = new Demo_1.Employee(100, 'Shantanu', 68000);
console.log(emp.getDetails());
var tempEmp = new TempEmployee_1.TempEmployee(102, 'Karan', 56000, 'good');
console.log(tempEmp.getDetails());
