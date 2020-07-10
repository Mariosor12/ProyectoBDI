import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionpagoComponent } from './condicionpago.component';

describe('CondicionpagoComponent', () => {
  let component: CondicionpagoComponent;
  let fixture: ComponentFixture<CondicionpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
