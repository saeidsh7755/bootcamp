import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinManEditComponent } from './fin-man-edit.component';

describe('FinManEditComponent', () => {
  let component: FinManEditComponent;
  let fixture: ComponentFixture<FinManEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinManEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinManEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
