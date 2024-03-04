import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinManAddComponent } from './fin-man-add.component';

describe('FinManAddComponent', () => {
  let component: FinManAddComponent;
  let fixture: ComponentFixture<FinManAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinManAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinManAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
