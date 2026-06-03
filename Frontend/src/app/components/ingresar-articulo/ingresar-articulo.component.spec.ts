import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarArticuloComponent } from './ingresar-articulo.component';

describe('IngresarArticuloComponent', () => {
  let component: IngresarArticuloComponent;
  let fixture: ComponentFixture<IngresarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
