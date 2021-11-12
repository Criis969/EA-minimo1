import { TestBed } from '@angular/core/testing';

import { SeguimientosService } from './seguimientos.service';

describe('StudentsService', () => {
  let service: SeguimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
