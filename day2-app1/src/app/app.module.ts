import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { HelloComponent } from './hello/hello.component';
import { MyfeatureModule } from './myfeature/myfeature.module';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    MyfeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
