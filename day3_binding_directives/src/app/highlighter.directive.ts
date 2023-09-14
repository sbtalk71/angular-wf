import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private element:ElementRef) {
    (this.element.nativeElement as HTMLElement).style.backgroundColor="yellow";
   }


}
