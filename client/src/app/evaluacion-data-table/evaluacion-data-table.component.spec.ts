import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDataTableComponent } from './evaluacion-data-table.component';

describe('EvaluacionDataTableComponent', () => {
  let component: EvaluacionDataTableComponent;
  let fixture: ComponentFixture<EvaluacionDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
