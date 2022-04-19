import { TestBed } from '@angular/core/testing';

import { ServerAlumnoService } from './server-alumno.service';

describe('ServerAlumnoService', () => {
  let service: ServerAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
