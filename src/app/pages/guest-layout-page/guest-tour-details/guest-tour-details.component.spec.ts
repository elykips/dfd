import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTourDetailsComponent } from './guest-tour-details.component';

describe('GuestTourDetailsComponent', () => {
  let component: GuestTourDetailsComponent;
  let fixture: ComponentFixture<GuestTourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestTourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
