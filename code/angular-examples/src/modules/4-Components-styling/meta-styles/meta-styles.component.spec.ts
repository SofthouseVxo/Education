import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaStylesComponent } from './meta-styles.component';

describe('MetaStylesComponent', () => {
  let component: MetaStylesComponent;
  let fixture: ComponentFixture<MetaStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
