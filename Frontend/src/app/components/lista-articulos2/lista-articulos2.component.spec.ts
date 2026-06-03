import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticulos2Component } from './lista-articulos2.component';

describe('ListaArticulos2Component', () => {
  let component: ListaArticulos2Component;
  let fixture: ComponentFixture<ListaArticulos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArticulos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArticulos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
