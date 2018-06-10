import { TestBed, inject } from '@angular/core/testing';

import { SnippetManagerService } from './snippet-manager.service';

describe('SnippetManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnippetManagerService]
    });
  });

  it('should be created', inject([SnippetManagerService], (service: SnippetManagerService) => {
    expect(service).toBeTruthy();
  }));
});
