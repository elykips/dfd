import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestToursComponent } from './guest-tours.component';

describe('GuestToursComponent', () => {
  let component: GuestToursComponent;
  let fixture: ComponentFixture<GuestToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
