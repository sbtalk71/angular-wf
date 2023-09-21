import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { FindEmpComponent } from './find-emp/find-emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './hr/home/home.component';
import { MeetupComponent } from './hr/meetup/meetup.component';
import { ApraisalComponent } from './hr/apraisal/apraisal.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'emplist', component: EmplistComponent },
  {path:'emplist/:id',component:DetailsComponent,data:{name:'Rocky'}},
  { path: 'addemp', component: AddEmpComponent },
  { path: 'update', component: UpdateEmpComponent },
  { path: 'find', component: FindEmpComponent },
  {
    path: 'hr', loadChildren:()=>import('./hr/hr.module').then(m=>m.HrModule)
  },
  { path: '', redirectTo: 'emplist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
