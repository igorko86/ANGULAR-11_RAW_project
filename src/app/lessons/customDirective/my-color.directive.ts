import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(elementRef: ElementRef, render: Renderer2) {
    render.setStyle(elementRef.nativeElement, "backgroundColor", "green")
  }
}
