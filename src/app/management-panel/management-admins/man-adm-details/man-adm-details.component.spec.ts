import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAdmDetailsComponent } from './man-adm-details.component';

describe('ManAdmDetailsComponent', () => {
  let component: ManAdmDetailsComponent;
  let fixture: ComponentFixture<ManAdmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManAdmDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManAdmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
