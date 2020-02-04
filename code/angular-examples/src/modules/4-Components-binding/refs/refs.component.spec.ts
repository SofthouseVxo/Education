import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsComponent } from './refs.component';

describe('RefsComponent', () => {
  let component: RefsComponent;
  let fixture: ComponentFixture<RefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
