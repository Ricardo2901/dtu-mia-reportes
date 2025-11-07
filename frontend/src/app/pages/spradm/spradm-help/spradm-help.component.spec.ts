import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmHelpComponent } from './spradm-help.component';

describe('SpradmHelpComponent', () => {
  let component: SpradmHelpComponent;
  let fixture: ComponentFixture<SpradmHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
