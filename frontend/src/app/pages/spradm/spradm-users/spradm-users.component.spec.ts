import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmUsersComponent } from './spradm-users.component';

describe('SpradmUsersComponent', () => {
  let component: SpradmUsersComponent;
  let fixture: ComponentFixture<SpradmUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
