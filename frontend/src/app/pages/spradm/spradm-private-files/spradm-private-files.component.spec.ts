import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmPrivateFilesComponent } from './spradm-private-files.component';

describe('SpradmPrivateFilesComponent', () => {
  let component: SpradmPrivateFilesComponent;
  let fixture: ComponentFixture<SpradmPrivateFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmPrivateFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmPrivateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
