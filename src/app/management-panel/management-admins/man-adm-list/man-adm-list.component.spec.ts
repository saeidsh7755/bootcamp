import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAdmListComponent } from './man-adm-list.component';

describe('ManAdmListComponent', () => {
  let component: ManAdmListComponent;
  let fixture: ComponentFixture<ManAdmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManAdmListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManAdmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
