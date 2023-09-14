import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter2]'
})
export class HighlighterclsDirective2 {

  @HostBinding('style.backgroundColor') color: string = "yellow";

  constructor(private element: ElementRef) {
    (element.nativeElement as HTMLElement).style.backgroundColor = "yellow"
  }

  @HostListener('mouseenter')
  mouseenters() {
    this.color = 'green';
  }

  @HostListener('mouseleave')
  mouseleaves() {
    this.color = 'yellow';
  }

  @HostListener('click')
  onClick() {
    this.color = '';
  }
}
