import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpService } from './emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
