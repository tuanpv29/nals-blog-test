import { TestBed } from '@angular/core/testing';

import { FeedbackMessagesService } from './feedback-messages.service';

describe('FeedbackMessagesService', () => {
  let service: FeedbackMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
