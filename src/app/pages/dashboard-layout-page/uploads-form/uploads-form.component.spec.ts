import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsFormComponent } from './uploads-form.component';

describe('UploadsFormComponent', () => {
  let component: UploadsFormComponent;
  let fixture: ComponentFixture<UploadsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
