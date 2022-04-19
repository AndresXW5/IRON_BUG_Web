import { TestBed } from '@angular/core/testing';

import { ServerRankingService } from './server-ranking.service';

describe('ServerRankingService', () => {
  let service: ServerRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
