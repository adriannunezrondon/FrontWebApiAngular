import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasModificarComponent } from './empresas-modificar.component';

describe('EmpresasModificarComponent', () => {
  let component: EmpresasModificarComponent;
  let fixture: ComponentFixture<EmpresasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
