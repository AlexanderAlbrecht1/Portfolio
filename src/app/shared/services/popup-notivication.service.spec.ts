import { TestBed } from '@angular/core/testing';

import { PopupNotivicationService } from './popup-notivication.service';

describe('PopupNotivicationService', () => {
  let service: PopupNotivicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupNotivicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
