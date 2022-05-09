import { TestBed } from '@angular/core/testing';

import { ServerProductosService } from './server-productos.service';

describe('ServerProductosService', () => {
  let service: ServerProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
