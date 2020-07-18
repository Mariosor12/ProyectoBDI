import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAceptadosComponent } from './pedidos-aceptados.component';

describe('PedidosAceptadosComponent', () => {
  let component: PedidosAceptadosComponent;
  let fixture: ComponentFixture<PedidosAceptadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAceptadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
