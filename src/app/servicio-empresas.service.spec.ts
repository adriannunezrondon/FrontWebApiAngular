import { TestBed } from '@angular/core/testing';

import { ServicioEmpresasService } from './servicio-empresas.service';

describe('ServicioEmpresasService', () => {
  let service: ServicioEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
