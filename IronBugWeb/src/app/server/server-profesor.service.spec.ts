import { TestBed } from '@angular/core/testing';

import { ServerProfesorService } from './server-profesor.service';

describe('ServerProfesorService', () => {
  let service: ServerProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
