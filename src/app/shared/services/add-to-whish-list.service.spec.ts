import { TestBed } from '@angular/core/testing';

import { AddToWhishListService } from './add-to-whish-list.service';

describe('AddToWhishListService', () => {
  let service: AddToWhishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToWhishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
