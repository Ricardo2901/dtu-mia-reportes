import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmAdminComponent } from './spradm-admin.component';

describe('SpradmAdminComponent', () => {
  let component: SpradmAdminComponent;
  let fixture: ComponentFixture<SpradmAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
