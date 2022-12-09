import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasComponentComponent } from './empresas-component.component';

describe('EmpresasComponentComponent', () => {
  let component: EmpresasComponentComponent;
  let fixture: ComponentFixture<EmpresasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
