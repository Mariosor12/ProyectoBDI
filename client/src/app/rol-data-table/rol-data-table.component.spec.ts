import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDataTableComponent } from './rol-data-table.component';

describe('RolDataTableComponent', () => {
  let component: RolDataTableComponent;
  let fixture: ComponentFixture<RolDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
