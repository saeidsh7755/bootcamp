import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAdminsComponent } from './management-admins.component';

describe('ManagementAdminsComponent', () => {
  let component: ManagementAdminsComponent;
  let fixture: ComponentFixture<ManagementAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementAdminsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
