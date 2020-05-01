import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCompraComponent } from './producto-compra.component';

describe('ProductoCompraComponent', () => {
  let component: ProductoCompraComponent;
  let fixture: ComponentFixture<ProductoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
