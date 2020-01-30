import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-child-element',
  templateUrl: './view-child-element.component.html',
  styleUrls: ['./view-child-element.component.css']
})
export class ViewChildElementComponent implements AfterViewInit {

  @ViewChild('pRef',{static: true}) pRef: ElementRef;
  
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    console.log('pref', this.pRef);
    console.log('pref', this.pRef.nativeElement);

    this.renderer.addClass(this.pRef.nativeElement, 'wild')
  }
}
