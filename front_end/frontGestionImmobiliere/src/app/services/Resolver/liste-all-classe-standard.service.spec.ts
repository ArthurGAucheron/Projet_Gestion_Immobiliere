import { TestBed } from '@angular/core/testing';

import { ListeAllClasseStandardService } from './liste-all-classe-standard.service';

describe('ListeAllClasseStandardService', () => {
  let service: ListeAllClasseStandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAllClasseStandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
