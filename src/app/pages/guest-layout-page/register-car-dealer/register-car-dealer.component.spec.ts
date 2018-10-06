import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarDealerComponent } from './register-car-dealer.component';

describe('RegisterCarDealerComponent', () => {
  let component: RegisterCarDealerComponent;
  let fixture: ComponentFixture<RegisterCarDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCarDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
