import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent {

  success:string="success";
  hasError:boolean=false;
  isSpecial:boolean=true;

  myStyleClasses={
    "success":!this.hasError,
    "special":this.isSpecial,
    "error":this.hasError
  }

  myInlineStyles={fontSize:'50px',fontWeight:"bold"};

}
