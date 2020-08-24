import { TestBed } from '@angular/core/testing';

import { HttpCoreServiceService } from './http-core-service.service';

describe('HttpCoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCoreServiceService = TestBed.get(HttpCoreServiceService);
    expect(service).toBeTruthy();
  });
});
