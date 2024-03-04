import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinManDetailsComponent } from './fin-man-details.component';

describe('FinManDetailsComponent', () => {
  let component: FinManDetailsComponent;
  let fixture: ComponentFixture<FinManDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinManDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinManDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
