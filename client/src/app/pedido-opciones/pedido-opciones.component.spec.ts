import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoOpcionesComponent } from './pedido-opciones.component';

describe('PedidoOpcionesComponent', () => {
  let component: PedidoOpcionesComponent;
  let fixture: ComponentFixture<PedidoOpcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoOpcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
