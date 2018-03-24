import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DionaeaSensorComponent } from './dionaea-sensor.component';

describe('DionaeaSensorComponent', () => {
  let component: DionaeaSensorComponent;
  let fixture: ComponentFixture<DionaeaSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DionaeaSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DionaeaSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
