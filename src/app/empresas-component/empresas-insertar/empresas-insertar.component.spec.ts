import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasInsertarComponent } from './empresas-insertar.component';

describe('EmpresasInsertarComponent', () => {
  let component: EmpresasInsertarComponent;
  let fixture: ComponentFixture<EmpresasInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
