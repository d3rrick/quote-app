import { TestBed, inject } from '@angular/core/testing';

import { ServeDataService } from './serve-data.service';

describe('ServeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeDataService]
    });
  });

  it('should be created', inject([ServeDataService], (service: ServeDataService) => {
    expect(service).toBeTruthy();
  }));
});
