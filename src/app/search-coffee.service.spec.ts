import { TestBed } from '@angular/core/testing';

import { SearchCoffeeService } from './search-coffee.service';

describe('SearchCoffeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCoffeeService = TestBed.get(SearchCoffeeService);
    expect(service).toBeTruthy();
  });
});
