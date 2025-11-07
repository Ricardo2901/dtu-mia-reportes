import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmHomeComponent } from './spradm-home.component';

describe('SpradmHomeComponent', () => {
  let component: SpradmHomeComponent;
  let fixture: ComponentFixture<SpradmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
