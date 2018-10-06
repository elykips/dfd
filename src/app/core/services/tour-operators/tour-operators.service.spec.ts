import { TestBed, inject } from '@angular/core/testing';

import { TourOperatorsService } from './tour-operators.service';

describe('TourOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourOperatorsService]
    });
  });

  it('should be created', inject([TourOperatorsService], (service: TourOperatorsService) => {
    expect(service).toBeTruthy();
  }));
});
