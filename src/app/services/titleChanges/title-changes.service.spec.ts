import { TestBed } from '@angular/core/testing';

import { TitleChangesService } from './title-changes.service';

describe('TitleChangesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleChangesService = TestBed.get(TitleChangesService);
    expect(service).toBeTruthy();
  });
});
