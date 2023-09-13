import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  theFruit: string = "";
  fruits: string[] = ["apple", "banana", "pear", "orange", "guava", "peach"];

  isAdmin:boolean=true;
  color:string='nocolor';

  getData(fruit: string) {
    this.theFruit = fruit;
  }

  onSelect(color:string){
    this.color=color;
  }
}
