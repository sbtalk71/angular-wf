import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ContentComponent } from './content/content.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { HighlighterDirective } from './highlighter.directive';
import { HighlighterclsDirective2 } from './highlighter2.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    DirectivesComponent,
    ContentComponent,
    AttrDirectivesComponent,
    HighlighterDirective,
    HighlighterclsDirective2
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
