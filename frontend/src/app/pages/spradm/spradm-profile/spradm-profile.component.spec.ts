import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProfileComponent } from './spradm-profile.component';

describe('SpradmProfileComponent', () => {
  let component: SpradmProfileComponent;
  let fixture: ComponentFixture<SpradmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
