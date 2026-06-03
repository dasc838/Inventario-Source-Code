import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarArtDialogComponent } from './sumar-art-dialog.component';

describe('SumarArtDialogComponent', () => {
  let component: SumarArtDialogComponent;
  let fixture: ComponentFixture<SumarArtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumarArtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumarArtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
