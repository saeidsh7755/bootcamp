import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAdmEditComponent } from './man-adm-edit.component';

describe('ManAdmEditComponent', () => {
  let component: ManAdmEditComponent;
  let fixture: ComponentFixture<ManAdmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManAdmEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManAdmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
