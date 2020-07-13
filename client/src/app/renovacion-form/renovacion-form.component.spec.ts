import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionFormComponent } from './renovacion-form.component';

describe('RenovacionFormComponent', () => {
  let component: RenovacionFormComponent;
  let fixture: ComponentFixture<RenovacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
