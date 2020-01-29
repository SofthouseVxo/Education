import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @Input() appHighlight: string;

    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
       el.nativeElement.style.fontSize = '24px';
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      console.log(this.appHighlight);
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = 'red';
    }

    // private highlight(color: string) {
    //   this.el.nativeElement.style.backgroundColor = color;
    // }
}
