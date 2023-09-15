import { AfterContentInit, AfterViewInit, Component,ContentChild,DoCheck,ElementRef,Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewInit{
@ViewChild('wrapper')wrapper!:ElementRef;
@ContentChild("contentWrapper") contentWrapper!:ElementRef;

  @Input() userName:string='';
  counter:number=0;
  constructor(){
    console.log("from child's constructor.."+this.counter++);
    console.log("wrapper element is ",this.wrapper);
  }

  ngOnInit(): void {
    console.log("from child's ngOnInit : "+this.counter++);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change Happend : "+(this.counter++)+"->",changes);
  }

  ngDoCheck(): void {
    console.log("NgDocheck triggered",this.counter++);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit: contentWrapper element is ",this.contentWrapper);
  }

  ngAfterViewInit(): void {
    console.log("wrapper element is ",this.wrapper);
  }
}
