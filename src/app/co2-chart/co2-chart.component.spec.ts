import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2ChartComponent } from './co2-chart.component';

describe('Co2ChartComponent', () => {
  let component: Co2ChartComponent;
  let fixture: ComponentFixture<Co2ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
