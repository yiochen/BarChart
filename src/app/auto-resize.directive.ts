import { Directive, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAutoResize]',
  exportAs: 'autoResize'
})
export class AutoResizeDirective implements AfterViewInit, OnDestroy {
  height = 0;
  width = 0;
  requestId = null;
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    let checkDimension = () =>{
      this.height = this.el.nativeElement.clientHeight;
      this.width = this.el.nativeElement.clientWidth;
      this.requestId = window.requestAnimationFrame(checkDimension);
    }
    // If call the following line here, error will be thrown in debug mode
    // Expression has changed after it was checked.
    // checkDimension();

    this.requestId = window.requestAnimationFrame(checkDimension);
  }

  ngOnDestroy() {
    if (this.requestId != null) {
      window.cancelAnimationFrame(this.requestId);
    }
  }
  
}
