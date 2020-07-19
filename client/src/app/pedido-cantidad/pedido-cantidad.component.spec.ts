import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCantidadComponent } from './pedido-cantidad.component';

describe('PedidoCantidadComponent', () => {
  let component: PedidoCantidadComponent;
  let fixture: ComponentFixture<PedidoCantidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCantidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
