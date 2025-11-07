import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmAboutComponent } from './spradm-about.component';

describe('SpradmAboutComponent', () => {
  let component: SpradmAboutComponent;
  let fixture: ComponentFixture<SpradmAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
