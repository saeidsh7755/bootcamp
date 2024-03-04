import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAdmAddComponent } from './man-adm-add.component';

describe('ManAdmAddComponent', () => {
  let component: ManAdmAddComponent;
  let fixture: ComponentFixture<ManAdmAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManAdmAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManAdmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
