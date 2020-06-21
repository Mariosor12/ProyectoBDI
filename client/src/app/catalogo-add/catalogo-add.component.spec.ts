import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAddComponent } from './catalogo-add.component';

describe('CatalogoAddComponent', () => {
  let component: CatalogoAddComponent;
  let fixture: ComponentFixture<CatalogoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
