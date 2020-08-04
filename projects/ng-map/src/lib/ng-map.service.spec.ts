import { TestBed } from '@angular/core/testing';

import { NgMapService } from './ng-map.service';

describe('NgMapService', () => {
  let service: NgMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
