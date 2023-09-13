import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from '../demo2/demo2.component';



@NgModule({
  declarations: [
    Demo2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Demo2Component]
})
export class MyfeatureModule { }
