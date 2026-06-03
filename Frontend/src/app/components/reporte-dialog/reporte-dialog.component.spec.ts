import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDialogComponent } from './reporte-dialog.component';

describe('ReporteDialogComponent', () => {
  let component: ReporteDialogComponent;
  let fixture: ComponentFixture<ReporteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
