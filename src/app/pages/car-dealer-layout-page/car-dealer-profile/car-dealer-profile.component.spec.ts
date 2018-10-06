import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDealerProfileComponent } from './car-dealer-profile.component';

describe('CarDealerProfileComponent', () => {
  let component: CarDealerProfileComponent;
  let fixture: ComponentFixture<CarDealerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDealerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDealerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
