import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildElementComponent } from './view-child-element.component';

describe('ViewChildElementComponent', () => {
  let component: ViewChildElementComponent;
  let fixture: ComponentFixture<ViewChildElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
