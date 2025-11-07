import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutComponent } from './spradm-proyectos-about.component';

describe('SpradmProyectosAboutComponent', () => {
  let component: SpradmProyectosAboutComponent;
  let fixture: ComponentFixture<SpradmProyectosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
