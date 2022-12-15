import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasDeleteComponent } from './empresas-delete.component';

describe('EmpresasDeleteComponent', () => {
  let component: EmpresasDeleteComponent;
  let fixture: ComponentFixture<EmpresasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
