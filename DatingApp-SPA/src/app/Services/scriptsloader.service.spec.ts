/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScriptsloaderService } from './scriptsloader.service';

describe('Service: Scriptsloader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptsloaderService]
    });
  });

  it('should ...', inject([ScriptsloaderService], (service: ScriptsloaderService) => {
    expect(service).toBeTruthy();
  }));
});
