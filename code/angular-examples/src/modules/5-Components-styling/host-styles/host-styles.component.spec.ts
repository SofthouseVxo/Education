import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStylesComponent } from './host-styles.component';

describe('HostStylesComponent', () => {
  let component: HostStylesComponent;
  let fixture: ComponentFixture<HostStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
