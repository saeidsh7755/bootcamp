import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinManListComponent } from './fin-man-list.component';

describe('FinManListComponent', () => {
  let component: FinManListComponent;
  let fixture: ComponentFixture<FinManListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinManListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinManListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
