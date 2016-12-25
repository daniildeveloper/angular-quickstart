/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero.service.tsService } from './hero.service.ts.service';

describe('Service: Hero.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero.service.tsService]
    });
  });

  it('should ...', inject([Hero.service.tsService], (service: Hero.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});