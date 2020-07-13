import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionContratoComponent } from './condicion-contrato.component';

describe('CondicionContratoComponent', () => {
  let component: CondicionContratoComponent;
  let fixture: ComponentFixture<CondicionContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
