import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDynamicComponent } from './comp-dynamic.component';

describe('CompDynamicComponent', () => {
  let component: CompDynamicComponent;
  let fixture: ComponentFixture<CompDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
