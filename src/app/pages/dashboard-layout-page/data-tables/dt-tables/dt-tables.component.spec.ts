import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtTablesComponent } from './dt-tables.component';

describe('DtTablesComponent', () => {
  let component: DtTablesComponent;
  let fixture: ComponentFixture<DtTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
