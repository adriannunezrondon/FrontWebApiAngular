import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInsertarComponent } from './producto-insertar.component';

describe('ProductoInsertarComponent', () => {
  let component: ProductoInsertarComponent;
  let fixture: ComponentFixture<ProductoInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
