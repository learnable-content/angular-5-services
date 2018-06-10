import { TestBed, inject } from '@angular/core/testing';

import { LanguageManagerService } from './language-manager.service';

describe('LanguageManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageManagerService]
    });
  });

  it('should be created', inject([LanguageManagerService], (service: LanguageManagerService) => {
    expect(service).toBeTruthy();
  }));
});
