import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrivateFilesComponent } from './admin-private-files.component';

describe('AdminPrivateFilesComponent', () => {
  let component: AdminPrivateFilesComponent;
  let fixture: ComponentFixture<AdminPrivateFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPrivateFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPrivateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
