import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsightsComponent } from './travel-insights.component';

describe('TravelInsightsComponent', () => {
  let component: TravelInsightsComponent;
  let fixture: ComponentFixture<TravelInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
