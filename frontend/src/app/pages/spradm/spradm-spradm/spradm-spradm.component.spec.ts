import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmSpradmComponent } from './spradm-spradm.component';

describe('SpradmSpradmComponent', () => {
  let component: SpradmSpradmComponent;
  let fixture: ComponentFixture<SpradmSpradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmSpradmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmSpradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
