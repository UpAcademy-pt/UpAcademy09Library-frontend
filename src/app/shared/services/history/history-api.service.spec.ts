import { TestBed } from '@angular/core/testing';

import { HistoryApiService } from './history-api.service';

describe('HistoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryApiService = TestBed.get(HistoryApiService);
    expect(service).toBeTruthy();
  });
});
