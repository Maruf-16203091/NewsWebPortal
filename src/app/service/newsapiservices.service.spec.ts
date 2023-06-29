import { TestBed } from '@angular/core/testing';

import { NewsapiservicesService } from './newsapiservices.service';

describe('NewsapiservicesService', () => {
  let service: NewsapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
