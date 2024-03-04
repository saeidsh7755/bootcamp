import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblogDetailsComponent } from './weblog-details.component';

describe('WeblogDetailsComponent', () => {
  let component: WeblogDetailsComponent;
  let fixture: ComponentFixture<WeblogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeblogDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeblogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
