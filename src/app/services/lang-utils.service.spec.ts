import { TestBed } from '@angular/core/testing';

import { LangUtilsService } from './lang-utils.service';

describe('LangUtilsService', () => {
  let service: LangUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
