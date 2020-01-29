import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeElementComponent } from './some-element.component';

describe('SomeElementComponent', () => {
  let component: SomeElementComponent;
  let fixture: ComponentFixture<SomeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
