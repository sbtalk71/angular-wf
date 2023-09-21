import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FindEmpComponent } from './find-emp/find-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { MyloggerInterceptor } from './mylogger.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    FindEmpComponent,
    AddEmpComponent,
    EmpDetailsComponent,
    UpdateEmpComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:MyloggerInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    console.log("APP module loaded...");
  }
 }
