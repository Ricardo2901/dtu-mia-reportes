import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmComponent } from './spradm.component';

describe('SpradmComponent', () => {
  let component: SpradmComponent;
  let fixture: ComponentFixture<SpradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
