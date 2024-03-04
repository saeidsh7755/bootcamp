import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblogAddComponent } from './weblog-add.component';

describe('WeblogAddComponent', () => {
  let component: WeblogAddComponent;
  let fixture: ComponentFixture<WeblogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeblogAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeblogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
