import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionfinalComponent } from './evaluacionfinal.component';

describe('EvaluacionfinalComponent', () => {
  let component: EvaluacionfinalComponent;
  let fixture: ComponentFixture<EvaluacionfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
