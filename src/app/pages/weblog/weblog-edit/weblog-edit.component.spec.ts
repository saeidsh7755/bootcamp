import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblogEditComponent } from './weblog-edit.component';

describe('WeblogEditComponent', () => {
  let component: WeblogEditComponent;
  let fixture: ComponentFixture<WeblogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeblogEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeblogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
