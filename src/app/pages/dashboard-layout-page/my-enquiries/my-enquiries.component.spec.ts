import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnquiriesComponent } from './my-enquiries.component';

describe('MyEnquiriesComponent', () => {
  let component: MyEnquiriesComponent;
  let fixture: ComponentFixture<MyEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
