import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HomeComponent } from './home/home.component';
import { ApraisalComponent } from './apraisal/apraisal.component';
import { MeetupComponent } from './meetup/meetup.component';


@NgModule({
  declarations: [
    HomeComponent,ApraisalComponent,MeetupComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ],
  exports:[]
})
export class HrModule {
  constructor() {
    console.log("Hr Module loaded......");
  }

}
