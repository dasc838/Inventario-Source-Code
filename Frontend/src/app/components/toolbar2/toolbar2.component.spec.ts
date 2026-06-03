import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar2Component } from './toolbar2.component';

describe('Toolbar2Component', () => {
  let component: Toolbar2Component;
  let fixture: ComponentFixture<Toolbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Toolbar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
