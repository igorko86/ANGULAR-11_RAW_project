import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyColorChange]'
})
export class MyColorChangeDirective {
  constructor(elementRef: ElementRef, renderer2: Renderer2) { }

  // @Input('appMyColorChange') set changeColor (color: string) {
  //   this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
  // }
}
