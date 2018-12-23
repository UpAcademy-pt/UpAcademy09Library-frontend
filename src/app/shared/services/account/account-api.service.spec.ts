import { TestBed } from '@angular/core/testing';
import { AcountApiService } from './account-api.service';


describe('AcountApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcountApiService = TestBed.get(AcountApiService);
    expect(service).toBeTruthy();
  });
});
