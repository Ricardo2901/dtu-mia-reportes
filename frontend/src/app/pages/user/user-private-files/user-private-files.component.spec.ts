import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrivateFilesComponent } from './user-private-files.component';

describe('UserPrivateFilesComponent', () => {
  let component: UserPrivateFilesComponent;
  let fixture: ComponentFixture<UserPrivateFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPrivateFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPrivateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
