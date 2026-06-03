import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarOrden2Component } from './generar-orden2.component';

describe('GenerarOrden2Component', () => {
  let component: GenerarOrden2Component;
  let fixture: ComponentFixture<GenerarOrden2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarOrden2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarOrden2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
