import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDialog2Component } from './order-dialog2.component';

describe('OrderDialog2Component', () => {
  let component: OrderDialog2Component;
  let fixture: ComponentFixture<OrderDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDialog2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
