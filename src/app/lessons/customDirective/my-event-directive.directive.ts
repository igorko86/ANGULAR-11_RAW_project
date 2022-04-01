import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyEventDirective]'
})
export class MyEventDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeColorText(null);
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.changeColorText('red');
  }

  private changeColorText(color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }
}
