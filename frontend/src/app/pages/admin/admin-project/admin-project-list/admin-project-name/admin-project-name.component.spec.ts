import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectNameComponent } from './admin-project-name.component';

describe('AdminProjectNameComponent', () => {
  let component: AdminProjectNameComponent;
  let fixture: ComponentFixture<AdminProjectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProjectNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
