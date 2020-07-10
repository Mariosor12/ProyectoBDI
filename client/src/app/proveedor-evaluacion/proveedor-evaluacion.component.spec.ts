import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorEvaluacionComponent } from './proveedor-evaluacion.component';

describe('ProveedorEvaluacionComponent', () => {
  let component: ProveedorEvaluacionComponent;
  let fixture: ComponentFixture<ProveedorEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
