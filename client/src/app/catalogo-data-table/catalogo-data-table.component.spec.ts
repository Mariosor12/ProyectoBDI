import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDataTableComponent } from './catalogo-data-table.component';

describe('CatalogoDataTableComponent', () => {
  let component: CatalogoDataTableComponent;
  let fixture: ComponentFixture<CatalogoDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
